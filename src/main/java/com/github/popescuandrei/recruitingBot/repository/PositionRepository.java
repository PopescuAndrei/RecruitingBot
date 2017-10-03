package com.github.popescuandrei.recruitingBot.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.github.popescuandrei.recruitingBot.domain.Position;

@Repository
@Qualifier("positionRepository")
public interface PositionRepository extends BaseRepository<Position, Long> {

}
