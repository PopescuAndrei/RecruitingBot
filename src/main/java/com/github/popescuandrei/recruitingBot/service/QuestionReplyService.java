package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import com.github.popescuandrei.recruitingBot.domain.QuestionReply;

public interface QuestionReplyService extends EntityService<QuestionReply> {

	List<QuestionReply> findAllByQuestionId(Long questionId);
}
