package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import com.github.popescuandrei.recruitingBot.domain.CandidateExperience;

public interface CandidateExperienceService extends EntityService<CandidateExperience> {

	List<CandidateExperience> findAllByCandidateId(Long candidateId);
}
