package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import com.github.popescuandrei.recruitingBot.domain.UserCandidateComment;

public interface UserCandidateCommentService extends EntityService<UserCandidateComment> {

	List<UserCandidateComment> findAllByCandidateId(Long candidateId);
	
	Long findNumberOfCommentsByCandidateId(Long candidateId);
}
