package com.github.popescuandrei.recruitingBot.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.github.popescuandrei.recruitingBot.domain.PositionExperience;

@Repository
@Qualifier("positionExperienceRepository")
public interface PositionExperienceRepository extends BaseRepository<PositionExperience, Long> {

	List<PositionExperience> findAllByPositionId(Long positionId);
	
	PositionExperience findByTitleAndPositionId(String title, Long positionId);
}
