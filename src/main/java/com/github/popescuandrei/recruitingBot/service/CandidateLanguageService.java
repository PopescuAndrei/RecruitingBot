package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import com.github.popescuandrei.recruitingBot.domain.CandidateLanguage;

public interface CandidateLanguageService extends EntityService<CandidateLanguage> {

	List<CandidateLanguage> findAllByCandidateId(Long candidateId);
}
