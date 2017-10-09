package com.github.popescuandrei.recruitingBot.chat.util;

public final class AiConstants {

	// INTENTS
	public static final String INTENT_GREETINGS = "greetings";
	public static final String INTENT_ADD_EMAIL = "add_email";
	public static final String INTENT_ADD_GENDER = "add_gender";
	public static final String INTENT_ADD_EDUCATION = "add_education";
	public static final String INTENT_ADD_EXPERIENCE = "add_experience";
	public static final String INTENT_ADD_LANGUAGE = "add_language";
	public static final String INTENT_ADD_SKILLS = "add_skills";
	public static final String INTENT_ADD_INTEREST = "add_interest";
	public static final String INTENT_SEARCH_POSITIONS = "search_positions";
	public static final String INTENT_APPLY_POSITION = "apply_position";
	
	// ACTIONS
	public static final String ACTION_GREETING = "greeting";
	public static final String ACTION_ACCEPTANCE = "statement.acceptance";
	public static final String ACTION_SAVE_EDUCATION = "save.education";
	public static final String ACTION_SAVE_EXPERIENCE = "save.experience";
	public static final String ACTION_SAVE_EMAIL = "save.email";
	public static final String ACTION_SAVE_GENDER = "save.gender";
	public static final String ACTION_SAVE_LANGUAGE = "save.language";
	public static final String ACTION_SAVE_MAJOR = "save.major";
	public static final String ACTION_SAVE_SKILL = "save.skill";
	public static final String ACTION_SAVE_INTEREST = "save.interest";
	public static final String ACTION_SEARCH_POSITION = "search.position";
	
	// ENTITIES
	public static final String ENTITY_SYS_DATE = "sys.date";
	public static final String ENTITY_SYS_EMAIL = "sys.email";
	public static final String ENTITY_SYS_DATE_PERIOD = "sys.date-period";
	public static final String ENTITY_SYS_DURATION = "sys.duration";
	public static final String ENTITY_SYS_NUMBER = "sys.number";
	public static final String ENTITY_SYS_GENDER = "gender";
	public static final String ENTITY_EXPERIENCE_COMPANY = "company";
	public static final String ENTITY_EXPERIENCE_POSITION = "position";
	public static final String ENTITY_EDUCATION_MAJOR = "major";
	public static final String ENTITY_EDUCATION_INSTITUTION = "university";
	public static final String ENTITY_INTEREST = "interest";
	public static final String ENTITY_LANGUAGE = "language";
	public static final String ENTITY_PERIOD = "period";
	public static final String ENTITY_LEVEL = "level";
	public static final String ENTITY_SKILL = "skill";
	public static final String ENTITY_ACCEPTANCE = "acceptance";
	
	// ENTITY VALUES
	public static final String ENTITY_ACCEPTANCE_YES = "Yes";
	public static final String ENTITY_ACCEPTANCE_NO = "No";
}
