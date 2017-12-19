package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import com.github.popescuandrei.recruitingBot.domain.ChatMessage;

public interface ChatMessageService extends EntityService<ChatMessage> {

	/**
	 * Method for retrieving a list of {@link ChatMessage} entities
	 * corresponding to a {@link Candidate} with the candidateId
	 * @param candidateId
	 * @return
	 */
	List<ChatMessage> findAllChatMessagesByCandidateId(Long candidateId);
	
	/**
	 * Method for retrieving the next position for a {@link ChatMessage} to be stored on
	 * @param candidateId
	 * @return
	 */
	Long getNextMessagePositionByCandidateId(Long candidateId);
}
