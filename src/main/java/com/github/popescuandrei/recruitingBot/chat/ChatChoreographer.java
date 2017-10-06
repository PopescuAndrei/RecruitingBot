package com.github.popescuandrei.recruitingBot.chat;

import static com.github.popescuandrei.recruitingBot.chat.util.AiConstants.ACTION_ACCEPTANCE;
import static com.github.popescuandrei.recruitingBot.chat.util.AiConstants.ACTION_GREETING;
import static com.github.popescuandrei.recruitingBot.chat.util.AiConstants.ACTION_SAVE_EDUCATION;
import static com.github.popescuandrei.recruitingBot.chat.util.AiConstants.ACTION_SAVE_EMAIL;
import static com.github.popescuandrei.recruitingBot.chat.util.AiConstants.ACTION_SAVE_EXPERIENCE;
import static com.github.popescuandrei.recruitingBot.chat.util.AiConstants.ACTION_SAVE_GENDER;
import static com.github.popescuandrei.recruitingBot.chat.util.AiConstants.ACTION_SAVE_INTEREST;
import static com.github.popescuandrei.recruitingBot.chat.util.AiConstants.ACTION_SAVE_LANGUAGE;
import static com.github.popescuandrei.recruitingBot.chat.util.AiConstants.ACTION_SAVE_SKILL;
import static com.github.popescuandrei.recruitingBot.chat.util.AiConstants.ACTION_SEARCH_POSITION;
import static com.github.popescuandrei.recruitingBot.domain.support.Const.AT_EMAIL;
import static com.github.popescuandrei.recruitingBot.domain.support.Const.MALE;
import static com.github.popescuandrei.recruitingBot.domain.support.Const.UNAVAILABLE;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Random;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import com.github.popescuandrei.recruitingBot.chat.util.AiConstants;
import com.github.popescuandrei.recruitingBot.domain.Candidate;
import com.github.popescuandrei.recruitingBot.domain.CandidateSkill;
import com.github.popescuandrei.recruitingBot.domain.InterviewProgress;
import com.github.popescuandrei.recruitingBot.domain.QuestionReply;
import com.github.popescuandrei.recruitingBot.domain.Skill;
import com.github.popescuandrei.recruitingBot.domain.support.Const;
import com.github.popescuandrei.recruitingBot.domain.support.Email;
import com.github.popescuandrei.recruitingBot.service.CandidateService;
import com.github.popescuandrei.recruitingBot.service.InterviewProgressService;
import com.github.popescuandrei.recruitingBot.service.PositionService;
import com.github.popescuandrei.recruitingBot.service.QuestionReplyService;
import com.github.popescuandrei.recruitingBot.service.QuestionService;
import com.github.popescuandrei.recruitingBot.service.SkillService;
import com.google.gson.JsonElement;

import ai.api.model.AIResponse;

@Component
@Qualifier("chatChoreographer")
public class ChatChoreographer {
	
	private static final Logger log = LoggerFactory.getLogger(ChatChoreographer.class);
	
	@Autowired
	private PositionService positionService;
	
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
		case ACTION_GREETING:
			log.debug("## Resolved to greeting");
			response = handleGreetingAction(aiResponse, candidateId);
			break;
		case ACTION_ACCEPTANCE:
			log.debug("## Resolved to acceptance");
			response = handleYesNoAction(aiResponse, candidate);
			break;
		case ACTION_SAVE_GENDER:
			log.debug("## Resolved to save.gender");
			response = handleGenderAction(aiResponse, candidate);
			break;
		case ACTION_SAVE_EMAIL:
			log.debug("## Resolved to save.email");
			response = handleEmailAction(aiResponse, candidate);
			break;
		case ACTION_SAVE_EDUCATION:
			log.debug("## Resolved to save.education");
			response = handleEducationAction(aiResponse, candidate);
			break;
		case ACTION_SAVE_EXPERIENCE:
			log.debug("## Resolved to save.experience");
			response = handleExperienceAction(aiResponse, candidate);
			break;
		case ACTION_SAVE_INTEREST:
			log.debug("## Resolved to save.interest");
			response = handleInterestAction(aiResponse, candidate);
			break;
		case ACTION_SAVE_LANGUAGE:
			log.debug("## Resolved to save.language");
			response = handleLanguageAction(aiResponse, candidate);
			break;
		case ACTION_SAVE_SKILL:
			log.debug("## Resolved to save.skill");
			response = handleSkillAction(aiResponse, candidate);
			break;
		case ACTION_SEARCH_POSITION:
			log.debug("## Resolved to search.position");
			response = handleSearchPositionAction(aiResponse, candidate);
			break;
		}
		log.debug("## Action is :" + aiResponse.getResult().getAction());
		
		return response;
	}
	
	private String handleGreetingAction(AIResponse aiResponse, String facebookUuid) {
		Candidate candidate = new Candidate();
		candidate.setFirstName(UNAVAILABLE);
		candidate.setLastName(UNAVAILABLE);
		candidate.setEmail(new Email(UNAVAILABLE + AT_EMAIL));
		candidate.setGender(MALE);
		candidate.setAge(20);
		candidate.setFacebookUuid(facebookUuid);
		candidate = candidateService.create(candidate);
		
		return getReply(candidate);
	}

	private String handleYesNoAction(AIResponse aiResponse, Candidate candidate) {
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
		parameters.forEach((k,v) -> log.debug("PARAM:  " + k + ",VALUE:  " + v.toString()));
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
		String skillName = parameters.get(AiConstants.ENTITY_SKILL).getAsString();
		Long level = resolveLevelToNumber(parameters.get(AiConstants.ENTITY_LEVEL).getAsString());
		
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
		return ACTION_SEARCH_POSITION;
	}
	
	private String getReply(Candidate candidate) {
		InterviewProgress interviewProgress = interviewProgressService.findByCandidateId(candidate.getId());
		List<QuestionReply> questionReplies = questionReplyService.findAllByQuestionId(interviewProgress.getProgress());
		
		return questionReplies.get(new Random().nextInt(questionReplies.size())).getReplyMessage();
	}
}
