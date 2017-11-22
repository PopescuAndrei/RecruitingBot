package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import com.github.popescuandrei.recruitingBot.domain.CandidateEducation;

public interface CandidateEducationService extends EntityService<CandidateEducation> {

	List<CandidateEducation> findAllByCandidateId(Long candidateId);
}
