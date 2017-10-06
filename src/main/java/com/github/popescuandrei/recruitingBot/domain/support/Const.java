package com.github.popescuandrei.recruitingBot.domain.support;

import java.util.Arrays;
import java.util.List;
import java.util.Random;

public class Const {

	public static final String BOT_NAME = "HR-Ninja";
	public static final String UNAVAILABLE = "Unavailable";
	public static final String AT_EMAIL = "@unavailalble.com"; 
	public static final String MALE = "male";
	public static final String FEMALE = "female";
	
	private static final List<String> DEFAULT_FALLBACK_MESSAGES = Arrays.asList("I didn't catch that. Can you repeat?", 
															  "Doesn't look like anything to me! Can you rephrase?",
															  "I can't understand you. Can you better explain?");
	
	public static String getRandomFallbackAnswer() {
		return DEFAULT_FALLBACK_MESSAGES.get(new Random().nextInt(DEFAULT_FALLBACK_MESSAGES.size()));
	}
}
