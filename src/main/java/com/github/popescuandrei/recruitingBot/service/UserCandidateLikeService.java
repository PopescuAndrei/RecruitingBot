package com.github.popescuandrei.recruitingBot.service;

import com.github.popescuandrei.recruitingBot.domain.UserCandidateLike;

public interface UserCandidateLikeService extends EntityService<UserCandidateLike> {

	Long findNumberOfLikesByCandidateId(Long candidateId);
}
