package com.github.popescuandrei.recruitingBot.domain;

import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.CANDIDATE_ID;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.CANDIDATE_LANGUAGE;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.LANGUAGE_ID;
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
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import com.github.popescuandrei.recruitingBot.domain.support.BaseEntity;

@Entity
@Table(name = CANDIDATE_LANGUAGE)
public class CandidateLanguage extends BaseEntity {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotNull
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = CANDIDATE_ID, nullable = false)
	private Candidate candidate;
	
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = LANGUAGE_ID, nullable = false)
	private Language language;
	
	@NotNull
	@Min(1)
	@Max(100)
	@Column(name = UNDERSTANDING)
	private Long understanding;
	
	@NotNull
	@Min(1)
	@Max(100)
	@Column(name = SPEAKING)
	private Long speaking;
	
	@NotNull
	@Min(1)
	@Max(100)
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

	private Double getLanguageLevel() {
		return (double) ((writing + speaking + understanding)/3);
	}
	
	public String getLanguageLevelAsString() {
		Double languageLevel = this.getLanguageLevel();
		
		if (languageLevel > 0 && languageLevel <= 25) {
			return "Beginner";
		} else if (languageLevel > 25 && languageLevel <= 50) {
			return "Intermediate";
		} else if (languageLevel > 50 && languageLevel <= 75) {
			return "Very Good";
		} else if (languageLevel > 75){
			return "Expert";
		}
		
		return "NOT RATED";
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

	@Override
	public String toString() {
		return "CandidateLanguage [id=" + id + ", candidate=" + candidate + ", language=" + language + ", understanding=" + understanding + ", speaking="
				+ speaking + ", writing=" + writing + "]";
	}
}
