package com.github.popescuandrei.recruitingBot.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.github.popescuandrei.recruitingBot.domain.CandidateEducation;

@Repository
@Qualifier("candidateEducationRepository")
public interface CandidateEducationRepository extends BaseRepository<CandidateEducation, Long> {

	List<CandidateEducation> findAllByCandidateId(Long candidateId);
}
