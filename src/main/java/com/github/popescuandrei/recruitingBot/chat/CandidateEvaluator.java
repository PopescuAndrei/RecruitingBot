package com.github.popescuandrei.recruitingBot.chat;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import com.github.popescuandrei.recruitingBot.domain.Candidate;
import com.github.popescuandrei.recruitingBot.domain.CandidateSkill;
import com.github.popescuandrei.recruitingBot.domain.Position;
import com.github.popescuandrei.recruitingBot.domain.PositionSkill;
import com.github.popescuandrei.recruitingBot.domain.Skill;
import com.github.popescuandrei.recruitingBot.service.CandidateSkillService;
import com.github.popescuandrei.recruitingBot.service.PositionService;
import com.github.popescuandrei.recruitingBot.service.PositionSkillService;

@Component
@Qualifier("candidateEvaluator")
public class CandidateEvaluator {

	@Autowired
	private PositionService positionService;
	
	@Autowired
	private CandidateSkillService candidateSkillService;
	
	@Autowired
	private PositionSkillService positionSkillService;
	
	// @Autowired
	// private CandidatePositionScoreService candidatePositionScoreService;
	
	// TODO : create new table CandidatePositionScore
//	public void scoreCandidate(Candidate candidate) {
//		List<Position> allPositions = positionService.findAll();
//		List<CandidateSkill> candidateSkills = candidateSkillService.findAllByCandidateId(candidate.getId());
//		Map<String, List<PositionSkill>> mapPositionSkills = extractPositionSkills(allPositions);
//		
//		for(Position position: allPositions) {
//			List<PositionSkill> positionSkills = mapPositionSkills.get(position.getName());
//			Double totalScore = 0.0;
//			
//		}
//	}
//	
//	private Map<String, List<Map<Skill, Double>>> extractPositionSkills(List<Position> allPositions) {
//		Map<String, List<Map<Skill, Double>>> skillsMap = new HashMap<String, List<Map<Skill, Double>>>();
//		for(Position position: allPositions) {
//			List<PositionSkill> positionSkills = positionSkillService.findAllByPositionId(position.getId());
//			for (positionSkill.)
//		}
//		
//		return skillsMap;
//	}
}
