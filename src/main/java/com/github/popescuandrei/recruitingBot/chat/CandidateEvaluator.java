package com.github.popescuandrei.recruitingBot.chat;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import com.github.popescuandrei.recruitingBot.domain.Candidate;
import com.github.popescuandrei.recruitingBot.domain.CandidatePositionScore;
import com.github.popescuandrei.recruitingBot.domain.CandidateSkill;
import com.github.popescuandrei.recruitingBot.domain.Position;
import com.github.popescuandrei.recruitingBot.domain.PositionSkill;
import com.github.popescuandrei.recruitingBot.domain.Skill;
import com.github.popescuandrei.recruitingBot.service.CandidatePositionScoreService;
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
	
	@Autowired
	private CandidatePositionScoreService candidatePositionScoreService;
	
	// {skills weight, languages weight, experience weight}
	private final Double[] weights = {0.6, 0.2, 0.2};
	
	/**
	 * Method that computes the scoring for a list of candidates
	 * @param candidates
	 */
	public void scoreMultipleCandidates(List<Candidate> candidates) {
		candidates.stream().forEach(c -> scoreCandidate(c));
	}
	
	/**
	 * Method that computes the scoring for a candidate for all the available jobs.
	 * ! imp scoring is computed based on skills atm
	 * ! languages & experience to be added later
	 * ! no one cares about the education and interests
	 * @param candidate
	 */
	public void scoreCandidate(Candidate candidate) {
		List<Position> allPositions = positionService.findAll();
		List<CandidateSkill> candidateSkills = candidateSkillService.findAllByCandidateId(candidate.getId());
		Map<Skill, Long> candidateSkillsMap = extractCandidateSkills(candidateSkills);
		Map<Long, Map<Skill, Long>> positionSkillsMap = extractPositionSkills(allPositions);
		
		List<CandidatePositionScore> positionScores = new ArrayList<CandidatePositionScore>();
		
		for(Position position: allPositions) {
			Double totalScore = 0.0;
			Double[] scores = {0.0, 0.0, 0.0};
			
			Map<Skill, Long> requiredSkillLevelsMap = positionSkillsMap.get(position.getId());
			int numberOfRequiredSkills = requiredSkillLevelsMap.keySet().size();
			
			for(Skill requiredSkill : requiredSkillLevelsMap.keySet()) {
				Double individualScore = 0.0;
				
				if (candidateSkillsMap.get(requiredSkill) == null) {
					individualScore = 0.0;
				} else if (candidateSkillsMap.get(requiredSkill) < requiredSkillLevelsMap.get(requiredSkill)) {
					individualScore = (100.0/ numberOfRequiredSkills) * 0.3;
				} else if (candidateSkillsMap.get(requiredSkill) - requiredSkillLevelsMap.get(requiredSkill) > 10 &&
					candidateSkillsMap.get(requiredSkill) - requiredSkillLevelsMap.get(requiredSkill) < 20) {
					individualScore = (100.0 / numberOfRequiredSkills) * 0.8;
				} else if (candidateSkillsMap.get(requiredSkill) - requiredSkillLevelsMap.get(requiredSkill) > 20){
					individualScore = (100.0 / numberOfRequiredSkills);	
				}
				scores[0] += individualScore;
			}
			
			//languages && education 
			totalScore = computeWeightedMean(scores, weights);
			CandidatePositionScore cps = new CandidatePositionScore(candidate, position, totalScore);
			positionScores.add(cps);
		}
		
		if (!positionScores.isEmpty()) {
			candidatePositionScoreService.saveAll(positionScores);
		}
	}
	
	/**
	 * Method that extracts the candidate's skills into a skill (key) - level (value) map
	 * @param candidateSkills
	 * @return
	 */
	private Map<Skill, Long> extractCandidateSkills(List<CandidateSkill> candidateSkills) {
		Map<Skill, Long> candidateSkillsMap = new HashMap<Skill, Long>();
		for(CandidateSkill candidateSkill: candidateSkills) {
			candidateSkillsMap.put(candidateSkill.getSkill(), candidateSkill.getLevel());
		}
		
		return candidateSkillsMap;
	}
	
	/**
	 * Method that extracts the position's required skills into a Map<Position, Map<Skill, Level>> map
	 * @param allPositions
	 * @return
	 */
	private Map<Long, Map<Skill, Long>> extractPositionSkills(List<Position> allPositions) {
		Map<Long, Map<Skill, Long>> skillsMap = new HashMap<Long, Map<Skill, Long>>();
		for(Position position: allPositions) {
			skillsMap.put(position.getId(), new HashMap<Skill, Long>());
			
			List<PositionSkill> positionSkills = positionSkillService.findAllByPositionId(position.getId());
			for (PositionSkill ps : positionSkills) {
				skillsMap.get(position.getId()).put(ps.getSkill(), ps.getLevel());
			}
		}
		
		return skillsMap;
	}
	
	private Double computeWeightedMean(Double[] values, Double[] weights) {
		Double weightedMean = 0.0;
		for(int index = 0; index < values.length; index++) {
			weightedMean = values[index] * weights[index];
		}
		return weightedMean/100;
	}
}
