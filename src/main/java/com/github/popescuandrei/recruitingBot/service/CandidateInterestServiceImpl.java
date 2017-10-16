package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.github.popescuandrei.recruitingBot.domain.CandidateInterest;
import com.github.popescuandrei.recruitingBot.repository.BaseRepository;
import com.github.popescuandrei.recruitingBot.repository.CandidateInterestRepository;

@Service
@Qualifier("candidateInterestService")
public class CandidateInterestServiceImpl extends EntityServiceImpl<CandidateInterest> implements CandidateInterestService {

	@Autowired
	@Qualifier("candidateInterestRepository")
	private CandidateInterestRepository candidateInterestRepository;
	
	public CandidateInterestServiceImpl(BaseRepository<CandidateInterest, Long> repository) {
		super(repository);
	}
	
	public 	List<CandidateInterest> findAllByCandidateId(Long candidateId) {
		return candidateInterestRepository.findAllByCandidateId(candidateId);
	}
	
    @PostConstruct
    @Override
    protected void init() {
        super.init();
    }

}
