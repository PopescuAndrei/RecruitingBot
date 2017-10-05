package com.github.popescuandrei.recruitingBot.util;

import static com.github.popescuandrei.recruitingBot.ai.util.Actions.GREETING;
import static com.github.popescuandrei.recruitingBot.ai.util.Actions.NO_STATEMENT;
import static com.github.popescuandrei.recruitingBot.ai.util.Actions.SAVE_EDUCATION;
import static com.github.popescuandrei.recruitingBot.ai.util.Actions.SAVE_EMAIL;
import static com.github.popescuandrei.recruitingBot.ai.util.Actions.SAVE_EXPERIENCE;
import static com.github.popescuandrei.recruitingBot.ai.util.Actions.SAVE_GENDER;
import static com.github.popescuandrei.recruitingBot.ai.util.Actions.SAVE_INTEREST;
import static com.github.popescuandrei.recruitingBot.ai.util.Actions.SAVE_LANGUAGE;
import static com.github.popescuandrei.recruitingBot.ai.util.Actions.SAVE_SKILL;
import static com.github.popescuandrei.recruitingBot.ai.util.Actions.SEARCH_POSITION;
import static com.github.popescuandrei.recruitingBot.ai.util.Actions.YES_STATEMENT;
import static com.github.popescuandrei.recruitingBot.ai.util.Entities.LEVEL;
import static com.github.popescuandrei.recruitingBot.ai.util.Entities.SKILL;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Random;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import com.github.popescuandrei.recruitingBot.domain.Candidate;
import com.github.popescuandrei.recruitingBot.domain.CandidateSkill;
import com.github.popescuandrei.recruitingBot.domain.InterviewProgress;
import com.github.popescuandrei.recruitingBot.domain.QuestionReply;
import com.github.popescuandrei.recruitingBot.domain.Skill;
import com.github.popescuandrei.recruitingBot.domain.support.Const;
import com.github.popescuandrei.recruitingBot.service.CandidateService;
import com.github.popescuandrei.recruitingBot.service.InterviewProgressService;
import com.github.popescuandrei.recruitingBot.service.QuestionReplyService;
import com.github.popescuandrei.recruitingBot.service.QuestionService;
import com.github.popescuandrei.recruitingBot.service.SkillService;
import com.google.gson.JsonElement;

import ai.api.model.AIResponse;

@Component
@Qualifier("aiDecisionService")
public class AiDecisionService {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(AiDecisionService.class);
	
	@Autowired
	private CandidateService candidateService;
	
	@Autowired
	private QuestionService questionService;
	
	@Autowired
	private QuestionReplyService questionReplyService;
	
	@Autowired
	private SkillService skillService;
	
	@Autowired
	private InterviewProgressService interviewProgressService;
	
	/**
	 * Method that resolves the appropriate reply for 
	 * @param aiResponse
	 * @param candidateId
	 * @param timestamp
	 * @return
	 */
	public String parseAiResponse(AIResponse aiResponse, String candidateId, Date timestamp) {
		String response = Const.getRandomFallbackAnswer();
		Candidate candidate = candidateService.findByFacebookUuid(candidateId);
		
		switch (aiResponse.getResult().getAction()) {
		case GREETING:
			response = handleGreetingAction(aiResponse, candidate);
			break;
		case YES_STATEMENT:
			response = handleYesAction(aiResponse, candidate);
			break;
		case NO_STATEMENT:
			response = handleNoAction(aiResponse, candidate);
			break;
		case SAVE_GENDER:
			response = handleGenderAction(aiResponse, candidate);
			break;
		case SAVE_EMAIL:
			response = handleEmailAction(aiResponse, candidate);
			break;
		case SAVE_EDUCATION:
			response = handleEducationAction(aiResponse, candidate);
			break;
		case SAVE_EXPERIENCE:
			response = handleExperienceAction(aiResponse, candidate);
			break;
		case SAVE_INTEREST:
			response = handleInterestAction(aiResponse, candidate);
			break;
		case SAVE_LANGUAGE:
			response = handleLanguageAction(aiResponse, candidate);
			break;
		case SAVE_SKILL:
			response = handleSkillAction(aiResponse, candidate);
			break;
		case SEARCH_POSITION:
			response = handleSearchPositionAction(aiResponse, candidate);
			break;
		}
		LOGGER.debug("Statement resolved to : " + aiResponse.getResult().getAction());
		
		return response;
	}
	
	private String handleGreetingAction(AIResponse aiResponse, Candidate candidate) {
		return Const.getRandomFallbackAnswer();
	}

	private String handleYesAction(AIResponse aiResponse, Candidate candidate) {
		return Const.getRandomFallbackAnswer();
	}
	
	private String handleNoAction(AIResponse aiResponse, Candidate candidate) {
		return Const.getRandomFallbackAnswer();
	}

	private String handleGenderAction(AIResponse aiResponse, Candidate candidate) {
		return Const.getRandomFallbackAnswer();
	}
	
	private String handleEmailAction(AIResponse aiResponse, Candidate candidate) {
		return Const.getRandomFallbackAnswer();
	}
	
	private String handleEducationAction(AIResponse aiResponse, Candidate candidate) {
		HashMap<String, JsonElement> parameters = aiResponse.getResult().getParameters();
		parameters.forEach((k,v) -> LOGGER.debug("PARAM:  " + k + ",VALUE:  " + v.toString()));
		return Const.getRandomFallbackAnswer();
	}
	
	private String handleExperienceAction(AIResponse aiResponse, Candidate candidate) {
		return Const.getRandomFallbackAnswer();
	}

	private String handleInterestAction(AIResponse aiResponse, Candidate candidate) {
		return Const.getRandomFallbackAnswer();
	}

	private String handleLanguageAction(AIResponse aiResponse, Candidate candidate) {
		return Const.getRandomFallbackAnswer();
	}
	
	private String handleSkillAction(AIResponse aiResponse, Candidate candidate) {
		HashMap<String, JsonElement> parameters = aiResponse.getResult().getParameters();
		String skillName = parameters.get(SKILL).getAsString();
		Long level = resolveLevelToNumber(parameters.get(LEVEL).getAsString());
		
		Skill existing = skillService.findByName(skillName);
		if(existing == null) {
			existing = new Skill();
			existing.setName(skillName);
			existing = skillService.create(existing);
		}
		
		CandidateSkill candidateSkill = new CandidateSkill();
		candidateSkill.setCandidate(candidate);
		candidateSkill.setSkill(existing);
		candidateSkill.setLevel(level);
		
		return getReply(candidate);
	}

	private Long resolveLevelToNumber(String level) {
		if (level.equals("internship")) {
			return 20L;
		} else if (level.equals("junior")) {
			return 35L;
		} else if (level.equals("middle")) {
			return 60L;
		} else if (level.equals("senior")) {
			return 90L;
		} else if (level.equals("inexperienced")) {
			return 5L;
		} else {
			return 0L;
		}
	}
	
	private String handleSearchPositionAction(AIResponse aiResponse, Candidate candidate) {
		return Const.getRandomFallbackAnswer();
	}
	
	private String getReply(Candidate candidate) {
		InterviewProgress interviewProgress = interviewProgressService.findByCandidateId(candidate.getId());
		List<QuestionReply> questionReplies = questionReplyService.findAllByQuestionId(interviewProgress.getProgress());
		
		return questionReplies.get(new Random().nextInt(questionReplies.size())).getReplyMessage();
	}
}
