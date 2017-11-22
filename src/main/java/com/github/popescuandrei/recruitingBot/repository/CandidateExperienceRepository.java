package com.github.popescuandrei.recruitingBot.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.github.popescuandrei.recruitingBot.domain.CandidateExperience;

@Repository
@Qualifier("candidateExperienceRepository")
public interface CandidateExperienceRepository extends BaseRepository<CandidateExperience, Long> {

	List<CandidateExperience> findAllByCandidateId(Long candidateId);
}
