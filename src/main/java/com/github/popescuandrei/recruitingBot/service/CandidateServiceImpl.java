package com.github.popescuandrei.recruitingBot.service;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.github.popescuandrei.recruitingBot.domain.Candidate;
import com.github.popescuandrei.recruitingBot.repository.BaseRepository;
import com.github.popescuandrei.recruitingBot.repository.CandidateRepository;

@Service
@Qualifier("candidateService")
public class CandidateServiceImpl extends EntityServiceImpl<Candidate> implements CandidateService {

	@Autowired
	@Qualifier("candidateRepository")
	private CandidateRepository candidateRepository;
	
	public CandidateServiceImpl(BaseRepository<Candidate, Long> repository) {
		super(repository);
	}

	@Override
	public Candidate findByFacebookUuid(String facebookUuid) {
		return candidateRepository.findByFacebookUuid(facebookUuid);
	}
	
    @PostConstruct
    @Override
    protected void init() {
        super.init();
    }
}
