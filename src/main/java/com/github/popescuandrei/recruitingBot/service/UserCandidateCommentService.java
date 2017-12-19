package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import com.github.popescuandrei.recruitingBot.domain.UserCandidateComment;

public interface UserCandidateCommentService extends EntityService<UserCandidateComment> {

	/**
	 * Method for retrieving a list of {@link UserCandidateComment} entities
	 * by their {@link Candidate}'s id
	 * @param candidateId
	 * @return
	 */
	List<UserCandidateComment> findAllByCandidateId(Long candidateId);
	
	/**
	 * Method for retrieving the number of {@link UserCandidateComment} entities
	 * associated with a {@link Candidate} identified by its id
	 * @param candidateId
	 * @return
	 */
	Long findNumberOfCommentsByCandidateId(Long candidateId);
}
