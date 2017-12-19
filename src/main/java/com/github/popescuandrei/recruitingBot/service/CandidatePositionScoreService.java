package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import com.github.popescuandrei.recruitingBot.domain.CandidatePositionScore;

public interface CandidatePositionScoreService extends EntityService<CandidatePositionScore> {

	/**
	 * Method for retrieving all the {@link CandidatePositionScore}s for a specific candidate
	 * @param candidateId
	 * @return
	 */
	List<CandidatePositionScore> findAllByCandidateId(Long candidateId);
	
	/**
	 * Method for retrieving all the {@link CandidatePositionScore}s
	 * for a specific {@link Position} with the positionId
	 * @param positionId
	 * @return
	 */
	List<CandidatePositionScore> findAllByPositionId(Long positionId);
	
	/**
	 * Method for retrieving a {@link CandidatePositionScore} corresponding to
	 * the {@link Candidate} with the candidateId and
	 * the {@link Position} with the positionId
	 * @param candidateId
	 * @return
	 */
	CandidatePositionScore findByCandidateIdAndPositionId(Long candidateId, Long positionId);
	
	/**
	 * Method for bulk saving a list of {@link CandidatePositionScore}s
	 * @param scores
	 */
	void saveAll(List<CandidatePositionScore> scores);
}
