package com.github.popescuandrei.recruitingBot.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.github.popescuandrei.recruitingBot.domain.CandidatePositionScore;
import com.github.popescuandrei.recruitingBot.domain.Language;
import com.github.popescuandrei.recruitingBot.domain.Position;
import com.github.popescuandrei.recruitingBot.domain.PositionExperience;
import com.github.popescuandrei.recruitingBot.domain.PositionLanguage;
import com.github.popescuandrei.recruitingBot.domain.PositionSkill;
import com.github.popescuandrei.recruitingBot.domain.Skill;
import com.github.popescuandrei.recruitingBot.dto.CandidateScoreDTO;
import com.github.popescuandrei.recruitingBot.dto.PositionExperienceDTO;
import com.github.popescuandrei.recruitingBot.dto.PositionLanguageDTO;
import com.github.popescuandrei.recruitingBot.dto.SkillDTO;
import com.github.popescuandrei.recruitingBot.service.CandidatePositionScoreService;
import com.github.popescuandrei.recruitingBot.service.LanguageService;
import com.github.popescuandrei.recruitingBot.service.PositionExperienceService;
import com.github.popescuandrei.recruitingBot.service.PositionLanguageService;
import com.github.popescuandrei.recruitingBot.service.PositionService;
import com.github.popescuandrei.recruitingBot.service.PositionSkillService;
import com.github.popescuandrei.recruitingBot.service.SkillService;


@RestController
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:4200", "https://recruitingmessbot.herokuapp.com"}, maxAge = 3600)
@RequestMapping("/api/positions")
public class PositionController {

	@Autowired
	@Qualifier("positionService")
	private PositionService positionService;

	@Autowired
	@Qualifier("positionSkillService")
	private PositionSkillService positionSkillService;

	@Autowired
	@Qualifier("positionExperienceService")
	private PositionExperienceService positionExperienceService;
	
	@Autowired
	@Qualifier("positionLanguageService")
	private PositionLanguageService positionLanguageService;
	
	@Autowired
	@Qualifier("skillService")
	private SkillService skillService;
	
	@Autowired
	@Qualifier("languageService")
	private LanguageService languageService;
	
	@Autowired
	@Qualifier("candidatePositionScoreService")
	private CandidatePositionScoreService candidatePositionScoreService;

	/**
	 * Mapping for retrieving all {@link Position}s as a list of rows
	 * @return
	 */
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<List<Position>> findAll() {
		List<Position> positionsList = positionService.findAll();
		List<List<Position>> positions = mapListToRows(positionsList);
		
		return positions;
	}
	
	/**
	 * Mapping for retrieving all {@link Position}s
	 * @return
	 */
	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public @ResponseBody List<Position> findAllForComparison() {
		return positionService.findAll();
	}
	
	/**
	 * Mapping for retrieving a {@link Position} with the corresponding id
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public @ResponseBody Position findOne(@PathVariable("id") Long id) {
		Position position = positionService.find(id);
		return position;
	}

	/**
	 * Mapping for creating a {@link Position}
	 * @param position
	 * @return
	 */
	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody Position create(@RequestBody Position position) {
		position = positionService.create(position);
		return position;
	}

	/**
	 * Mapping for deleting a {@link Position} with the corresponding id
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public @ResponseBody Position delete(@PathVariable("id") Long id) {
		return positionService.delete(id);
	}

	/**
	 * Mapping for retrieving the {@link Skill}s associated with a {@link Position} identified by its corresponding id
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "/{id}/skills", method = RequestMethod.GET)
	public @ResponseBody List<SkillDTO> findAllSkillsForPosition(@PathVariable("id") Long id) {
		List<PositionSkill> skills = positionSkillService.findAllByPositionId(id);
		
		return skills.stream()
				.map(ps -> SkillDTO.mapToDTOFromPosition(ps))
				.collect(Collectors.toList());
	}
	
	/**
	 * Mapping for retrieving the {@link PositionExperience}s associated with a {@link Position} identified by its corresponding id
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "/{id}/experience", method = RequestMethod.GET)
	public @ResponseBody List<PositionExperienceDTO> findAllRequiredExperienceForPosition(@PathVariable("id") Long id) {
		List<PositionExperience> experience = positionExperienceService.findAllByPositionId(id);
		
		return experience.stream()
				.map(pe -> PositionExperienceDTO.mapToDTO(pe))
				.collect(Collectors.toList());
	}
	
	/**
	 * Mapping for retrieving the {@link PositionLanguage}s associated with a {@link Position} identified by its corresponding id
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "/{id}/languages", method = RequestMethod.GET)
	public @ResponseBody List<PositionLanguageDTO> findAllRequiredLanguagesForPosition(@PathVariable("id") Long id) {
		List<PositionLanguage> languages = positionLanguageService.findAllByPositionId(id);
		
		return languages.stream()
				.map(pl -> PositionLanguageDTO.mapToDTO(pl))
				.collect(Collectors.toList());
	}

	/**
	 * 
	 * Mapping for creating a {@link PositionSkill} for a {@link Position} identified by its corresponding id
	 * @param positionId
	 * @param positionSkill
	 * @return
	 */
	@RequestMapping(value = "/{id}/skills", method = RequestMethod.POST)
	public @ResponseBody SkillDTO createSkill(@PathVariable("id") Long positionId, @RequestBody SkillDTO dto) {
		Position position = positionService.find(positionId);
		Skill skill = skillService.findByName(dto.getName());
		if (skill == null) {
			skill = skillService.create(skill);
		}
		
		PositionSkill ps = positionSkillService.create(SkillDTO.mapToPositionSkill(position, skill, dto));
		
		return SkillDTO.mapToDTOFromPosition(ps);
	}
	
