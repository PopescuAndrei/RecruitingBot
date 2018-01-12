package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import com.github.popescuandrei.recruitingBot.domain.PositionExperience;

public interface PositionExperienceService extends EntityService<PositionExperience> {

	/**
	 * Method for retrieving a list containing all {@link PositionExperience} entities
	 * associated to a position with the corresponding id
	 * @param positionId
	 * @return
	 */
	List<PositionExperience> findAllByPositionId(Long positionId);
	
	/**
	 * Method for retrieving a {@link PositionExperience} with the
	 * corresponding title and positionId
	 * @param title
	 * @param positionId
	 * @return
	 */
	PositionExperience findByTitleAndPositionId(String title, Long positionId);
}
