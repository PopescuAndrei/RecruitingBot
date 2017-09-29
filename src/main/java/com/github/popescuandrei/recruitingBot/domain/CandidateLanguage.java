package com.github.popescuandrei.recruitingBot.domain;

import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.CANDIDATE_ID;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.CANDIDATE_LANGUAGE;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.SPEAKING;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.UNDERSTANDING;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.WRITING;

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
@Table(name = CANDIDATE_LANGUAGE)
public class CandidateLanguage extends BaseEntity {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = CANDIDATE_ID, nullable = false)
	private Candidate candidate;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = CANDIDATE_ID, nullable = false)
	private Language language;
	
	@NotNull
	@Size(min = 1, max = 100)
	@Column(name = UNDERSTANDING)
	private Long understanding;
	
	@NotNull
	@Size(min = 1, max = 100)
	@Column(name = SPEAKING)
	private Long speaking;
	
	@NotNull
	@Size(min = 1, max = 100)
	@Column(name = WRITING)
	private Long writing;

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

	public Language getLanguage() {
		return language;
	}

	public void setLanguage(Language language) {
		this.language = language;
	}

	public Long getUnderstanding() {
		return understanding;
	}

	public void setUnderstanding(Long understanding) {
		this.understanding = understanding;
	}

	public Long getSpeaking() {
		return speaking;
	}

	public void setSpeaking(Long speaking) {
		this.speaking = speaking;
	}

	public Long getWriting() {
		return writing;
	}

	public void setWriting(Long writing) {
		this.writing = writing;
	}

	@Override
	public void update(BaseEntity entity) {
		if (!(entity instanceof CandidateLanguage)) {
			throw new IllegalArgumentException("Entity should be a CandidateLanguage");
		}
		
		CandidateLanguage cl = (CandidateLanguage) entity;
		setCandidate(cl.getCandidate());
		setLanguage(cl.getLanguage());
		setUnderstanding(cl.getUnderstanding());
		setSpeaking(cl.getSpeaking());
		setWriting(cl.getWriting());
	}
}