package com.github.popescuandrei.recruitingBot.chat;

import java.util.Date;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

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
	
	AIConfiguration config;
	AIDataService dataService;

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

		return responseText;
	}
}