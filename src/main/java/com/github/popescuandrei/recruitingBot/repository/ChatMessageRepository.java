package com.github.popescuandrei.recruitingBot.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.github.popescuandrei.recruitingBot.domain.ChatMessage;

@Repository
@Qualifier("chatMessageRepository")
public interface ChatMessageRepository extends BaseRepository<ChatMessage, Long> {

	@Query("SELECT max(cm.position) FROM ChatMessage cm WHERE cm.candidate.id = :candidateId")
	Long getMaxPositionByCandidateId(Long candidateId);
}
