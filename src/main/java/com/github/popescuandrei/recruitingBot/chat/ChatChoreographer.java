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
import static com.github.popescuandrei.recruitingBot.chat.support.FrontParams.LEVEL_ENTRY;
import static com.github.popescuandrei.recruitingBot.chat.support.FrontParams.LEVEL_INEXPERIENCED;
import static com.github.popescuandrei.recruitingBot.chat.support.FrontParams.LEVEL_JUNIOR;
import static com.github.popescuandrei.recruitingBot.chat.support.FrontParams.LEVEL_MIDDLE;
import static com.github.popescuandrei.recruitingBot.chat.support.FrontParams.LEVEL_SENIOR;
import static com.github.popescuandrei.recruitingBot.chat.support.FrontParams.PARAM_CANDIDATE_NAME;
import static com.github.popescuandrei.recruitingBot.chat.support.FrontParams.PARAM_INSTITUTION_NAME;
import static com.github.popescuandrei.recruitingBot.domain.support.Const.AT_EMAIL;
import static com.github.popescuandrei.recruitingBot.domain.support.Const.MALE;
import static com.github.popescuandrei.recruitingBot.domain.support.Const.UNAVAILABLE;

import java.io.IOException;
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
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.github.popescuandrei.recruitingBot.chat.support.AiConstants;
import com.github.popescuandrei.recruitingBot.chat.support.FacebookProfileJson;
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
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.ObjectMapper;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;

import ai.api.model.AIResponse;

@Component
@Qualifier("chatChoreographer")
@PropertySource("classpath:application.properties")
public class ChatChoreographer {
	
	private static final Logger log = LoggerFactory.getLogger(ChatChoreographer.class);
	
	private static final String BASE_FACEBOOK_URL_START = "https://graph.facebook.com/v2.6/";
	private static final String BASE_FACEBOOK_URL_END = "?access_token=";
	
	private final CandidateService candidateService;
	
	private final QuestionService questionService;
	
	private final QuestionReplyService questionReplyService;
	
	private final SkillService skillService;
	
	private final InterviewProgressService interviewProgressService;
	
	private final LanguageService languageService;
	
	private final CandidateLanguageService candidateLanguageService;
	
	private final CandidateInterestService interestService;
	
	private final CandidateEducationService educationService;
	
	private final CandidateExperienceService experienceService;
	
	@Value("${recruitingBot.pageAccessToken}")
	private String pageAccessToken;

	@Autowired
	public ChatChoreographer(CandidateService candidateService, QuestionService questionService, QuestionReplyService questionReplyService,
							 SkillService skillService, InterviewProgressService interviewProgressService, LanguageService languageService,
							 CandidateLanguageService candidateLanguageService, CandidateInterestService interestService,
							 CandidateEducationService educationService, CandidateExperienceService experienceService) {
		this.candidateService = candidateService;
		this.questionService = questionService;
		this.questionReplyService = questionReplyService;
		this.skillService = skillService;
		this.interviewProgressService = interviewProgressService;
		this.languageService = languageService;
		this.candidateLanguageService = candidateLanguageService;
		this.interestService = interestService;
		this.educationService = educationService;
		this.experienceService = experienceService;
	}

	/**
	 * Method that resolves the appropriate reply for 
	 * @param aiResponse
	 * @param candidateId
	 * @return
	 */
	public String parseAiResponse(AIResponse aiResponse, String candidateId) {
		String response = Const.getRandomFallbackAnswer();
		Candidate candidate = candidateService.findByFacebookUuid(candidateId);
		
		switch (aiResponse.getResult().getAction()) {
		case ACTION_GREETING:
			log.debug("## Resolved to greeting");
			response = handleGreetingAction(candidateId);
			break;
		case ACTION_ACCEPTANCE:
			log.debug("## Resolved to acceptance");
			response = handleYesNoAction(candidate);
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
			response = handleSearchPositionAction();
			break;
		}
		log.debug("## Action is :" + aiResponse.getResult().getAction());

		return response;
	}
	
