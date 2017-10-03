package com.github.popescuandrei.recruitingBot.service;

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
	
    @PostConstruct
    @Override
    protected void init() {
        super.init();
    }

}
