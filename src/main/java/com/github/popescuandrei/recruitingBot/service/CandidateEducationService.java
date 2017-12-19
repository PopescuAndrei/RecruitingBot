package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import com.github.popescuandrei.recruitingBot.domain.CandidateEducation;

public interface CandidateEducationService extends EntityService<CandidateEducation> {

	/**
	 * Method for retrieving a list of {@link CandidateEducation} corresponding to
	 * the {@link Candidate} with the candidateId
	 * @param candidateId
	 * @return
	 */
	List<CandidateEducation> findAllByCandidateId(Long candidateId);
}
