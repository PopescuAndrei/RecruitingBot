package com.github.popescuandrei.recruitingBot.dto;

import java.io.Serializable;

import com.github.popescuandrei.recruitingBot.domain.Candidate;
import com.github.popescuandrei.recruitingBot.domain.CandidateLanguage;
import com.github.popescuandrei.recruitingBot.domain.Language;

/**
 * {@code CandidateLanguage}'s DTO
 * @author epopean
 */
public class CandidateLanguageDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private String name;
	private Long understanding;
	private Long speaking;
	private Long writing;
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public static CandidateLanguage mapToObject(Candidate candidate, Language language, CandidateLanguageDTO dto) {
		CandidateLanguage cl = new CandidateLanguage();
		cl.setCandidate(candidate);
		cl.setLanguage(language);
		cl.setSpeaking(dto.getSpeaking());
		cl.setUnderstanding(dto.getUnderstanding());
		cl.setWriting(dto.getWriting());
		
		return cl;
	}
	
	public static CandidateLanguageDTO mapToDTO(CandidateLanguage candidateLanguage) {
		CandidateLanguageDTO dto = new CandidateLanguageDTO();
		dto.setName(candidateLanguage.getLanguage().getName());
		dto.setSpeaking(candidateLanguage.getSpeaking());
		dto.setWriting(candidateLanguage.getWriting());
		dto.setUnderstanding(candidateLanguage.getUnderstanding());
		
		return dto;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((speaking == null) ? 0 : speaking.hashCode());
		result = prime * result + ((understanding == null) ? 0 : understanding.hashCode());
		result = prime * result + ((writing == null) ? 0 : writing.hashCode());
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
		CandidateLanguageDTO other = (CandidateLanguageDTO) obj;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (speaking == null) {
			if (other.speaking != null)
				return false;
		} else if (!speaking.equals(other.speaking))
			return false;
		if (understanding == null) {
			if (other.understanding != null)
				return false;
		} else if (!understanding.equals(other.understanding))
			return false;
		if (writing == null) {
			if (other.writing != null)
				return false;
		} else if (!writing.equals(other.writing))
			return false;
		return true;
	}
}
