package com.github.popescuandrei.recruitingBot.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.github.popescuandrei.recruitingBot.domain.InterviewProgress;

@Repository
@Qualifier("interviewProgressRepository")
public interface InterviewProgressRepository extends BaseRepository<InterviewProgress, Long> {

	InterviewProgress findByCandidateId(Long candidateId);
}
