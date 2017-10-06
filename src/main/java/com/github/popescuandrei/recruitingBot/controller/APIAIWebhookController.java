package com.github.popescuandrei.recruitingBot.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.github.popescuandrei.recruitingBot.chat.AiManager;
import com.github.popescuandrei.recruitingBot.chat.util.AiConstants;
import com.github.popescuandrei.recruitingBot.chat.util.AiGenericRequest;
import com.github.popescuandrei.recruitingBot.chat.util.AiRequestObject;
import com.github.popescuandrei.recruitingBot.chat.util.AiResponseObject;
import com.github.popescuandrei.recruitingBot.chat.util.Metadata;


@RestController
public class APIAIWebhookController {

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

		if (intentName != null) {
			switch (intentName) {
			case AiConstants.INTENT_ADD_EDUCATION:
				respObj.setSpeech("IT's EDUCATION");
				break;
			default:
				respObj.setSpeech("IT's" + intentName);
				break;
			}
		}

		return respObj;
	}
}