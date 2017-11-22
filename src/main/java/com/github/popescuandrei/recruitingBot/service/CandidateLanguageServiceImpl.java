package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.github.popescuandrei.recruitingBot.domain.CandidateLanguage;
import com.github.popescuandrei.recruitingBot.repository.BaseRepository;
import com.github.popescuandrei.recruitingBot.repository.CandidateLanguageRepository;

@Service
@Qualifier("candidateLanguageService")
public class CandidateLanguageServiceImpl extends EntityServiceImpl<CandidateLanguage> implements CandidateLanguageService {

	@Autowired
	@Qualifier("candidateLanguageRepository")
	private CandidateLanguageRepository candidateLanguageRepository;
	
	public CandidateLanguageServiceImpl(BaseRepository<CandidateLanguage, Long> repository) {
		super(repository);
	}
	
	@Override
	public List<CandidateLanguage> findAllByCandidateId(Long candidateId) {
		return candidateLanguageRepository.findAllByCandidateId(candidateId);
	}

    @PostConstruct
    @Override
    protected void init() {
        super.init();
    }
}
