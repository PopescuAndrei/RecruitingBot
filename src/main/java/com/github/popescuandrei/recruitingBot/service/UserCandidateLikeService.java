package com.github.popescuandrei.recruitingBot.service;

import com.github.popescuandrei.recruitingBot.domain.UserCandidateLike;

public interface UserCandidateLikeService extends EntityService<UserCandidateLike> {

	/**
	 * Method for retrieving the number of {@UserCandidateLike} entities
	 * associated with a {@link Candidate} identified by its id
	 * @param candidateId
	 * @return
	 */
	Long findNumberOfLikesByCandidateId(Long candidateId);
}
