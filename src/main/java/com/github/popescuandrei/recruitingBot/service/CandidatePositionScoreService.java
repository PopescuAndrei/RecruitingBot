package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import com.github.popescuandrei.recruitingBot.domain.CandidatePositionScore;

public interface CandidatePositionScoreService extends EntityService<CandidatePositionScore> {

	CandidatePositionScore findByCandidateIdAndPositionId(Long candidateId, Long positionId);
	
	List<CandidatePositionScore> findAllByCandidateId(Long candidateId);
	
	List<CandidatePositionScore> findAllByPositionId(Long positionId);
	
	void saveAll(List<CandidatePositionScore> scores);
}
