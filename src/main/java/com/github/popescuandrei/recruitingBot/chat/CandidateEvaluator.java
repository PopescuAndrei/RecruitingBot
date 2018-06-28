package com.github.popescuandrei.recruitingBot.chat;

import static com.github.popescuandrei.recruitingBot.Utils.computeWeightedMean;
import static com.github.popescuandrei.recruitingBot.Utils.monthsDifference;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import com.github.popescuandrei.recruitingBot.domain.Candidate;
import com.github.popescuandrei.recruitingBot.domain.CandidateExperience;
import com.github.popescuandrei.recruitingBot.domain.CandidateLanguage;
import com.github.popescuandrei.recruitingBot.domain.CandidatePositionScore;
import com.github.popescuandrei.recruitingBot.domain.CandidateSkill;
import com.github.popescuandrei.recruitingBot.domain.Language;
import com.github.popescuandrei.recruitingBot.domain.Position;
import com.github.popescuandrei.recruitingBot.domain.PositionExperience;
import com.github.popescuandrei.recruitingBot.domain.PositionLanguage;
import com.github.popescuandrei.recruitingBot.domain.PositionSkill;
import com.github.popescuandrei.recruitingBot.domain.Skill;
import com.github.popescuandrei.recruitingBot.domain.support.Level;
import com.github.popescuandrei.recruitingBot.service.CandidateExperienceService;
import com.github.popescuandrei.recruitingBot.service.CandidateLanguageService;
import com.github.popescuandrei.recruitingBot.service.CandidatePositionScoreService;
import com.github.popescuandrei.recruitingBot.service.CandidateSkillService;
import com.github.popescuandrei.recruitingBot.service.PositionExperienceService;
import com.github.popescuandrei.recruitingBot.service.PositionLanguageService;
import com.github.popescuandrei.recruitingBot.service.PositionService;
import com.github.popescuandrei.recruitingBot.service.PositionSkillService;

@Component
@Qualifier("candidateEvaluator")
public class CandidateEvaluator {

	private final PositionService positionService;
	
	private final CandidateSkillService candidateSkillService;
	
<<<<<<< HEAD
	@Autowired
	private CandidateLanguageService candidateLanguageService;
	
	@Autowired
	private CandidateExperienceService candidateExperienceService;
	
	@Autowired
	private PositionSkillService positionSkillService;
	
	@Autowired
	private PositionLanguageService positionLanguageService;
	
	@Autowired
	private PositionExperienceService positionExperienceService;
	
	@Autowired
	private CandidatePositionScoreService candidatePositionScoreService;
	
	// {skills weight, experience weight, languages weight, education weight}
	private final Double[] weights = {0.4, 0.3, 0.2, 0.1};
=======
	private final CandidateLanguageService candidateLanguageService;
	
	private final CandidateExperienceService candidateExperienceService;
	
	private final PositionSkillService positionSkillService;
>>>>>>> 36ec2aa72ff19e308bcff3333d1f858c0181c0bd
	
	private final PositionLanguageService positionLanguageService;
	
	private final PositionExperienceService positionExperienceService;
	
	private final CandidatePositionScoreService candidatePositionScoreService;
	
	// {skills weight, experience weight, languages weight, education weight}
	private final Double[] weights = {0.4, 0.3, 0.2, 0.1};

	@Autowired
	public CandidateEvaluator(PositionService positionService, CandidateSkillService candidateSkillService, CandidateLanguageService candidateLanguageService, CandidateExperienceService candidateExperienceService, PositionSkillService positionSkillService, PositionLanguageService positionLanguageService, PositionExperienceService positionExperienceService, CandidatePositionScoreService candidatePositionScoreService) {
		this.positionService = positionService;
		this.candidateSkillService = candidateSkillService;
		this.candidateLanguageService = candidateLanguageService;
		this.candidateExperienceService = candidateExperienceService;
		this.positionSkillService = positionSkillService;
		this.positionLanguageService = positionLanguageService;
		this.positionExperienceService = positionExperienceService;
		this.candidatePositionScoreService = candidatePositionScoreService;
	}

	/**
	 * Method that computes the scoring for a list of candidates
	 * @param candidates
	 */
	@SuppressWarnings("unused")
	public void scoreMultipleCandidates(List<Candidate> candidates) {
		candidates.forEach(this::scoreCandidate);
	}
	
