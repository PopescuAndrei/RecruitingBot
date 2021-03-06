package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.github.popescuandrei.recruitingBot.domain.CandidateEducation;
import com.github.popescuandrei.recruitingBot.repository.BaseRepository;
import com.github.popescuandrei.recruitingBot.repository.CandidateEducationRepository;

@Service
@Qualifier("candidateEducationService")
public class CandidateEducationServiceImpl extends EntityServiceImpl<CandidateEducation> implements CandidateEducationService {

	@Autowired
	@Qualifier("candidateEducationRepository")
	private CandidateEducationRepository candidateEducationRepository;
	
	public CandidateEducationServiceImpl(BaseRepository<CandidateEducation, Long> repository) {
		super(repository);
	}

	@Override
	public List<CandidateEducation> findAllByCandidateId(Long candidateId) {
		return candidateEducationRepository.findAllByCandidateId(candidateId);
	}

	@PostConstruct
    @Override
    protected void init() {
        super.init();
    }
}
