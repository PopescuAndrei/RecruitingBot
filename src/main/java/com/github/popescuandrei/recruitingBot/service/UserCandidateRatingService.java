package com.github.popescuandrei.recruitingBot.service;

import com.github.popescuandrei.recruitingBot.domain.UserCandidateRating;

public interface UserCandidateRatingService extends EntityService<UserCandidateRating> {

	/**
	 * Method for retrieving a {@link UserCandidateRating}
	 * @param candidateId
	 * @return
	 */
	Double findCandidateRating(Long candidateId);
}
