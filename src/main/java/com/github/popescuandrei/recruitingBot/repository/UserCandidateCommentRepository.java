package com.github.popescuandrei.recruitingBot.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.github.popescuandrei.recruitingBot.domain.UserCandidateComment;

@Repository
@Qualifier("userCandidateCommentRepository")
public interface UserCandidateCommentRepository extends BaseRepository<UserCandidateComment, Long> {

	List<UserCandidateComment> findAllByCandidateId(Long candidateId);
}
