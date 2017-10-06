package com.github.popescuandrei.recruitingBot.conversation.util;

public class AiResponseObject {
	
	private String speech;
	
	private String displayText;
	
	private String source;

	/** Default Constructor */
	public AiResponseObject() {
		super();
	}
	
	/** Constructor */
	public AiResponseObject(String speech, String displayText, String source) {
		super();
		this.speech = speech;
		this.displayText = displayText;
		this.source = source;
	}

	public String getSpeech() {
		return speech;
	}

	public void setSpeech(String speech) {
		this.speech = speech;
	}

	public String getDisplayText() {
		return displayText;
	}

	public void setDisplayText(String displayText) {
		this.displayText = displayText;
	}

	public String getSource() {
		return source;
	}
	
	public void setSource(String source) {
		this.source = source;
	}
}