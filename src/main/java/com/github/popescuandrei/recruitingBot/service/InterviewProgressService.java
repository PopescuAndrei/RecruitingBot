package com.github.popescuandrei.recruitingBot.service;

import com.github.popescuandrei.recruitingBot.domain.InterviewProgress;

public interface InterviewProgressService extends EntityService<InterviewProgress> {

	/**
	 * Method for retrieving the {@link InterviewProgress}
	 * for a specific {@link Candidate} identified by its candidateId
	 * @param candidateId
	 * @return
	 */
	InterviewProgress findByCandidateId(Long candidateId);
}
