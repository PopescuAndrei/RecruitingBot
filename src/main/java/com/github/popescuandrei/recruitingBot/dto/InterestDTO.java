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
	
	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public static CandidateInterest mapToObject(Candidate candidate, InterestDTO dto) {
		CandidateInterest ci = new CandidateInterest();
		ci.setCandidate(candidate);
		ci.setName(dto.getName());
		
		return ci;
	}
	
	public static InterestDTO mapToDTO(CandidateInterest ci) {
		InterestDTO dto = new InterestDTO();
		dto.setName(ci.getName());
		
		return dto;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
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
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}
}
