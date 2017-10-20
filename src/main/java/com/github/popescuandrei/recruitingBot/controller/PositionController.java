package com.github.popescuandrei.recruitingBot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
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
@RequestMapping("/api/positions")
public class PositionController {

	@Autowired
	@Qualifier("positionService")
	private PositionService positionService;

	@Autowired
	@Qualifier("positionSkillsService")
	private PositionSkillService positionSkillsService;

	@Autowired
	@Qualifier("candidatePositionScoreService")
	private CandidatePositionScoreService candidatePositionScoreService;

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public @ResponseBody Position findOne(@PathVariable("id") Long id) {
		Position position = positionService.find(id);
		return position;
	}

	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<Position> findAll() {
		List<Position> positions = positionService.findAll();
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
		List<PositionSkill> skills = positionSkillsService.findAllByPositionId(id);
		return skills;
	}

	@RequestMapping(value = "/{id}/skills", method = RequestMethod.POST)
	public @ResponseBody PositionSkill createSkill(@PathVariable("id") Long positionId, @RequestBody PositionSkill positionSkill) {
		positionSkill = positionSkillsService.create(positionSkill);
		return positionSkill;
	}

	@RequestMapping(value = "/{positionId}/skills/{skillId}", method = RequestMethod.DELETE)
	public @ResponseBody PositionSkill deleteSkill(@PathVariable("positionId") Long positionId, @PathVariable("skillId") Long skillId) {
		return positionSkillsService.delete(skillId);
	}

	@RequestMapping(value = "/{id}/candidates", method = RequestMethod.GET)
	public @ResponseBody List<CandidatePositionScore> findAllCandidatesForPosition(@PathVariable("id") Long id) {
		List<CandidatePositionScore> candidates = candidatePositionScoreService.findAllByPositionId(id);
		return candidates;
	}
}
