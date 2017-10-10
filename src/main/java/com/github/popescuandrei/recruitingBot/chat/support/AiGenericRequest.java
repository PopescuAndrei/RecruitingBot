package com.github.popescuandrei.recruitingBot.chat.support;

public class AiGenericRequest {

	private AiRequestObject result;
	
	/** Default Constructor */
	public AiGenericRequest() {
		super();
	}
	
	/** Constructor */
	public AiGenericRequest(AiRequestObject result) {
		super();
		this.result = result;
	}

	public AiRequestObject getResult() {
		return result;
	}
}