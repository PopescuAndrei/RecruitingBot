package com.github.popescuandrei.recruitingBot.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.github.popescuandrei.recruitingBot.domain.PositionSkill;

@Repository
@Qualifier("positionSkillRepository")
public interface PositionSkillRepository extends BaseRepository<PositionSkill, Long> {

}