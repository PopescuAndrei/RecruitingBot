package com.github.popescuandrei.recruitingBot.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.github.popescuandrei.recruitingBot.domain.PositionLanguage;

@Repository
@Qualifier("positionLanguageRepository")
public interface PositionLanguageRepository extends BaseRepository<PositionLanguage, Long> {

	List<PositionLanguage> findAllByPositionId(Long positionId);
}
