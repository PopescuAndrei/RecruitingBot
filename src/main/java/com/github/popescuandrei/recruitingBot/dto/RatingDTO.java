package com.github.popescuandrei.recruitingBot.dto;

import java.io.Serializable;

import com.github.popescuandrei.recruitingBot.domain.AppUser;
import com.github.popescuandrei.recruitingBot.domain.Candidate;
import com.github.popescuandrei.recruitingBot.domain.UserCandidateRating;

public class RatingDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private String author;
	private Double rating;
	
	public String getAuthor() {
		return author;
	}
	
	public void setAuthor(String author) {
		this.author = author;
	}
	
	public Double getRating() {
		return rating;
	}
	
	public void setRating(Double rating) {
		this.rating = rating;
	}

	public static UserCandidateRating mapToObject(AppUser user, Candidate candidate, RatingDTO dto) {
		UserCandidateRating ucr = new UserCandidateRating();
		ucr.setAppUser(user);
		ucr.setCandidate(candidate);
		ucr.setRating(dto.getRating());
		
		return ucr;
	}
	
	public static RatingDTO mapToDTO(UserCandidateRating userCandidateRating) {
		RatingDTO dto = new RatingDTO();
		dto.setAuthor(userCandidateRating.getAppUser().getFullName());
		dto.setRating(userCandidateRating.getRating());
		
		return dto;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((author == null) ? 0 : author.hashCode());
		result = prime * result + ((rating == null) ? 0 : rating.hashCode());
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
		RatingDTO other = (RatingDTO) obj;
		if (author == null) {
			if (other.author != null)
				return false;
		} else if (!author.equals(other.author))
			return false;
		if (rating == null) {
			if (other.rating != null)
				return false;
		} else if (!rating.equals(other.rating))
			return false;
		return true;
	}
}
