package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import com.github.popescuandrei.recruitingBot.domain.CandidateInterest;

public interface CandidateInterestService extends EntityService<CandidateInterest> {
	
	/**
	 * Method for retrieving a list of {@link CandidateInterest} corresponding to
	 * the {@link Candidate} with the candidateId
	 * @param candidateId
	 * @return
	 */
	List<CandidateInterest> findAllByCandidateId(Long candidateId);
}