	/**
	 * Method that handles the ACTION_GREETING action
	 * @param facebookUuid
	 * @return
	 */
	private String handleGreetingAction(String facebookUuid) {
		Candidate candidate = new Candidate();
		
		HttpResponse<FacebookProfileJson> jsonResponse = null;
		try {
			Unirest.setObjectMapper(new ObjectMapper() {
			    private com.fasterxml.jackson.databind.ObjectMapper jacksonObjectMapper
			                = new com.fasterxml.jackson.databind.ObjectMapper();
			    
				@Override
			    public String writeValue(Object value) {
			        try {
			            return jacksonObjectMapper.writeValueAsString(value);
			        } catch (JsonProcessingException e) {
			            throw new RuntimeException(e);
			        }
			    }
				
				@Override
				public <T> T readValue(String value, Class<T> valueType) {
					try {
						return jacksonObjectMapper.readValue(value, valueType);
					} catch (IOException e) {
			            throw new RuntimeException(e);
					}
				}
			});
			
			jsonResponse = Unirest.get(BASE_FACEBOOK_URL_START + facebookUuid + BASE_FACEBOOK_URL_END + pageAccessToken).asObject(FacebookProfileJson.class);
		} catch (UnirestException e) {
			log.info("Request info at: ", BASE_FACEBOOK_URL_START + facebookUuid + BASE_FACEBOOK_URL_END + pageAccessToken);
			log.info("Facebook Graph API - Failure in retrieving profile info. Message: ", e.getMessage());
			log.info(" Caused By: ", e.getCause());
		}
		
		if (jsonResponse != null) {
			FacebookProfileJson facebookProfile = jsonResponse.getBody();
			candidate.setFirstName(facebookProfile.getFirst_name());
			candidate.setLastName(facebookProfile.getLast_name());
			candidate.setGender(facebookProfile.getGender());
			candidate.setAvatar(facebookProfile.getProfile_pic());
			candidate.setColor(Const.getRandomColor());
			
		} else {
			candidate.setFirstName(UNAVAILABLE);
			candidate.setLastName(UNAVAILABLE);
			candidate.setGender(MALE);
			candidate.setAvatar(Const.getRandomAvatar(MALE));
			candidate.setColor(Const.getRandomColor());
		}
		candidate.setEmail(new Email(candidate.getFirstName() + "_" + candidate.getLastName() + candidate.getFacebookUuid() + AT_EMAIL));
		candidate.setAge(20);
		candidate.setFacebookUuid(facebookUuid);
		candidate = candidateService.create(candidate);
		
		InterviewProgress progress = new InterviewProgress();
		progress.setCandidate(candidate);
		progress.setProgress(0L);
		interviewProgressService.create(progress);
		
		return getNextQuestion(candidate);
	}

	/**
	 * Method that handles the ACTION_ACCEPTANCE action
	 * @param candidate
	 * @return
	 */
	private String handleYesNoAction(Candidate candidate) {
		
		return getNextQuestion(candidate);
	}
	
	/**
	 * Method that handles the ACTION_SAVE_GENDER action
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
	 * Method that handles the ACTION_SAVE_EMAIL action
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
	 * Method that handles the ACTION_SAVE_EDUCATION action
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
			// silently ignore the exception
		}
		
		CandidateEducation education = new CandidateEducation();
		education.setCandidate(candidate);
		education.setInstitution(institution);
		education.setMajor(major);
		education.setGrade(grade);
		education.setPeriodFrom(Date.from(startDate.atStartOfDay(ZoneId.systemDefault()).toInstant()));
		education.setPeriodTo(Date.from(endDate.atStartOfDay(ZoneId.systemDefault()).toInstant()));
		
		educationService.create(education);
		
		return getReply(candidate);
	}

	/**
	 * Method that handles the ACTION_SAVE_EXPERIENCE action
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
			// silently ignore the exception
		}
		
		CandidateExperience experience = new CandidateExperience();
		experience.setCandidate(candidate);
		experience.setCompany(company);
		experience.setTitle(title);
		experience.setPeriodFrom(Date.from(startDate.atStartOfDay(ZoneId.systemDefault()).toInstant()));
		experience.setPeriodTo(Date.from(endDate.atStartOfDay(ZoneId.systemDefault()).toInstant()));
		
		experienceService.create(experience);
		
		return getReply(candidate);
	}
	
	/**
	 * Method that handles the ACTION_SAVE_INTEREST action
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
			interestService.create(interest);
		}
		
		return getReply(candidate);
	}
	
	/**
	 * Method that handles the ACTION_SAVE_LANGUAGE action
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
		
		candidateLanguageService.create(candidateLanguage);
		
		return getReply(candidate);
	}
	
	/**
	 * Method that handles the ACTION_SAVE_SKILL action
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
	 * Method that handles the ACTION_SEARCH_POSITION action
	 * @return
	 */
	private String handleSearchPositionAction() {
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
		String nextReply = questionReplies.get(new Random().nextInt(questionReplies.size())).getReplyMessage();
		
		// TODO (replace ALL params with actual strings)
		if(nextReply.contains(PARAM_INSTITUTION_NAME)) {
			nextReply = nextReply.replaceAll(PARAM_INSTITUTION_NAME, candidate.getFirstName());
		}
		
		return nextReply;
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
		String nextQuestion = questionService.findByPosition(interviewProgress.getProgress() + 1).getQuery();
		
		if(nextQuestion.contains(PARAM_CANDIDATE_NAME)) {
			nextQuestion = nextQuestion.replaceAll(PARAM_CANDIDATE_NAME, candidate.getFirstName());
		}
		
		return nextQuestion;
	}

	/**
	 * Method that resolves the level for a skill/language to a number
	 * @param level
	 * @return
	 */
	private Long resolveLevelToNumber(String level) {
		int score = 0;
		
		switch (level) {
		case LEVEL_INEXPERIENCED:
			score = 10;
			break;
		case LEVEL_ENTRY:
			score = 30;
			break;
		case LEVEL_JUNIOR:
			score = 50;
			break;
		case LEVEL_MIDDLE:
			score = 75;
			break;
		case LEVEL_SENIOR:
			score = 100;
			break;
		}
		
		return (long) score;
	}
}
