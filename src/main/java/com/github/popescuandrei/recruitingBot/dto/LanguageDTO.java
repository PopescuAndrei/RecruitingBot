package com.github.popescuandrei.recruitingBot.dto;

import com.github.popescuandrei.recruitingBot.domain.Candidate;
import com.github.popescuandrei.recruitingBot.domain.CandidateLanguage;
import com.github.popescuandrei.recruitingBot.domain.Language;

public class LanguageDTO {
	
	//candidate language without candidate
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

	public static CandidateLanguage mapToObject(Candidate candidate, Language language, LanguageDTO dto) {
		CandidateLanguage cl = new CandidateLanguage();
		cl.setCandidate(candidate);
		cl.setLanguage(language);
		cl.setSpeaking(dto.getSpeaking());
		cl.setUnderstanding(dto.getUnderstanding());
		cl.setWriting(dto.getWriting());
		
		return cl;
	}
	
	public static LanguageDTO mapToDTO(CandidateLanguage candidateLanguage) {
		LanguageDTO dto = new LanguageDTO();
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
}
