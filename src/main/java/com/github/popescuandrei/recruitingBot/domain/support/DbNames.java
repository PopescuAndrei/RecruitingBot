package com.github.popescuandrei.recruitingBot.domain.support;

public final class DbNames {

	// Generic
	public static final String SEQ_GEN = "sequence_generator";
	public static final String SEQ = "seq";
	
	// User
	public static final String APP_USER = "app_user";
	public static final String APP_USER_SEQ = APP_USER + "_" + SEQ;
	public static final String APP_USER_ID = "app_user_id";
	public static final String NAME = "name";
	public static final String EMAIL = "email";
	public static final String PASSWORD = "password";
	public static final String FIRST_NAME = "first_name";
	public static final String LAST_NAME = "last_name";

	// Candidate
	public static final String CANDIDATE = "candidate";
	public static final String CANDIDATE_SEQ = CANDIDATE + "_" + SEQ;
	public static final String CANDIDATE_ID = "candidate_id";
	public static final String FACEBOOK_UUID = "facebook_uuid";
	public static final String AGE = "age";
	public static final String GENDER = "gender";
	public static final String PHONE = "phone";
	public static final String COLOR = "color";

	// User candidate like
	public static final String USER_CANDIDATE_LIKE = "user_candidate_lie";
	public static final String USER_CANDIDATE_LIKE_SEQ = USER_CANDIDATE_LIKE + "_" + SEQ;
	public static final String LIKED = "liked";

	// User candidate rating
	public static final String USER_CANDIDATE_RATING = "user_candidate_rating";
	public static final String USER_CANDIDATE_RATING_SEQ = USER_CANDIDATE_RATING + "_" + SEQ;
	public static final String RATING = "rating";

	// User candidate comment
	public static final String USER_CANDIDATE_COMMENT = "user_candidate_comment";
	public static final String USER_CANDIDATE_COMMENT_SEQ = USER_CANDIDATE_COMMENT + "_" + SEQ;
	public static final String COMMENT = "comment";
	public static final String CREATION_DATE = "creation_date";

	// Skill
	public static final String SKILL = "skill";
	public static final String SKILL_SEQ = SKILL + "_" + SEQ;
	public static final String SKILL_ID = "skill_id";

	// Candidate Skill
	public static final String CANDIDATE_SKILL = "candidate_skill";
	public static final String CANDIDATE_SKILL_SEQ = CANDIDATE_SKILL + "_" + SEQ;
	public static final String LEVEL = "level";

	// Language
	public static final String LANGUAGE = "language";
	public static final String LANGUAGE_SEQ = LANGUAGE + "_" + SEQ;
	public static final String LANGUAGE_ID = "language_id";

	// Candidate Language
	public static final String CANDIDATE_LANGUAGE = "candidate_language";
	public static final String CANDIDATE_LANGUAGE_SEQ = CANDIDATE_LANGUAGE + "_" + SEQ;
	public static final String UNDERSTANDING = "understanding";
	public static final String SPEAKING = "speaking";
	public static final String WRITING = "writing";

	// Candidate Education
	public static final String CANDIDATE_EDUCATION = "candidate_education";
	public static final String CANDIDATE_EDUCATION_SEQ = CANDIDATE_EDUCATION + "_" + SEQ;
	public static final String INSTITUTION = "institution";
	public static final String MAJOR = "major";
	public static final String PERIOD_FROM = "period_from";
	public static final String PERIOD_TO = "period_to";
	public static final String GRADE = "grade";

	// Candidate Experience
	public static final String CANDIDATE_EXPERIENCE = "candidate_experience";
	public static final String CANDIDATE_EXPERIENCE_SEQ = CANDIDATE_EXPERIENCE + "_" + SEQ;
	public static final String TITLE = "title";
	public static final String COMPANY = "company";

	// Candidate Interest
	public static final String CANDIDATE_INTEREST = "candidate_interest";
	public static final String CANDIDATE_INTEREST_SEQ = CANDIDATE_INTEREST + "_" + SEQ;
	public static final String INTEREST = "interest";

	// Position
	public static final String POSITION = "position";
	public static final String POSITION_SEQ = POSITION + "_" + SEQ;
	public static final String POSITION_ID = "position_id";
	public static final String DESCRIPTION = "description";
	public static final String IMAGE = "image";
	public static final String LAST_UPDATE_DATE = "last_update";

	// Position Skill
	public static final String POSITION_SKILL = "position_skill";
	public static final String POSITION_SKILL_SEQ = POSITION_SKILL + "_" + SEQ;

	// Chat
	public static final String CHAT_MESSAGE = "chat_message";
	public static final String CHAT_MESSAGE_SEQ = CHAT_MESSAGE + "_" + SEQ;
	public static final String FROM_ROBOT = "from_robot";
	public static final String MESSAGE = "message";

	// Question
	public static final String QUESTION = "question";
	public static final String QUESTION_SEQ = QUESTION + "_" + SEQ;
	public static final String QUESTION_ID = "questionId";
	public static final String QUERY = "query";

	// Reply
	public static final String REPLY = "questionReply";
	public static final String REPLY_SEQ = REPLY + "_" + SEQ;
	public static final String REPLY_MESSAGE = "reply";

	// InterviewProgress
	public static final String INTERVIEW_PROGRESS = "interview_progress";
	public static final String INTERVIEW_PROGRESS_SEQ = INTERVIEW_PROGRESS + "_" + SEQ;
	public static final String PROGRESS = "progress";
}
