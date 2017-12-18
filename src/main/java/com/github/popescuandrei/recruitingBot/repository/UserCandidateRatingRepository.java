package com.github.popescuandrei.recruitingBot.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.github.popescuandrei.recruitingBot.domain.UserCandidateRating;

@Repository
@Qualifier("userCandidateRatingRepository")
public interface UserCandidateRatingRepository extends BaseRepository<UserCandidateRating, Long> {

	List<UserCandidateRating> findAllByCandidateId(Long candidateId);
}
