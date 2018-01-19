package com.github.popescuandrei.recruitingBot.repository;

import com.github.popescuandrei.recruitingBot.domain.ChatMessage;

/**
 * Interface for repository for custom operations related to {@link ChatMessage}
 */
public interface ChatMessageRepositoryCustom {
	
	Long getMaxPositionByCandidateId(Long candidateId);
}