	/**
	 * Method that computes the scoring for a candidate for all the available jobs.
	 * ! imp scoring is computed based on skills atm
	 * ! languages & experience to be added later
	 * ! no one cares about the education and interests
	 * @param candidate
	 */
	@SuppressWarnings("unused")
	public void scoreCandidate(Candidate candidate) {
		List<CandidateSkill> candidateSkills = candidateSkillService.findAllByCandidateId(candidate.getId());
		List<CandidateLanguage> candidateLanguages = candidateLanguageService.findAllByCandidateId(candidate.getId());
		List<CandidateExperience> candidateExperiences = candidateExperienceService.findAllByCandidateId(candidate.getId());

		List<Position> allPositions = positionService.findAll();
		Map<Skill, Long> candidateSkillsMap = extractCandidateSkills(candidateSkills);
		Map<String, Long> candidateExperiencesMap = extractCandidateExperiences(candidateExperiences);
		Map<Language, String> candidateLanguagesMap = extractCandidateLanguages(candidateLanguages);
		
		Map<Long, Map<Skill, Long>> positionSkillsMap = extractPositionSkills(allPositions);
		Map<Long, Map<String, Long>> positionExperiencesMap = extractPositionExperiences(allPositions);
		Map<Long, Map<Language, String>> positionLanguagesMap = extractPositionLanguages(allPositions); 
		
		List<CandidatePositionScore> positionScores = new ArrayList<>();
		
		for(Position position: allPositions) {
			Double totalScore;
			Double[] scores = {0.0, 0.0, 0.0};
			
			// skills
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
					individualScore = (100.0 / numberOfRequiredSkills) * 1.0;	
				}
				scores[0] += individualScore;
			}
			
			//experience
			Map<String, Long> requiredExperienceYearsMap = positionExperiencesMap.get(position.getId());
			int numberOfRequiredExperiences = requiredExperienceYearsMap.keySet().size();
			
			for(String reqExpTitle: requiredExperienceYearsMap.keySet()) {
				Double individualScore = 0.0;
				
				if(candidateExperiencesMap.get(reqExpTitle) == null) {
					individualScore = 0.0;
				} else {
					if (requiredExperienceYearsMap.get(reqExpTitle) - candidateExperiencesMap.get(reqExpTitle) <= 0) {
						individualScore = (100.0 / numberOfRequiredExperiences) * 1.0;
					} else if (requiredExperienceYearsMap.get(reqExpTitle) - candidateExperiencesMap.get(reqExpTitle) == 0) {
						individualScore = (100.0 / numberOfRequiredExperiences) * 0.8;
					} else if (requiredExperienceYearsMap.get(reqExpTitle) - candidateExperiencesMap.get(reqExpTitle) > 0) {
						individualScore = (100.0 / numberOfRequiredExperiences) * 0.3;
					}
				}
				scores[1] += individualScore;
			}

			// languages
			Map<Language, String> requiredLanguagesLevelsMap = positionLanguagesMap.get(position.getId());
<<<<<<< HEAD
			int numberOfRequiredLangauges = requiredLanguagesLevelsMap.keySet().size();
			
