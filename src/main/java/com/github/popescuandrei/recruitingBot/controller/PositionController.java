package com.github.popescuandrei.recruitingBot.controller;

import java.util.ArrayList;
import java.util.List;

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
import com.github.popescuandrei.recruitingBot.service.CandidatePositionScoreService;
import com.github.popescuandrei.recruitingBot.service.PositionService;
import com.github.popescuandrei.recruitingBot.service.PositionSkillService;


@RestController
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:4200"}, maxAge = 3600)
@RequestMapping("/api/positions")
public class PositionController {

	@Autowired
	@Qualifier("positionService")
	private PositionService positionService;

	@Autowired
	@Qualifier("positionSkillService")
	private PositionSkillService positionSkillService;

	@Autowired
	@Qualifier("candidatePositionScoreService")
	private CandidatePositionScoreService candidatePositionScoreService;

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public @ResponseBody Position findOne(@PathVariable("id") Long id) {
		Position position = positionService.find(id);
		return position;
	}

	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<List<Position>> findAll() {
		List<Position> positionsList = positionService.findAll();
		List<List<Position>> positions = mapListToRows(positionsList);
		
		return positions;
	}

	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody Position create(@RequestBody Position position) {
		position = positionService.create(position);
		return position;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public @ResponseBody Position delete(@PathVariable("id") Long id) {
		return positionService.delete(id);
	}

	@RequestMapping(value = "/{id}/skills", method = RequestMethod.GET)
	public @ResponseBody List<PositionSkill> findAllSkillsForPosition(@PathVariable("id") Long id) {
		List<PositionSkill> skills = positionSkillService.findAllByPositionId(id);
		return skills;
	}

	@RequestMapping(value = "/{id}/skills", method = RequestMethod.POST)
	public @ResponseBody PositionSkill createSkill(@PathVariable("id") Long positionId, @RequestBody PositionSkill positionSkill) {
		positionSkill = positionSkillService.create(positionSkill);
		return positionSkill;
	}

	@RequestMapping(value = "/{positionId}/skills/{skillId}", method = RequestMethod.DELETE)
	public @ResponseBody PositionSkill deleteSkill(@PathVariable("positionId") Long positionId, @PathVariable("skillId") Long skillId) {
		return positionSkillService.delete(skillId);
	}

	@RequestMapping(value = "/{id}/candidates", method = RequestMethod.GET)
	public @ResponseBody List<CandidatePositionScore> findAllCandidatesForPosition(@PathVariable("id") Long id) {
		List<CandidatePositionScore> candidates = candidatePositionScoreService.findAllByPositionId(id);
		return candidates;
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
