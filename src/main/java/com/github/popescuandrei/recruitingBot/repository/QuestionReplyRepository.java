package com.github.popescuandrei.recruitingBot.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.github.popescuandrei.recruitingBot.domain.QuestionReply;

@Repository
@Qualifier("questionReplyRepository")
public interface QuestionReplyRepository extends BaseRepository<QuestionReply, Long> {

	List<QuestionReply> findAllByQuestionId(Long questionId);
}
