package com.github.popescuandrei.recruitingBot.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.github.popescuandrei.recruitingBot.domain.CandidateInterest;

@Repository
@Qualifier("candidateInterestRepository")
public interface CandidateInterestRepository extends BaseRepository<CandidateInterest, Long> {

}
