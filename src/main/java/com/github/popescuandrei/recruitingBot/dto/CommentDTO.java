package com.github.popescuandrei.recruitingBot.dto;

import java.io.Serializable;
import java.util.Date;

import com.github.popescuandrei.recruitingBot.domain.AppUser;
import com.github.popescuandrei.recruitingBot.domain.Candidate;
import com.github.popescuandrei.recruitingBot.domain.UserCandidateComment;

public class CommentDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private String author;
	private String avatarSrc;
	private String message;
	private Date date;
	
	public String getAuthor() {
		return author;
	}
	
	public void setAuthor(String author) {
		this.author = author;
	}
	
	public String getAvatarSrc() {
		return avatarSrc;
	}
	
	public void setAvatarSrc(String avatarSrc) {
		this.avatarSrc = avatarSrc;
	}
	
	public String getMessage() {
		return message;
	}
	
	public void setMessage(String message) {
		this.message = message;
	}
	
	public Date getDate() {
		return date;
	}
	
	public void setDate(Date date) {
		this.date = date;
	}

	public static UserCandidateComment mapToObject(AppUser user, Candidate candidate, CommentDTO dto) {
		UserCandidateComment ucc = new UserCandidateComment();
		ucc.setAppUser(user);
		ucc.setCandidate(candidate);
		ucc.setComment(dto.getMessage());
		ucc.setCreationDate(dto.getDate());
		
		return ucc;
	}
	
	public static CommentDTO mapToDTO(UserCandidateComment userCandidateComment) {
		CommentDTO dto = new CommentDTO();
		dto.setAuthor(userCandidateComment.getAppUser().getFullName());
		dto.setAvatarSrc(userCandidateComment.getAppUser().getAvatar());
		dto.setMessage(userCandidateComment.getComment());
		dto.setDate(userCandidateComment.getCreationDate());
		
		return dto;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((author == null) ? 0 : author.hashCode());
		result = prime * result + ((avatarSrc == null) ? 0 : avatarSrc.hashCode());
		result = prime * result + ((date == null) ? 0 : date.hashCode());
		result = prime * result + ((message == null) ? 0 : message.hashCode());
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
		CommentDTO other = (CommentDTO) obj;
		if (author == null) {
			if (other.author != null)
				return false;
		} else if (!author.equals(other.author))
			return false;
		if (avatarSrc == null) {
			if (other.avatarSrc != null)
				return false;
		} else if (!avatarSrc.equals(other.avatarSrc))
			return false;
		if (date == null) {
			if (other.date != null)
				return false;
		} else if (!date.equals(other.date))
			return false;
		if (message == null) {
			return other.message == null;
		} else return message.equals(other.message);
	}
}
