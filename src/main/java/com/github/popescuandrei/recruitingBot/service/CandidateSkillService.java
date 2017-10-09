package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import com.github.popescuandrei.recruitingBot.domain.CandidateSkill;

public interface CandidateSkillService extends EntityService<CandidateSkill> {

	List<CandidateSkill> findAllByCandidateId(Long candidateId);
}
