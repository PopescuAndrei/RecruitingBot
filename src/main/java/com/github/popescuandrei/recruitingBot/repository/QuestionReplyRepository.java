package com.github.popescuandrei.recruitingBot.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.github.popescuandrei.recruitingBot.domain.QuestionReply;

@Repository
@Qualifier("questionReplyRepository")
public interface QuestionReplyRepository extends BaseRepository<QuestionReply, Long> {

}
