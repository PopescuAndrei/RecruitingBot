package com.github.popescuandrei.recruitingBot.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.github.popescuandrei.recruitingBot.domain.UserCandidateLike;

@Repository
@Qualifier("userCandidateLikeRepository")
public interface UserCandidateLikeRepository extends BaseRepository<UserCandidateLike, Long> {

	List<UserCandidateLike> findAllByCandidateId(Long candidateId);
}