	/**
	 * Mapping for creating a {@link PositionExperience} for a {@link Position} identified by its corresponding id
	 * @param positionId
	 * @param dto
	 * @return
	 */
	@RequestMapping(value = "/{id}/experience", method = RequestMethod.POST)
	public @ResponseBody PositionExperienceDTO createPositionExperience(@PathVariable("id") Long positionId, 
			@RequestBody PositionExperienceDTO dto) {
		Position position = positionService.find(positionId);
		PositionExperience exp = positionExperienceService.create(PositionExperienceDTO.mapToObject(position, dto));
		
		return PositionExperienceDTO.mapToDTO(exp);
	}
	
	
	/**
	 * Mapping for creating a {@link PositionExperience} for a {@link Position} identified by its corresponding id
	 * @param positionId
	 * @param dto
	 * @return
	 */
	@RequestMapping(value = "/{id}/language", method = RequestMethod.POST)
	public @ResponseBody PositionLanguageDTO createPositionExperience(@PathVariable("id") Long positionId, 
			@RequestBody PositionLanguageDTO dto) {
		Position position = positionService.find(positionId);
		Language language = languageService.findByName(dto.getName());
		PositionLanguage lang = positionLanguageService.create(PositionLanguageDTO.mapToObject(position, language, dto));
		
		return PositionLanguageDTO.mapToDTO(lang);
	}
	
	/**
	 * 
	 * Mapping for deleting a {@link PositionSkill} for a {@link Position} identified by its corresponding id
	 * @param positionId
	 * @param positionSkill
	 * @return
	 */
	@RequestMapping(value = "/{positionId}/skills/{skillName}", method = RequestMethod.DELETE)
	public @ResponseBody SkillDTO deleteSkill(@PathVariable("positionId") Long positionId, @PathVariable("skillName") String skillName) {
		Skill skill = skillService.findByName(skillName);
		PositionSkill ps = positionSkillService.findByPositionIdAndSkillId(positionId, skill.getId());
		
		ps = positionSkillService.delete(ps.getId());
		
		return SkillDTO.mapToDTOFromPosition(ps);
	}
	
	/**
	 * 
	 * Mapping for deleting a {@link PositionSkill} for a {@link Position} identified by its corresponding id
	 * @param positionId
	 * @param positionSkill
	 * @return
	 */
	@RequestMapping(value = "/{positionId}/experience/{title}", method = RequestMethod.DELETE)
	public @ResponseBody PositionExperienceDTO deleteExperience(@PathVariable("positionId") Long positionId, @PathVariable("title") String title) {
		PositionExperience pe = positionExperienceService.findByTitleAndPositionId(title, positionId);
		
		if (pe != null) {
			positionExperienceService.delete(pe.getId());
		}
		
		return PositionExperienceDTO.mapToDTO(pe);
	}
	
	
	/**
	 * 
	 * Mapping for deleting a {@link PositionSkill} for a {@link Position} identified by its corresponding id
	 * @param positionId
	 * @param positionSkill
	 * @return
	 */
	@RequestMapping(value = "/{positionId}/language/{langName}", method = RequestMethod.DELETE)
	public @ResponseBody PositionLanguageDTO deleteLanguage(@PathVariable("positionId") Long positionId, @PathVariable("langName") String langName) {
		PositionLanguage pl = positionLanguageService.findByLanguageNameAndPositionId(langName, positionId);
		
		if (pl != null) {
			positionExperienceService.delete(pl.getId());
		};
		
		return PositionLanguageDTO.mapToDTO(pl);
	}

	/**
	 * Mapping for retrieving all the candidates and their scores for a specific {@link Position}
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "/{id}/candidates", method = RequestMethod.GET)
	public @ResponseBody List<CandidateScoreDTO> findAllCandidatesForPosition(@PathVariable("id") Long id) {
		List<CandidatePositionScore> candidates = candidatePositionScoreService.findAllByPositionId(id);
		
		return candidates.stream()
				.map(cps -> CandidateScoreDTO.mapToDTO(cps))
				.collect(Collectors.toList());
	}
	
	/**
	 * Method that maps the list of @{link Candidate}s to a List of rows of @{link Candidate}s
	 * 
	 * @param candidates
	 * @return
	 */
	private List<List<Position>> mapListToRows(List<Position> positions) {
		List<List<Position>> positionsInRows = new ArrayList<List<Position>>();
		int index = 0;
		for(Position position: positions) {
			if(index == 0) {
				positionsInRows.add(new ArrayList<Position>());
			}
			
			positionsInRows.get(positionsInRows.size() - 1).add(position);
			
			index = index + 1;
			if (index == 2) {
				index = 0;
			}
		}
		return positionsInRows;
	}
}
