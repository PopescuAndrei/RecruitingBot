package com.github.popescuandrei.recruitingBot.domain;

import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.CANDIDATE_ID;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.CANDIDATE_SKILL;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.LEVEL;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.SKILL_ID;

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
@Table(name = CANDIDATE_SKILL)
public class CandidateSkill extends BaseEntity {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = SKILL_ID, nullable = false)
	private Skill skill;

	@NotNull
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = CANDIDATE_ID, nullable = false)
	private Candidate candidate;
	
	@NotNull
	@Size(min = 1, max = 100)
	@Column(name = LEVEL)
	private Long level;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Skill getSkill() {
		return skill;
	}

	public void setSkill(Skill skill) {
		this.skill = skill;
	}

	public Candidate getCandidate() {
		return candidate;
	}

	public void setCandidate(Candidate candidate) {
		this.candidate = candidate;
	}

	public Long getLevel() {
		return level;
	}

	public void setLevel(Long level) {
		this.level = level;
	}

	@Override
	public void update(BaseEntity entity) {
		if (!(entity instanceof CandidateSkill)) {
			throw new IllegalArgumentException("Entity should be an instance of CandidateSkill");
		}
		
		CandidateSkill cs = (CandidateSkill) entity;
		setSkill(cs.getSkill());
		setCandidate(cs.getCandidate());
		setLevel(cs.getLevel());
	}
}
