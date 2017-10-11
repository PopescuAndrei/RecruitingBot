package com.github.popescuandrei.recruitingBot.repository;

/**
 * Interface for repository for custom operations related to {@link ChatMessage}
 */
public interface ChatMessageRepositoryCustom {
	
	Long getMaxPositionByCandidateId(Long candidateId);
}
