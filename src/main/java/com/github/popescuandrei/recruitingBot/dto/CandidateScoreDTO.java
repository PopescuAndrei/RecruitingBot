package com.github.popescuandrei.recruitingBot.dto;

import java.io.Serializable;

import com.github.popescuandrei.recruitingBot.domain.Candidate;
import com.github.popescuandrei.recruitingBot.domain.CandidatePositionScore;
import com.github.popescuandrei.recruitingBot.domain.Position;

public class CandidateScoreDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private Candidate candidate;
	private Double score;
	
	
	public Candidate getCandidate() {
		return candidate;
	}
	
	public void setCandidate(Candidate candidate) {
		this.candidate = candidate;
	}
	
	public Double getScore() {
		return score;
	}
	
	public void setScore(Double score) {
		this.score = score;
	}
	
	public static CandidateScoreDTO mapToDTO(CandidatePositionScore cps) {
		CandidateScoreDTO dto = new CandidateScoreDTO();
		dto.setCandidate(cps.getCandidate());
		dto.setScore(cps.getScore());
		
		return dto;
	}
	
	public static CandidatePositionScore mapToObject(Position p, CandidateScoreDTO dto) {
		CandidatePositionScore cps = new CandidatePositionScore();
		cps.setPosition(p);
		cps.setCandidate(cps.getCandidate());
		cps.setScore(dto.getScore());
		
		return cps;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((candidate == null) ? 0 : candidate.hashCode());
		result = prime * result + ((score == null) ? 0 : score.hashCode());
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
		CandidateScoreDTO other = (CandidateScoreDTO) obj;
		if (candidate == null) {
			if (other.candidate != null)
				return false;
		} else if (!candidate.equals(other.candidate))
			return false;
		if (score == null) {
			return other.score == null;
		} else return score.equals(other.score);
	}
}
