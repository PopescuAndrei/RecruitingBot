package com.github.popescuandrei.recruitingBot.dto;

import java.io.Serializable;
import java.time.LocalDateTime;

import com.github.popescuandrei.recruitingBot.domain.Candidate;
import com.github.popescuandrei.recruitingBot.domain.ChatMessage;

public class MessageDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Candidate candidate;
	private ChatMessage message;
	private LocalDateTime time;
	
	public Candidate getCandidate() {
		return candidate;
	}
	
	public void setCandidate(Candidate candidate) {
		this.candidate = candidate;
	}
	
	public ChatMessage getMessage() {
		return message;
	}
	
	public void setMessage(ChatMessage message) {
		this.message = message;
	}
	
	public LocalDateTime getTime() {
		return time;
	}
	
	public void setTime(LocalDateTime time) {
		this.time = time;
	}
	
	
	
}
