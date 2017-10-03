package com.github.popescuandrei.recruitingBot.service;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.github.popescuandrei.recruitingBot.domain.CandidateExperience;
import com.github.popescuandrei.recruitingBot.repository.BaseRepository;
import com.github.popescuandrei.recruitingBot.repository.CandidateExperienceRepository;

@Service
@Qualifier("candidateExperienceService")
public class CandidateExperienceServiceImpl extends EntityServiceImpl<CandidateExperience> implements CandidateExperienceService {

	@Autowired
	@Qualifier("candidateExperienceRepository")
	private CandidateExperienceRepository candidateExperienceRepository;
	
	public CandidateExperienceServiceImpl(BaseRepository<CandidateExperience, Long> repository) {
		super(repository);
	}
	
    @PostConstruct
    @Override
    protected void init() {
        super.init();
    }

}
