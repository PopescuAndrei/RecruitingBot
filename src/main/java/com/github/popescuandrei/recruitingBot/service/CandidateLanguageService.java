package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import com.github.popescuandrei.recruitingBot.domain.CandidateLanguage;

public interface CandidateLanguageService extends EntityService<CandidateLanguage> {

	/**
	 * Method for retrieving a list of {@link CandidateLangauge} corresponding to
	 * the {@link Candidate} with the candidateId
	 * @param candidateId
	 * @return
	 */
	List<CandidateLanguage> findAllByCandidateId(Long candidateId);
}
