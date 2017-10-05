package com.github.popescuandrei.recruitingBot.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.github.popescuandrei.recruitingBot.domain.Candidate;

@Repository
@Qualifier("candidateRepository")
public interface CandidateRepository extends BaseRepository<Candidate, Long> {

	Candidate findByFacebookUuid(String facebookUuid);
}
