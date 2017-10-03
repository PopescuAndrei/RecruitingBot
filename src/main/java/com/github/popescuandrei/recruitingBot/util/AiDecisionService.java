package com.github.popescuandrei.recruitingBot.util;

import java.util.HashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import com.google.gson.JsonElement;

import ai.api.model.AIResponse;

@Component
@Qualifier("aiDecisionService")
public class AiDecisionService {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(AiDecisionService.class);
	
	public String parseAiResponse(AIResponse aiResponse) {
		String response = null;
		
		if(aiResponse.getResult().getAction().equals("add_experience")) {
			HashMap<String, JsonElement> parameters = aiResponse.getResult().getParameters();
			parameters.forEach((k,v) -> LOGGER.debug("PARAM:  " + k + ",VALUE:  " + v.toString()));
		}
		
		return response;
	}
}
