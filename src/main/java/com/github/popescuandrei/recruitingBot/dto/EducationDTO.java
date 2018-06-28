package com.github.popescuandrei.recruitingBot.dto;

import java.io.Serializable;
import java.util.Date;

import com.github.popescuandrei.recruitingBot.domain.Candidate;
import com.github.popescuandrei.recruitingBot.domain.CandidateEducation;

/**
 * {@code CandidateEducation}'s DTO
 * @author epopean
 */
public class EducationDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private String institution;
	private String major;
	private Date periodFrom;
	private Date periodTo;
	private Double grade;
	
	public String getInstitution() {
		return institution;
	}
	
	public void setInstitution(String institution) {
		this.institution = institution;
	}
	
	public String getMajor() {
		return major;
	}
	
	public void setMajor(String major) {
		this.major = major;
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
	
	public Double getGrade() {
		return grade;
	}
	
	public void setGrade(Double grade) {
		this.grade = grade;
	}

	public static CandidateEducation mapToObject(Candidate candidate, EducationDTO dto) {
		CandidateEducation ce = new CandidateEducation();
		ce.setCandidate(candidate);
		ce.setInstitution(dto.getInstitution());
		ce.setMajor(dto.getMajor());
		ce.setPeriodFrom(dto.getPeriodFrom());
		ce.setPeriodTo(dto.getPeriodTo());
		ce.setGrade(dto.getGrade());
		
		return ce;
	}
	
	public static EducationDTO mapToDTO(CandidateEducation candidateEducation) {
		EducationDTO dto = new EducationDTO();
		dto.setInstitution(candidateEducation.getInstitution());
		dto.setMajor(candidateEducation.getMajor());
		dto.setPeriodFrom(candidateEducation.getPeriodFrom());
		dto.setPeriodTo(candidateEducation.getPeriodTo());
		dto.setGrade(candidateEducation.getGrade());
		
		return dto;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((grade == null) ? 0 : grade.hashCode());
		result = prime * result + ((institution == null) ? 0 : institution.hashCode());
		result = prime * result + ((major == null) ? 0 : major.hashCode());
		result = prime * result + ((periodFrom == null) ? 0 : periodFrom.hashCode());
		result = prime * result + ((periodTo == null) ? 0 : periodTo.hashCode());
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
		EducationDTO other = (EducationDTO) obj;
		if (grade == null) {
			if (other.grade != null)
				return false;
		} else if (!grade.equals(other.grade))
			return false;
		if (institution == null) {
			if (other.institution != null)
				return false;
		} else if (!institution.equals(other.institution))
			return false;
		if (major == null) {
			if (other.major != null)
				return false;
		} else if (!major.equals(other.major))
			return false;
		if (periodFrom == null) {
			if (other.periodFrom != null)
				return false;
		} else if (!periodFrom.equals(other.periodFrom))
			return false;
		if (periodTo == null) {
			return other.periodTo == null;
		} else return periodTo.equals(other.periodTo);
	}
}
