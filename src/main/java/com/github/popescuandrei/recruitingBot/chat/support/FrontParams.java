package com.github.popescuandrei.recruitingBot.chat.support;

/**
 * Parameters corresponding to specific markers found inside the questions.
 * Markers are identified by ":" preceding them. :candidate.name
 * Markers will be replaced with values from the database.
 * @author epopean
 *
 */
public final class FrontParams {

	public static final String PARAM_IDENTIFIER = ":";
	public static final String PARAM_CANDIDATE_NAME = PARAM_IDENTIFIER + "candidate.name";
	public static final String PARAM_INSTITUTION_NAME = PARAM_IDENTIFIER + "institution.name";
	
	public static final String LEVEL_INEXPERIENCED = "inexperienced";
	public static final String LEVEL_ENTRY = "entry";
	public static final String LEVEL_JUNIOR = "junior";
	public static final String LEVEL_MIDDLE = "middle";
	public static final String LEVEL_SENIOR = "senior";
	
	public FrontParams() {
		throw new UnsupportedOperationException("should not be instantiated");
	}
}
