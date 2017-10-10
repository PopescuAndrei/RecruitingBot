package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.github.popescuandrei.recruitingBot.domain.CandidatePositionScore;
import com.github.popescuandrei.recruitingBot.repository.BaseRepository;
import com.github.popescuandrei.recruitingBot.repository.CandidatePositionScoreRepository;

@Service
@Qualifier("candidatePositionScoreService")
public class CandidatePositionScoreServiceImpl extends EntityServiceImpl<CandidatePositionScore> implements CandidatePositionScoreService {

	@Autowired
	@Qualifier("candidatePositionScoreRepository")
	private CandidatePositionScoreRepository candidatePositionScoreRepository;
	
	public CandidatePositionScoreServiceImpl(BaseRepository<CandidatePositionScore, Long> repository) {
		super(repository);
	}

	@Override
	public CandidatePositionScore findByCandidateIdAndPositionId(Long candidateId, Long positionId) {
		return candidatePositionScoreRepository.findByCandidateIdAndPositionId(candidateId, positionId);
	}

	@Override
	public List<CandidatePositionScore> findAllByCandidateId(Long candidateId) {
		return candidatePositionScoreRepository.findAllByCandidateId(candidateId);
	}

	@Override
	public List<CandidatePositionScore> findAllByPositionId(Long positionId) {
		return candidatePositionScoreRepository.findAllByPositionId(positionId);
	}
	
	@Override
	@Transactional
	public void saveAll(List<CandidatePositionScore> scores) {
		candidatePositionScoreRepository.save(scores);
	}
	
    @PostConstruct
    @Override
    protected void init() {
        super.init();
    }
}
