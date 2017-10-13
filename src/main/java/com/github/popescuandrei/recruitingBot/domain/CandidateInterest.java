package com.github.popescuandrei.recruitingBot.domain;

import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.CANDIDATE_ID;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.CANDIDATE_INTEREST;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.NAME;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.github.popescuandrei.recruitingBot.domain.support.BaseEntity;

@Entity
@Table(name = CANDIDATE_INTEREST)
public class CandidateInterest extends BaseEntity {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotNull
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = CANDIDATE_ID, nullable = false)
	private Candidate candidate;
	
	@Size(max = 100)
	@Column(name = NAME, length = 100)
	private String name;

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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public void update(BaseEntity entity) {
		if(!(entity instanceof CandidateInterest)) {
			throw new IllegalArgumentException("entity should be of CandidateInterest type");
		}
		
		CandidateInterest ci = (CandidateInterest) entity;
		setCandidate(ci.getCandidate());
		setName(ci.getName());
	}

	@Override
	public String toString() {
		return "CandidateInterest [id=" + id + ", candidate=" + candidate + ", name=" + name + "]";
	}
}
