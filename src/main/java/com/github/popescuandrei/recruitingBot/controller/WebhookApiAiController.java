package com.github.popescuandrei.recruitingBot.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.github.popescuandrei.recruitingBot.chat.AiManager;
import com.github.popescuandrei.recruitingBot.chat.support.AiGenericRequest;
import com.github.popescuandrei.recruitingBot.chat.support.AiRequestObject;
import com.github.popescuandrei.recruitingBot.chat.support.AiResponseObject;
import com.github.popescuandrei.recruitingBot.chat.support.Metadata;


@RestController
public class WebhookApiAiController {

	private static final String DEFAULT_RESPONSE = "Hmm, I don't know what you mean.";

	@Autowired
	AiManager aiManager;
	
	/**
	 * Entrypoint for API.AI webhook. All intents get filtered through here.
	 */
	@RequestMapping(value = "/aiwebhook", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
	public AiResponseObject webhook(@RequestBody AiGenericRequest request, HttpServletResponse response) {
		AiResponseObject respObj = new AiResponseObject();
		respObj.setSpeech(DEFAULT_RESPONSE);

		AiRequestObject reqObj = request.getResult();
		Metadata metadata = reqObj.getMetadata();
		String intentName = metadata.getIntentName();
		respObj.setSpeech("AiWebhook's Response resolved to: " + intentName);
		

		return respObj;
	}
}