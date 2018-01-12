package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import com.github.popescuandrei.recruitingBot.domain.PositionLanguage;

public interface PositionLanguageService extends EntityService<PositionLanguage>{

	/**
	 * Method for retrieving all the {@link PositionLanguage}s
	 * associated with a {@link Position} identified by its positionId
	 * @param positionId
	 * @return
	 */
	List<PositionLanguage> findAllByPositionId(Long positionId);
	
	/**
	 * Method to retrieve a {@link PositionLanguage}
	 * by its name and positionId
	 * @param name
	 * @param positionId
	 * @return
	 */
	PositionLanguage findByLanguageNameAndPositionId(String name, Long positionId);
}
