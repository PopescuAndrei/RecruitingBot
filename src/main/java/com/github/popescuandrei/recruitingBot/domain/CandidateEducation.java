package com.github.popescuandrei.recruitingBot.domain;

import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.CANDIDATE_EDUCATION;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.CANDIDATE_ID;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.GRADE;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.INSTITUTION;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.MAJOR;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.PERIOD_FROM;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.PERIOD_TO;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.github.popescuandrei.recruitingBot.domain.support.BaseEntity;

@Entity
@Table(name = CANDIDATE_EDUCATION)
public class CandidateEducation extends BaseEntity {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = CANDIDATE_ID, nullable = false)
	private Candidate candidate;
	
	@Size(max = 100)
	@Column(name = INSTITUTION, length = 100)
	private String institution;
	
	@Size(max = 100)
	@Column(name = MAJOR, length = 100)
	private String major;
	
	@Column(name = PERIOD_FROM)
	@Temporal(TemporalType.TIMESTAMP)
	private Date periodFrom;
	
	@Column(name = PERIOD_TO)
	@Temporal(TemporalType.TIMESTAMP)
	private Date periodTo;
	
	@Column(name = GRADE)
	private Double grade;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Candidate getCandidate() {
		return candidate;
	}

	public void setCandidate(Candidate candidate) {
		this.candidate = candidate;
	}

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

	@Override
	public void update(BaseEntity entity) {
		if (!(entity instanceof CandidateEducation)) {
			throw new IllegalArgumentException("Entity should be a CandidateEducation");
		}
		
		CandidateEducation ce = (CandidateEducation) entity;
		setCandidate(ce.getCandidate());
		setInstitution(ce.getInstitution());
		setMajor(ce.getMajor());
		setPeriodFrom(ce.getPeriodFrom());
		setPeriodTo(ce.getPeriodTo());
		setGrade(ce.getGrade());
	}

	@Override
	public String toString() {
		return "CandidateEducation [id=" + id + ", candidate=" + candidate + ", institution=" + institution + ", major=" + major + ", periodFrom=" + periodFrom
				+ ", periodTo=" + periodTo + ", grade=" + grade + "]";
	}
}
