package com.github.popescuandrei.recruitingBot.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.github.popescuandrei.recruitingBot.domain.CandidateSkill;

@Repository
@Qualifier("candidateSkillRepository")
public interface CandidateSkillRepository extends BaseRepository<CandidateSkill, Long> {

	List<CandidateSkill> findAllByCandidateId(Long candidateId);
}
