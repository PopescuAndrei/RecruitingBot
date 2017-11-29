package com.github.popescuandrei.recruitingBot.dto;

import java.io.Serializable;

import com.github.popescuandrei.recruitingBot.domain.Candidate;
import com.github.popescuandrei.recruitingBot.domain.CandidateInterest;

/**
 * {@code CandidateInterest}'s DTO.
 * @author epopean
 *
 */
public class InterestDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private String interest;

	public String getInterest() {
		return interest;
	}

	public void setInterest(String interest) {
		this.interest = interest;
	}

	public static CandidateInterest mapToObject(Candidate candidate, InterestDTO dto) {
		CandidateInterest ci = new CandidateInterest();
		ci.setCandidate(candidate);
		ci.setName(dto.getInterest());
		
		return ci;
	}
	
	public static InterestDTO mapToDTO(CandidateInterest ci) {
		InterestDTO dto = new InterestDTO();
		dto.setInterest(ci.getName());
		
		return dto;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((interest == null) ? 0 : interest.hashCode());
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
		InterestDTO other = (InterestDTO) obj;
		if (interest == null) {
			if (other.interest != null)
				return false;
		} else if (!interest.equals(other.interest))
			return false;
		return true;
	}
}
