package com.github.popescuandrei.recruitingBot.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.github.popescuandrei.recruitingBot.domain.Question;

@Repository
@Qualifier("questionRepository")
public interface QuestionRepository extends BaseRepository<Question, Long> {

	Question findByPosition(Long position);
}
