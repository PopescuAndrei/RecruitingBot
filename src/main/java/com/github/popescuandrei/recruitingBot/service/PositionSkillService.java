package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import com.github.popescuandrei.recruitingBot.domain.PositionSkill;

public interface PositionSkillService extends EntityService<PositionSkill> {

	List<PositionSkill> findAllByPositionId(Long positionId);
}
