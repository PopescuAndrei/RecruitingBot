package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.github.popescuandrei.recruitingBot.domain.ChatMessage;
import com.github.popescuandrei.recruitingBot.repository.BaseRepository;
import com.github.popescuandrei.recruitingBot.repository.ChatMessageRepository;

@Service
@Qualifier("chatMessageService")
public class ChatMessageServiceImpl extends EntityServiceImpl<ChatMessage> implements ChatMessageService {

	@Autowired
	@Qualifier("chatMessageRepository")
	private ChatMessageRepository chatMessageRepository;
	
	public ChatMessageServiceImpl(BaseRepository<ChatMessage, Long> repository) {
		super(repository);
	}

	@Override
	public List<ChatMessage> findAllChatMessagesByCandidateId(Long candidateId) {
		return chatMessageRepository.findAllByCandidateId(candidateId);
	}
	
	@Override
	public Long getNextMessagePositionByCandidateId(Long candidateId) {
		Long currentPosition = chatMessageRepository.getMaxPositionByCandidateId(candidateId);
		
		return currentPosition == null? 1L : (currentPosition + 1); 
	}
	
    @PostConstruct
    @Override
    protected void init() {
        super.init();
    }

}
