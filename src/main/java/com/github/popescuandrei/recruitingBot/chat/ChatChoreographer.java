package com.github.popescuandrei.recruitingBot.chat;

import static com.github.popescuandrei.recruitingBot.chat.support.AiConstants.ACTION_ACCEPTANCE;
import static com.github.popescuandrei.recruitingBot.chat.support.AiConstants.ACTION_GREETING;
import static com.github.popescuandrei.recruitingBot.chat.support.AiConstants.ACTION_SAVE_EDUCATION;
import static com.github.popescuandrei.recruitingBot.chat.support.AiConstants.ACTION_SAVE_EMAIL;
import static com.github.popescuandrei.recruitingBot.chat.support.AiConstants.ACTION_SAVE_EXPERIENCE;
import static com.github.popescuandrei.recruitingBot.chat.support.AiConstants.ACTION_SAVE_GENDER;
import static com.github.popescuandrei.recruitingBot.chat.support.AiConstants.ACTION_SAVE_INTEREST;
import static com.github.popescuandrei.recruitingBot.chat.support.AiConstants.ACTION_SAVE_LANGUAGE;
import static com.github.popescuandrei.recruitingBot.chat.support.AiConstants.ACTION_SAVE_SKILL;
import static com.github.popescuandrei.recruitingBot.chat.support.AiConstants.ACTION_SEARCH_POSITION;
import static com.github.popescuandrei.recruitingBot.chat.support.AiConstants.ENTITY_ACCEPTANCE;
import static com.github.popescuandrei.recruitingBot.chat.support.AiConstants.ENTITY_ACCEPTANCE_YES;
import static com.github.popescuandrei.recruitingBot.chat.support.AiConstants.ENTITY_EDUCATION_INSTITUTION;
import static com.github.popescuandrei.recruitingBot.chat.support.AiConstants.ENTITY_EDUCATION_MAJOR;
import static com.github.popescuandrei.recruitingBot.chat.support.AiConstants.ENTITY_EXPERIENCE_COMPANY;
import static com.github.popescuandrei.recruitingBot.chat.support.AiConstants.ENTITY_EXPERIENCE_POSITION;
import static com.github.popescuandrei.recruitingBot.chat.support.AiConstants.ENTITY_INTEREST;
import static com.github.popescuandrei.recruitingBot.chat.support.AiConstants.ENTITY_LANGUAGE;
import static com.github.popescuandrei.recruitingBot.chat.support.AiConstants.ENTITY_SYS_DATE_PERIOD;
import static com.github.popescuandrei.recruitingBot.chat.support.AiConstants.ENTITY_SYS_EMAIL;
import static com.github.popescuandrei.recruitingBot.chat.support.AiConstants.ENTITY_SYS_GENDER;
import static com.github.popescuandrei.recruitingBot.chat.support.AiConstants.ENTITY_SYS_NUMBER;
import static com.github.popescuandrei.recruitingBot.domain.support.Const.AT_EMAIL;
import static com.github.popescuandrei.recruitingBot.domain.support.Const.MALE;
import static com.github.popescuandrei.recruitingBot.domain.support.Const.UNAVAILABLE;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Random;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import com.github.popescuandrei.recruitingBot.chat.support.AiConstants;
import com.github.popescuandrei.recruitingBot.domain.Candidate;
import com.github.popescuandrei.recruitingBot.domain.CandidateEducation;
import com.github.popescuandrei.recruitingBot.domain.CandidateExperience;
import com.github.popescuandrei.recruitingBot.domain.CandidateInterest;
import com.github.popescuandrei.recruitingBot.domain.CandidateLanguage;
import com.github.popescuandrei.recruitingBot.domain.CandidateSkill;
import com.github.popescuandrei.recruitingBot.domain.InterviewProgress;
import com.github.popescuandrei.recruitingBot.domain.Language;
import com.github.popescuandrei.recruitingBot.domain.QuestionReply;
import com.github.popescuandrei.recruitingBot.domain.Skill;
import com.github.popescuandrei.recruitingBot.domain.support.Const;
import com.github.popescuandrei.recruitingBot.domain.support.Email;
import com.github.popescuandrei.recruitingBot.service.CandidateEducationService;
import com.github.popescuandrei.recruitingBot.service.CandidateExperienceService;
import com.github.popescuandrei.recruitingBot.service.CandidateInterestService;
import com.github.popescuandrei.recruitingBot.service.CandidateLanguageService;
import com.github.popescuandrei.recruitingBot.service.CandidateService;
import com.github.popescuandrei.recruitingBot.service.InterviewProgressService;
import com.github.popescuandrei.recruitingBot.service.LanguageService;
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
	private CandidateService candidateService;
	
	@Autowired
	private QuestionService questionService;
	
	@Autowired
	private QuestionReplyService questionReplyService;
	
	@Autowired
	private SkillService skillService;
	
	@Autowired
	private InterviewProgressService interviewProgressService;
	
	@Autowired
	private LanguageService languageService;
	
	@Autowired
	private CandidateLanguageService candidateLanguageService;
	
	@Autowired
	private CandidateInterestService interestService;
	
	@Autowired
	private CandidateEducationService educationService;
	
	@Autowired
	private CandidateExperienceService experienceService;
	
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
	
	/**
	 * Method that handles the {@link #ACTION_GREETING} action
	 * @param aiResponse
	 * @param facebookUuid
	 * @return
	 */
	private String handleGreetingAction(AIResponse aiResponse, String facebookUuid) {
		Candidate candidate = new Candidate();
		candidate.setFirstName(UNAVAILABLE);
		candidate.setLastName(UNAVAILABLE);
		candidate.setEmail(new Email(UNAVAILABLE + AT_EMAIL));
		candidate.setGender(MALE);
		candidate.setAge(20);
		candidate.setFacebookUuid(facebookUuid);
		candidate = candidateService.create(candidate);
		
		InterviewProgress progress = new InterviewProgress();
		progress.setCandidate(candidate);
		progress.setProgress(0L);
		progress = interviewProgressService.create(progress);
		
		return getNextQuestion(candidate);
	}

	/**
	 * Method that handles the {@link #ACTION_ACCEPTANCE} action
	 * @param aiResponse
	 * @param candidate
	 * @return
	 */
	private String handleYesNoAction(AIResponse aiResponse, Candidate candidate) {
		return getNextQuestion(candidate);
	}
	
	/**
	 * Method that handles the {@link #ACTION_SAVE_GENDER} action
	 * @param aiResponse
	 * @param candidate
	 * @return
	 */
	private String handleGenderAction(AIResponse aiResponse, Candidate candidate) {
		candidate.setGender(aiResponse.getResult().getParameters().get(ENTITY_SYS_GENDER).getAsString());
		candidate = candidateService.update(candidate);
		
		return getNextQuestion(candidate);
	}
	
	/**
	 * Method that handles the {@link #ACTION_SAVE_EMAIL} action
	 * @param aiResponse
	 * @param candidate
	 * @return
	 */
	private String handleEmailAction(AIResponse aiResponse, Candidate candidate) {
		candidate.setEmail(new Email(aiResponse.getResult().getParameters().get(ENTITY_SYS_EMAIL).getAsString()));
		candidate = candidateService.update(candidate);
		
		return getNextQuestion(candidate);
	}
	
	/**
	 * Method that handles the {@link #ACTION_SAVE_EDUCATION} action
	 * @param aiResponse
	 * @param candidate
	 * @return
	 */
	private String handleEducationAction(AIResponse aiResponse, Candidate candidate) {
		HashMap<String, JsonElement> parameters = aiResponse.getResult().getParameters();
		String institution = parameters.get(ENTITY_EDUCATION_INSTITUTION).getAsString();
		String major = parameters.get(ENTITY_EDUCATION_MAJOR).getAsString();
		double grade = parameters.get(ENTITY_SYS_NUMBER).getAsDouble();
		String[] period = parameters.get(ENTITY_SYS_DATE_PERIOD).getAsString().split("/");
		LocalDate startDate = LocalDate.now();
		LocalDate endDate = LocalDate.now();
		
		try {
			startDate = LocalDate.parse(period[0]);
			endDate = LocalDate.parse(period[1]);
		} catch (IndexOutOfBoundsException ex) {
			// silently ignore the expection
		}
		
		CandidateEducation education = new CandidateEducation();
		education.setCandidate(candidate);
		education.setInstitution(institution);
		education.setMajor(major);
		education.setGrade(grade);
		education.setPeriodFrom(Date.from(startDate.atStartOfDay(ZoneId.systemDefault()).toInstant()));
		education.setPeriodTo(Date.from(endDate.atStartOfDay(ZoneId.systemDefault()).toInstant()));
		
		education = educationService.create(education);
		
		return getReply(candidate);
	}

	/**
	 * Method that handles the {@link #ACTION_SAVE_EXPERIENCE} action
	 * @param aiResponse
	 * @param candidate
	 * @return
	 */
	private String handleExperienceAction(AIResponse aiResponse, Candidate candidate) {
		HashMap<String, JsonElement> parameters = aiResponse.getResult().getParameters();
		String title = parameters.get(ENTITY_EXPERIENCE_POSITION).getAsString();
		String company = parameters.get(ENTITY_EXPERIENCE_COMPANY).getAsString();
		String[] period = parameters.get(AiConstants.ENTITY_SYS_DATE_PERIOD).getAsString().split("/");
		LocalDate startDate = LocalDate.now();
		LocalDate endDate = LocalDate.now();
		
		try {
			startDate = LocalDate.parse(period[0]);
			endDate = LocalDate.parse(period[1]);
		} catch (IndexOutOfBoundsException ex) {
			// silently ignore the expection
		}
		
		CandidateExperience experience = new CandidateExperience();
		experience.setCandidate(candidate);
		experience.setCompany(company);
		experience.setTitle(title);
		experience.setPeriodFrom(Date.from(startDate.atStartOfDay(ZoneId.systemDefault()).toInstant()));
		experience.setPeriodTo(Date.from(endDate.atStartOfDay(ZoneId.systemDefault()).toInstant()));
		
		experience = experienceService.create(experience);
		
		return getReply(candidate);
	}
	
	/**
	 * Method that handles the {@link #ACTION_SAVE_INTEREST} action
	 * @param aiResponse
	 * @param candidate
	 * @return
	 */
	private String handleInterestAction(AIResponse aiResponse, Candidate candidate) {
		HashMap<String, JsonElement> parameters = aiResponse.getResult().getParameters();
		String interestName = parameters.get(ENTITY_INTEREST).getAsString();
		if (interestName!= null) {
			CandidateInterest interest = new CandidateInterest();
			interest.setCandidate(candidate);
			interest.setName(interestName);
			interest = interestService.create(interest);
		}
		
		return getReply(candidate);
	}
	
	/**
	 * Method that handles the {@link #ACTION_SAVE_LANGUAGE} action
	 * @param aiResponse
	 * @param candidate
	 * @return
	 */
	private String handleLanguageAction(AIResponse aiResponse, Candidate candidate) {
		String languageName = aiResponse.getResult().getParameters().get(ENTITY_LANGUAGE).getAsString();
		Language existing = languageService.findByName(languageName);
		if (existing == null) {
			existing = new Language();
			existing.setName(languageName);
			existing = languageService.create(existing);
		}
		
		CandidateLanguage candidateLanguage = new CandidateLanguage();
		candidateLanguage.setCandidate(candidate);
		candidateLanguage.setLanguage(existing);
		candidateLanguage.setSpeaking(resolveLevelToNumber("senior"));
		candidateLanguage.setWriting(resolveLevelToNumber("senior"));
		candidateLanguage.setUnderstanding(resolveLevelToNumber("senior"));
		
		candidateLanguage = candidateLanguageService.create(candidateLanguage);
		
		return getReply(candidate);
	}
	
	/**
	 * Method that handles the {@link #ACTION_SAVE_SKILL} action
	 * @param aiResponse
	 * @param candidate
	 * @return
	 */
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
	
	/**
	 * Method that handles the {@link #ACTION_SEARCH_POSITION} action
	 * @param aiResponse
	 * @param candidate
	 * @return
	 */
	private String handleSearchPositionAction(AIResponse aiResponse, Candidate candidate) {
		return ACTION_SEARCH_POSITION;
	}
	
	/**
	 * Method that return the text of a reply based on the candidate's current progress
	 * @param candidate
	 * @return
	 */
	private String getReply(Candidate candidate) {
		InterviewProgress interviewProgress = interviewProgressService.findByCandidateId(candidate.getId());

		if(interviewProgress.getProgress() == 0L) {
			return getNextQuestion(candidate);
		}
		
		List<QuestionReply> questionReplies = questionReplyService.findAllByQuestionId(interviewProgress.getProgress());	
		
		return questionReplies.get(new Random().nextInt(questionReplies.size())).getReplyMessage();
	}
	
	/**
	 * Method that returns the text of a question based on the candidate's current progress
	 * @param candidate
	 * @return
	 */
	private String getNextQuestion(Candidate candidate) {
		InterviewProgress interviewProgress = interviewProgressService.findByCandidateId(candidate.getId());
		interviewProgress.setProgress(interviewProgress.getProgress() + 1);
		interviewProgress = interviewProgressService.update(interviewProgress);
		
		return questionService.findByPosition(interviewProgress.getProgress() + 1).getQuery();
	}

	/**
	 * Method that resolves the level for a skill/language to a number
	 * @param level
	 * @return
	 */
	private Long resolveLevelToNumber(String level) {
		Random randomGenerator = new Random();
		int score = 0;
		
		switch (level) {
		case "inexperienced":
			score = randomGenerator.nextInt(5);
			break;
		case "internship":
			score = 5 + randomGenerator.nextInt(15);
			break;
		case "junior":
			score = 20 + randomGenerator.nextInt(20);
			break;
		case "middle":
			score = 40 + randomGenerator.nextInt(25);
			break;
		case "senior":
			score = 65 + randomGenerator.nextInt(35);
			break;
		}
		
		return (long) score;
	}
}
