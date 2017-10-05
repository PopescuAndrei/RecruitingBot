package com.github.popescuandrei.recruitingBot.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.github.popescuandrei.recruitingBot.domain.Skill;

@Repository
@Qualifier("skillRepository")
public interface SkillRepository extends BaseRepository<Skill, Long> {

	Skill findByName(String name);
}
