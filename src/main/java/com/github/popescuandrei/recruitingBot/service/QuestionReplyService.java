package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import com.github.popescuandrei.recruitingBot.domain.QuestionReply;

public interface QuestionReplyService extends EntityService<QuestionReply> {

	/**
	 * Method for retrieving a list of {@link QuestionReply} entities
	 * for a {@link Question} identified by its questionId
	 * @param questionId
	 * @return
	 */
	List<QuestionReply> findAllByQuestionId(Long questionId);
}
