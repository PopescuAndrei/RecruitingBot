package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import com.github.popescuandrei.recruitingBot.domain.Question;

public interface QuestionService extends EntityService<Question> {
	
	/**
	 * Method for retrieving a {@link Question} by its positionId
	 * @param position
	 * @return
	 */
	Question findByPosition(Long position);
	
	/**
	 * Method for deleting the old, unused questions;
	 * @param newQuestions
	 */
	void deleteOldQuestions(List<Question> newQuestions);
}