			for (Language requiredLang: requiredLanguagesLevelsMap.keySet()) {
				Double individualScore = 0.0;
=======
			int numberOfRequiredLanguages = requiredLanguagesLevelsMap.keySet().size();
			
			for (Language requiredLang: requiredLanguagesLevelsMap.keySet()) {
				Double individualScore;
>>>>>>> 36ec2aa72ff19e308bcff3333d1f858c0181c0bd
				
				if (candidateLanguagesMap.get(requiredLang) == null) {
					individualScore = 0.0;
				} else {
<<<<<<< HEAD
					individualScore = (100.0 / numberOfRequiredLangauges) * Level.compareLevels(candidateLanguagesMap.get(requiredLang), requiredLanguagesLevelsMap.get(requiredLang));
=======
					individualScore = (100.0 / numberOfRequiredLanguages) * Level.compareLevels(candidateLanguagesMap.get(requiredLang), requiredLanguagesLevelsMap.get(requiredLang));
>>>>>>> 36ec2aa72ff19e308bcff3333d1f858c0181c0bd
				}
				scores[2] += individualScore;
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
		Map<Skill, Long> candidateSkillsMap = new HashMap<>();
		candidateSkills.forEach(cs -> candidateSkillsMap.put(cs.getSkill(), cs.getLevel()));
		
		return candidateSkillsMap;
	}
	
	/**
	 * Method that extracts the position's required skills into a Map<Position, Map<Skill, Level>> map
	 * @param allPositions
	 * @return
	 */
	private Map<Long, Map<Skill, Long>> extractPositionSkills(List<Position> allPositions) {
		Map<Long, Map<Skill, Long>> skillsMap = new HashMap<>();
		for(Position position: allPositions) {
			skillsMap.put(position.getId(), new HashMap<>());
			
			List<PositionSkill> positionSkills = positionSkillService.findAllByPositionId(position.getId());
			for (PositionSkill ps : positionSkills) {
				skillsMap.get(position.getId()).put(ps.getSkill(), ps.getLevel());
			}
		}
		
		return skillsMap;
	}
	
	/**
	 * 
	 * @param candidateLanguages
	 * @return
	 */
	private Map<Language, String> extractCandidateLanguages(List<CandidateLanguage> candidateLanguages) {
<<<<<<< HEAD
		Map<Language, String> candidateLanguagesMap = new HashMap<Language, String>();
		candidateLanguages.stream().forEach(cl -> candidateLanguagesMap.put(cl.getLanguage(), cl.getLanguageLevelAsString()));
=======
		Map<Language, String> candidateLanguagesMap = new HashMap<>();
		candidateLanguages.forEach(cl -> candidateLanguagesMap.put(cl.getLanguage(), cl.getLanguageLevelAsString()));
>>>>>>> 36ec2aa72ff19e308bcff3333d1f858c0181c0bd
		
		return candidateLanguagesMap;
	}
	
	/**
	 * 
	 * @param allPositions
	 * @return
	 */
	private Map<Long, Map<Language, String>> extractPositionLanguages(List<Position> allPositions) {
<<<<<<< HEAD
		Map<Long, Map<Language, String>> languagesMap = new HashMap<Long, Map<Language, String>>();
		for(Position position: allPositions) {
			languagesMap.put(position.getId(), new HashMap<Language, String>());
=======
		Map<Long, Map<Language, String>> languagesMap = new HashMap<>();
		for(Position position: allPositions) {
			languagesMap.put(position.getId(), new HashMap<>());
>>>>>>> 36ec2aa72ff19e308bcff3333d1f858c0181c0bd
			
			List<PositionLanguage> positionLanguages = positionLanguageService.findAllByPositionId(position.getId());
			for (PositionLanguage pl : positionLanguages) {
				languagesMap.get(position.getId()).put(pl.getLanguage(), pl.getLevel());
			}
		}
		
		return languagesMap;
	}
	
	/**
	 * 
	 * @param candidateExperiences
	 * @return
	 */
	private Map<String, Long> extractCandidateExperiences(List<CandidateExperience> candidateExperiences) {
<<<<<<< HEAD
		Map<String, Long> experiencesMap = new HashMap<String, Long>();
		
		for(CandidateExperience ce: candidateExperiences) {
			Long diffInMonths = monthsDifference(ce.getPeriodFrom(), ce.getPeriodTo() == null ? new Date() : ce.getPeriodTo());
			if(experiencesMap.get(ce.getTitle()) == null) {
				experiencesMap.put(ce.getTitle(), diffInMonths);
			} else {
				experiencesMap.put(ce.getTitle(), experiencesMap.get(ce.getTitle()) + diffInMonths);
			}
=======
		Map<String, Long> experiencesMap = new HashMap<>();
		
		for(CandidateExperience ce: candidateExperiences) {
			Long diffInMonths = monthsDifference(ce.getPeriodFrom(), ce.getPeriodTo() == null ? new Date() : ce.getPeriodTo());

			experiencesMap.merge(ce.getTitle(), diffInMonths, (a, b) -> a + b);
>>>>>>> 36ec2aa72ff19e308bcff3333d1f858c0181c0bd
		}
		
		return experiencesMap;
	}
	
	/**
	 * 
	 * @param allPositions
	 * @return
	 */
	private Map<Long, Map<String, Long>> extractPositionExperiences(List<Position> allPositions) {
<<<<<<< HEAD
		Map<Long, Map<String, Long>> experiencesMap = new HashMap<Long, Map<String, Long>>();
		for(Position position: allPositions) {
			experiencesMap.put(position.getId(), new HashMap<String, Long>());
=======
		Map<Long, Map<String, Long>> experiencesMap = new HashMap<>();
		for(Position position: allPositions) {
			experiencesMap.put(position.getId(), new HashMap<>());
>>>>>>> 36ec2aa72ff19e308bcff3333d1f858c0181c0bd
			
			List<PositionExperience> positionExperiences = positionExperienceService.findAllByPositionId(position.getId());
			for (PositionExperience pe : positionExperiences) {
				experiencesMap.get(position.getId()).put(pe.getTitle(), pe.getYears());
			}
		}
		
		return experiencesMap;
	}
}
