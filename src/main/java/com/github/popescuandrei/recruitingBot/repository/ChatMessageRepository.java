package com.github.popescuandrei.recruitingBot.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.github.popescuandrei.recruitingBot.domain.ChatMessage;

@Repository
@Qualifier("chatMessageRepository")
public interface ChatMessageRepository extends BaseRepository<ChatMessage, Long>, ChatMessageRepositoryCustom {

}
