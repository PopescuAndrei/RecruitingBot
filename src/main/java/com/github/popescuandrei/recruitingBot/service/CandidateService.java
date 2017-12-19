package com.github.popescuandrei.recruitingBot.service;

import com.github.popescuandrei.recruitingBot.domain.Candidate;

public interface CandidateService extends EntityService<Candidate> {

	/**
	 * Method for retrieving a {@link Candidate} by its FacebookUUID
	 * @param facebookUuid
	 * @return
	 */
	Candidate findByFacebookUuid(String facebookUuid);
}
