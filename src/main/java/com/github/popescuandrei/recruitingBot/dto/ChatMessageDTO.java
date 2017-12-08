package com.github.popescuandrei.recruitingBot.dto;

import java.io.Serializable;
import java.util.Date;

import com.github.popescuandrei.recruitingBot.domain.Candidate;
import com.github.popescuandrei.recruitingBot.domain.ChatMessage;

public class ChatMessageDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Candidate candidate;
	private String message;
	private Date time;
	
	public Candidate getCandidate() {
		return candidate;
	}
	
	public void setCandidate(Candidate candidate) {
		this.candidate = candidate;
	}
	
	public String getMessage() {
		return message;
	}
	
	public void setMessage(String message) {
		this.message = message;
	}
	
	public Date getTime() {
		return time;
	}
	
	public void setTime(Date time) {
		this.time = time;
	}

	public static ChatMessageDTO mapToDTO(ChatMessage message) {
		ChatMessageDTO dto = new ChatMessageDTO();
		dto.setCandidate(message.getCandidate());
		dto.setMessage(message.getMessage());
		dto.setTime(message.getCreationDate());
		
		return dto;
	}
	
	public static ChatMessage mapToObject(Candidate c, ChatMessageDTO dto) {
		ChatMessage message = new ChatMessage();
		message.setCandidate(dto.getCandidate());
		message.setMessage(dto.getMessage());
		message.setPosition(1L); //TODO: may not need it at all
		message.setCreationDate(new Date());
		if (c==null) {
			message.setFromRobot(true);
		}
		
		return message;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((candidate == null) ? 0 : candidate.hashCode());
		result = prime * result + ((message == null) ? 0 : message.hashCode());
		result = prime * result + ((time == null) ? 0 : time.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ChatMessageDTO other = (ChatMessageDTO) obj;
		if (candidate == null) {
			if (other.candidate != null)
				return false;
		} else if (!candidate.equals(other.candidate))
			return false;
		if (message == null) {
			if (other.message != null)
				return false;
		} else if (!message.equals(other.message))
			return false;
		if (time == null) {
			if (other.time != null)
				return false;
		} else if (!time.equals(other.time))
			return false;
		return true;
	}
}
