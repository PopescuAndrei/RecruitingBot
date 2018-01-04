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
import com.github.popescuandrei.recruitingBot.domain.Position;
import com.github.popescuandrei.recruitingBot.domain.PositionSkill;
import com.github.popescuandrei.recruitingBot.domain.Skill;
import com.github.popescuandrei.recruitingBot.dto.CandidateScoreDTO;
import com.github.popescuandrei.recruitingBot.dto.SkillDTO;
import com.github.popescuandrei.recruitingBot.service.CandidatePositionScoreService;
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
	@Qualifier("skillService")
	private SkillService skillService;
	
	@Autowired
	@Qualifier("candidatePositionScoreService")
	private CandidatePositionScoreService candidatePositionScoreService;

	/**
	 * Mapping for retrieving all {@link Position}s
	 * @return
	 */
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<List<Position>> findAll() {
		List<Position> positionsList = positionService.findAll();
		List<List<Position>> positions = mapListToRows(positionsList);
		
		return positions;
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
	 * 
	 * Mapping for bulk creating {@link PositionSkill}s for a {@link Position} identified by its corresponding id
	 * @param positionId
	 * @param positionSkill
	 * @return
	 */
	@RequestMapping(value = "/{id}/skillsBulk", method = RequestMethod.POST)
	public @ResponseBody List<SkillDTO> createSkills(@PathVariable("id") Long positionId, @RequestBody List<SkillDTO> dtos) {
		List<SkillDTO> response = new ArrayList<SkillDTO>();
		
		Position position = positionService.find(positionId);
		for(SkillDTO dto : dtos) {
			Skill skill = skillService.findByName(dto.getName());
			if (skill == null) {
				skill = skillService.create(skill);
			}
			
			PositionSkill ps = positionSkillService.findByPositionIdAndSkillId(positionId, skill.getId());
			if(ps == null) {
				ps = positionSkillService.create(SkillDTO.mapToPositionSkill(position, skill, dto));
			}
			
			response.add(SkillDTO.mapToDTOFromPosition(ps));
		}
		
		
		return response;
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
