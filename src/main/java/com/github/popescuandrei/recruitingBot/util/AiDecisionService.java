package com.github.popescuandrei.recruitingBot.util;

import static com.github.popescuandrei.recruitingBot.ai.util.Actions.ADD_EDUCATION;
import static com.github.popescuandrei.recruitingBot.ai.util.Actions.ADD_EMAIL;
import static com.github.popescuandrei.recruitingBot.ai.util.Actions.ADD_EXPERIENCE;
import static com.github.popescuandrei.recruitingBot.ai.util.Actions.ADD_GENDER;
import static com.github.popescuandrei.recruitingBot.ai.util.Actions.ADD_INTEREST;
import static com.github.popescuandrei.recruitingBot.ai.util.Actions.ADD_LANGUAGE;
import static com.github.popescuandrei.recruitingBot.ai.util.Actions.ADD_SKILLS;
import static com.github.popescuandrei.recruitingBot.ai.util.Actions.APPLY_POSITION;
import static com.github.popescuandrei.recruitingBot.ai.util.Actions.GREETINGS;
import static com.github.popescuandrei.recruitingBot.ai.util.Actions.SEARCH_POSITIONS;

import java.util.HashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import com.github.popescuandrei.recruitingBot.ai.util.Actions;
import com.google.gson.JsonElement;

import ai.api.model.AIResponse;

@Component
@Qualifier("aiDecisionService")
public class AiDecisionService {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(AiDecisionService.class);
	
	public String parseAiResponse(AIResponse aiResponse) {
		String response = null;
		
		String debugLog = null;
		if(aiResponse.getResult().getAction().equals(ADD_EDUCATION)) {
			debugLog = "ADD_EDUCATION";
		} else if (aiResponse.getResult().getAction().equals(ADD_EMAIL)) {
			debugLog = "ADD_email";
		} else if (aiResponse.getResult().getAction().equals(ADD_EXPERIENCE)) {
			debugLog = "ADD_experience";
		} else if (aiResponse.getResult().getAction().equals(ADD_GENDER)) {
			debugLog = "ADD_Gender";
		} else if (aiResponse.getResult().getAction().equals(ADD_INTEREST)) {
			debugLog = "ADD_interest";
		} else if (aiResponse.getResult().getAction().equals(ADD_LANGUAGE)) {
			debugLog = "ADD_language";
		} else if (aiResponse.getResult().getAction().equals(ADD_SKILLS)) {
			debugLog = "add skills";
		} else if (aiResponse.getResult().getAction().equals(APPLY_POSITION)) {
			debugLog = "apply pos";
		} else if (aiResponse.getResult().getAction().equals(GREETINGS)) {
			debugLog = "greet";
		} else if (aiResponse.getResult().getAction().equals(SEARCH_POSITIONS)) {
			debugLog = "saerch pos";
		} else {
			debugLog = "ANYTHING";
		}
		LOGGER.debug("ACTIOOOOOOOOOOOOOON : " + debugLog);
		HashMap<String, JsonElement> parameters = aiResponse.getResult().getParameters();
		parameters.forEach((k,v) -> LOGGER.debug("PARAM:  " + k + ",VALUE:  " + v.toString()));
		
		return response;
	}
}
