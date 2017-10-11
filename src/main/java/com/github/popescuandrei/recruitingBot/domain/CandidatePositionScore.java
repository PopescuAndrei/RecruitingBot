package com.github.popescuandrei.recruitingBot.domain;

import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.CANDIDATE_ID;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.POSITION_ID;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.SCORE;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.CANDIDATE_POSITION_SCORE;

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
@Table(name = CANDIDATE_POSITION_SCORE)
public class CandidatePositionScore extends BaseEntity {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;


	@NotNull
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = CANDIDATE_ID, nullable = false)
	private Candidate candidate;
	
	@NotNull
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = POSITION_ID, nullable = false)
	private Position position;

	@Size(min = 0, max = 100)
	@Column(name = SCORE)
	private Double score;
	
	public CandidatePositionScore() {
		this(null);
	}
	
	public CandidatePositionScore(Long id) {
		super();
		this.id = id;
	}
	
	public CandidatePositionScore(Long id, Candidate candidate, Position position, Double score) {
		this(id);
		this.candidate = candidate;
		this.position = position;
		this.score = score;
	}

	public CandidatePositionScore(Candidate candidate, Position position, Double score) {
		this(null);
		this.candidate = candidate;
		this.position = position;
		this.score = score;
	}

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

	public Position getPosition() {
		return position;
	}

	public void setPosition(Position position) {
		this.position = position;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}

	@Override
	public void update(BaseEntity entity) {
		throw new UnsupportedOperationException("Entity should not be updated");
	}

	@Override
	public String toString() {
		return "CandidatePositionScore [id=" + id + ", candidate=" + candidate + ", position=" + position + ", score=" + score + "]";
	}
}