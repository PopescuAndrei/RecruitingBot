package com.github.popescuandrei.recruitingBot.chat;

import java.util.Date;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

import com.github.popescuandrei.recruitingBot.domain.Candidate;
import com.github.popescuandrei.recruitingBot.domain.ChatMessage;
import com.github.popescuandrei.recruitingBot.service.CandidateService;
import com.github.popescuandrei.recruitingBot.service.ChatMessageService;

import ai.api.AIConfiguration;
import ai.api.AIDataService;
import ai.api.model.AIRequest;
import ai.api.model.AIResponse;

@Component
@PropertySource("classpath:application.properties")
public class AiManager {

	private static final Logger log = LoggerFactory.getLogger(AiManager.class);

	@Value("${api.ai.apikey}")
	private String apiKey;

	@Autowired
	private ChatChoreographer chatChoreographer;
	
	@Autowired
	private CandidateService candidateService;
	
	@Autowired
	private ChatMessageService chatMessageService;
	
	private AIConfiguration config;
	
	private AIDataService dataService;

	@PostConstruct
	public void init() {
		config = new AIConfiguration(apiKey);
		dataService = new AIDataService(config);
	}

	/**
	 * Calls the API.AI service using user input from the UI.
	 */
	public String sendRequest(String statement, String facebookUuid, Date timestamp) {
		String responseText = "Hmm, I need to think on that. Ask again later.";
		try {
			AIRequest request = new AIRequest(statement);
			request.setResetContexts(true);
			request.setLanguage("English");
			
			AIResponse response = dataService.request(request);
			if (response.getStatus().getCode() == 200) {
				responseText = chatChoreographer.parseAiResponse(response, facebookUuid, timestamp);
			}
		} catch (Exception e) {
			e.printStackTrace();
			log.error(e.getMessage());
		}

		Candidate candidate = candidateService.findByFacebookUuid(facebookUuid);
		log.info("CANDIDATE IIIIIIIIIIS: " + candidate.toString() + " ###########");
		saveChatMessage(candidate, statement, Boolean.FALSE);
		saveChatMessage(candidate, responseText, Boolean.TRUE);
		
		return responseText;
	}
	
	/**
	 * Method that saves a chat message coming from a candidate/bot on the next available position.
	 * @param candidate
	 * @param message
	 * @param fromBot
	 */
	private void saveChatMessage(Candidate candidate, String message, Boolean fromBot) {
		ChatMessage chatMessage = new ChatMessage();
		chatMessage.setCandidate(candidate);
		chatMessage.setFromRobot(fromBot);
		chatMessage.setMessage(message);
		chatMessage.setPosition(chatMessageService.getNextMessagePositionByCandidateId(candidate.getId()));
		chatMessage.setCreationDate(new Date());
		
		chatMessageService.create(chatMessage);
	}
}