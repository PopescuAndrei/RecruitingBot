package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import com.github.popescuandrei.recruitingBot.domain.CandidateSkill;

public interface CandidateSkillService extends EntityService<CandidateSkill> {

	/**
	 * Method for retrieving a list of {@link CandidateSkill}s
	 * for a specific {@link Candidate} identified by its candidateId
	 * @param candidateId
	 * @return
	 */
	List<CandidateSkill> findAllByCandidateId(Long candidateId);
}
