package com.github.popescuandrei.recruitingBot.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.github.popescuandrei.recruitingBot.domain.CandidatePositionScore;

@Repository
@Qualifier("candidadatePositionScoreRepository")
public interface CandidatePositionScoreRepository extends BaseRepository<CandidatePositionScore, Long> {

	CandidatePositionScore findByCandidateIdAndPositionId(Long candidateId, Long positionId);
	
	List<CandidatePositionScore> findAllByCandidateId(Long candidateId);
	
	List<CandidatePositionScore> findAllByPositionId(Long positionId);
}
