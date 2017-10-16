package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import com.github.popescuandrei.recruitingBot.domain.CandidateInterest;

public interface CandidateInterestService extends EntityService<CandidateInterest> {
	
	List<CandidateInterest> findAllByCandidateId(Long candidateId);
}
