package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import com.github.popescuandrei.recruitingBot.domain.ChatMessage;

public interface ChatMessageService extends EntityService<ChatMessage> {

	List<ChatMessage> findAllChatMessagesByCandidateId(Long candidateId);
	
	Long getNextMessagePositionByCandidateId(Long candidateId);
}
