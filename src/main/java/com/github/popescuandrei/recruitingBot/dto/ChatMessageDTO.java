package com.github.popescuandrei.recruitingBot.dto;

import static com.github.popescuandrei.recruitingBot.domain.support.Const.getChatBot;

import java.io.Serializable;
import java.util.Date;

import com.github.popescuandrei.recruitingBot.domain.Candidate;
import com.github.popescuandrei.recruitingBot.domain.ChatMessage;

public class ChatMessageDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Candidate from;
	private String message;
	private Boolean fromRobot;
	private Date time;
	
	public Candidate getFrom() {
		return from;
	}
	
	public void setFrom(Candidate from) {
		this.from = from;
	}
	
	public String getMessage() {
		return message;
	}
	
	public void setMessage(String message) {
		this.message = message;
	}
	
	public Boolean getFromRobot() {
		return fromRobot;
	}

	public void setFromRobot(Boolean fromRobot) {
		this.fromRobot = fromRobot;
	}

	public Date getTime() {
		return time;
	}
	
	public void setTime(Date time) {
		this.time = time;
	}

	public static ChatMessageDTO mapToDTO(ChatMessage message) {
		ChatMessageDTO dto = new ChatMessageDTO();
		dto.setMessage(message.getMessage());
		dto.setTime(message.getCreationDate());
		dto.setFromRobot(message.getFromRobot());
		if(message.getFromRobot() == true) {
			dto.setFrom(getChatBot());
		} else {
			dto.setFrom(message.getCandidate());
		}
		
		return dto;
	}
	
	public static ChatMessage mapToObject(Candidate c, ChatMessageDTO dto) {
		ChatMessage message = new ChatMessage();
		message.setMessage(dto.getMessage());
		message.setPosition(1L); //TODO: may not need it at all
		message.setCreationDate(new Date());
		if (c == null) {
			message.setFromRobot(true);
		} else {
			message.setFromRobot(false);
		}
		
		return message;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((from == null) ? 0 : from.hashCode());
		result = prime * result + ((fromRobot == null) ? 0 : fromRobot.hashCode());
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
		if (from == null) {
			if (other.from != null)
				return false;
		} else if (!from.equals(other.from))
			return false;
		if (fromRobot == null) {
			if (other.fromRobot != null)
				return false;
		} else if (!fromRobot.equals(other.fromRobot))
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
