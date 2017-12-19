package com.github.popescuandrei.recruitingBot.service;

import com.github.popescuandrei.recruitingBot.domain.Skill;

public interface SkillService extends EntityService<Skill> {
	
	/**
	 * Method for retrieving a {@link Skill} entity by its name
	 * @param name
	 * @return
	 */
	Skill findByName(String name);
}
