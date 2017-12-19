package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import com.github.popescuandrei.recruitingBot.domain.CandidateExperience;

public interface CandidateExperienceService extends EntityService<CandidateExperience> {

	/**
	 * Method for retrieving a list of {@link CandidateExperience} corresponding to
	 * the {@link Candidate} with the candidateId
	 * @param candidateId
	 * @return
	 */
	List<CandidateExperience> findAllByCandidateId(Long candidateId);
}
