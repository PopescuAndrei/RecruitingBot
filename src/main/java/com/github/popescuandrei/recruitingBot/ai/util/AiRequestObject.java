package com.github.popescuandrei.recruitingBot.ai.util;

import java.util.Map;

public class AiRequestObject {

	private String resolvedQuery;
	
	private Metadata metadata;
	
	private Map<String, String> parameters;
	
	/** Default Constructor */
	public AiRequestObject() {
		super();
	}
	
	/** Constructor */
	public AiRequestObject(String resolvedQuery, Metadata metadata, Map<String, String> parameters) {
		super();
		this.resolvedQuery = resolvedQuery;
		this.metadata = metadata;
		this.parameters = parameters;
	}


	public String getResolvedQuery() {
		return resolvedQuery;
	}

	public void setResolvedQuery(String resolvedQuery) {
		this.resolvedQuery = resolvedQuery;
	}

	public Metadata getMetadata() {
		return metadata;
	}

	public void setMetadata(Metadata metadata) {
		this.metadata = metadata;
	}

	public Map<String, String> getParameters() {
		return parameters;
	}

	public void setParameters(Map<String, String> parameters) {
		this.parameters = parameters;
	}
}