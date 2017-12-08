package com.github.popescuandrei.recruitingBot.dto;

import java.io.Serializable;
import java.util.Date;

import com.github.popescuandrei.recruitingBot.domain.Candidate;
import com.github.popescuandrei.recruitingBot.domain.CandidateExperience;

/**
 * {@code CandidateExperience}'s DTO
 * @author epopean
 */
public class ExperienceDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private String title;
	private String company;
	private Date periodFrom;
	private Date periodTo;
	
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getCompany() {
		return company;
	}
	
	public void setCompany(String company) {
		this.company = company;
	}
	
	public Date getPeriodFrom() {
		return periodFrom;
	}
	
	public void setPeriodFrom(Date periodFrom) {
		this.periodFrom = periodFrom;
	}
	
	public Date getPeriodTo() {
		return periodTo;
	}
	
	public void setPeriodTo(Date periodTo) {
		this.periodTo = periodTo;
	}

	public static CandidateExperience mapToObject(Candidate candidate, ExperienceDTO dto) {
		CandidateExperience ce = new CandidateExperience();
		ce.setCandidate(candidate);
		ce.setCompany(dto.getCompany());
		ce.setTitle(dto.getTitle());
		ce.setPeriodFrom(dto.getPeriodFrom());
		ce.setPeriodTo(dto.getPeriodTo());
		
		return ce;
	}
	
	public static ExperienceDTO mapToDTO(CandidateExperience ce) {
		ExperienceDTO dto = new ExperienceDTO();
		dto.setCompany(ce.getCompany());
		dto.setTitle(ce.getTitle());
		dto.setPeriodFrom(ce.getPeriodFrom());
		dto.setPeriodTo(ce.getPeriodTo());
		
		return dto;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((company == null) ? 0 : company.hashCode());
		result = prime * result + ((periodFrom == null) ? 0 : periodFrom.hashCode());
		result = prime * result + ((periodTo == null) ? 0 : periodTo.hashCode());
		result = prime * result + ((title == null) ? 0 : title.hashCode());
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
		ExperienceDTO other = (ExperienceDTO) obj;
		if (company == null) {
			if (other.company != null)
				return false;
		} else if (!company.equals(other.company))
			return false;
		if (periodFrom == null) {
			if (other.periodFrom != null)
				return false;
		} else if (!periodFrom.equals(other.periodFrom))
			return false;
		if (periodTo == null) {
			if (other.periodTo != null)
				return false;
		} else if (!periodTo.equals(other.periodTo))
			return false;
		if (title == null) {
			if (other.title != null)
				return false;
		} else if (!title.equals(other.title))
			return false;
		return true;
	}
}
