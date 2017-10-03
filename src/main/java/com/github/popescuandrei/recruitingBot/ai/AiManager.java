package com.github.popescuandrei.recruitingBot.ai;

import static com.github.popescuandrei.recruitingBot.ai.util.Entities.LANGUAGE;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

import com.github.popescuandrei.recruitingBot.ai.util.Entities;

import ai.api.AIConfiguration;
import ai.api.AIDataService;
import ai.api.model.AIRequest;
import ai.api.model.AIResponse;

@Component
@PropertySource("classpath:application.properties")
public class AiManager {

	private static final Logger LOGGER = LoggerFactory.getLogger(AiManager.class);

	@Value("${api.ai.apikey}")
	private String apiKey;

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
	public String sendRequest(String statement) {
		String responseText = "Hmm, I need to think on that. Ask again later.";
		LOGGER.info("#######STATEMENT: " + statement);
		try {
			AIRequest request = new AIRequest(statement);
			LOGGER.info("#######REQUEST SESSION ID: " + request.getSessionId());
			LOGGER.info("#######REQUEST: " + request.toString());
			AIResponse response = dataService.request(request);
			LOGGER.info("#######RESPONSE: " + response.getResult().getStringParameter(LANGUAGE));
			if (response.getStatus().getCode() == 200) {
				LOGGER.info("###########RESPONSE :" + response.getResult().toString());
				responseText = response.getResult().getFulfillment().getSpeech();
			}
		} catch (Exception e) {
			e.printStackTrace();
			LOGGER.error(e.getMessage());
		}

		return responseText;
	}
}