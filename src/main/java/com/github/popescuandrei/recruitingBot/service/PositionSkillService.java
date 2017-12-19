package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import com.github.popescuandrei.recruitingBot.domain.PositionSkill;

public interface PositionSkillService extends EntityService<PositionSkill> {

	/**
	 * Method for retrieving all the {@link PositionSkill}s
	 * associated with a {@link Position} identified by its positionId
	 * @param positionId
	 * @return
	 */
	List<PositionSkill> findAllByPositionId(Long positionId);
	
	/**
	 * Method for retrieving a {@link PositionSkill} associated with a
	 * {@link Position} identified by its positionId and
	 * {@link Skill} identified by its skillId
	 * @param positionId
	 * @return
	 */
	PositionSkill findByPositionIdAndSkillId(Long positionId, Long skillId);
}
