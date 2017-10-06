package com.github.popescuandrei.recruitingBot.domain;

import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.CANDIDATE_EXPERIENCE;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.CANDIDATE_EXPERIENCE_SEQ;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.CANDIDATE_ID;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.COMPANY;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.DESCRIPTION;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.PERIOD_FROM;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.PERIOD_TO;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.SEQ_GEN;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.TITLE;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.github.popescuandrei.recruitingBot.domain.support.BaseEntity;

@Entity
@Table(name = CANDIDATE_EXPERIENCE)
public class CandidateExperience extends BaseEntity {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@SequenceGenerator(name = SEQ_GEN, sequenceName = CANDIDATE_EXPERIENCE_SEQ)
	private Long id;
	
	@NotNull
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = CANDIDATE_ID, nullable = false)
	private Candidate candidate;
	
	@Size(max = 100)
	@Column(name = TITLE, length = 100)
	private String title;
	
	@Size(max = 100)
	@Column(name = COMPANY, length = 100)
	private String company;
	
	@Size(max = 255)
	@Column(name = DESCRIPTION, length = 255)
	private String description;
	
	@Column(name = PERIOD_FROM)
	@Temporal(TemporalType.TIMESTAMP)
	private Date periodFrom;
	
	@Column(name = PERIOD_TO)
	@Temporal(TemporalType.TIMESTAMP)
	private Date periodTo;

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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
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

	@Override
	public void update(BaseEntity entity) {
		if (!(entity instanceof CandidateExperience)) {
			throw new IllegalArgumentException("Entity should be of type CandidateExperience");
		}
		
		CandidateExperience ce = (CandidateExperience) entity;
		setCandidate(ce.getCandidate());
		setTitle(ce.getTitle());
		setCompany(ce.getCompany());
		setDescription(ce.getDescription());
		setPeriodFrom(ce.getPeriodFrom());
		setPeriodTo(ce.getPeriodTo());
	}
}
