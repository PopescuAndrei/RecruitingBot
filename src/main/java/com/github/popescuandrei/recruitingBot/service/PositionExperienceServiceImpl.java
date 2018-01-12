package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.github.popescuandrei.recruitingBot.domain.PositionExperience;
import com.github.popescuandrei.recruitingBot.repository.BaseRepository;
import com.github.popescuandrei.recruitingBot.repository.PositionExperienceRepository;

@Service
@Qualifier("positionExperienceService")
public class PositionExperienceServiceImpl extends EntityServiceImpl<PositionExperience> implements PositionExperienceService{

	@Autowired
	@Qualifier("positionExperienceRepository")
	private PositionExperienceRepository positionExperienceRepository;
	
	public PositionExperienceServiceImpl(BaseRepository<PositionExperience, Long> repository) {
		super(repository);
	}
	
	public List<PositionExperience> findAllByPositionId(Long positionId) {
		return positionExperienceRepository.findAllByPositionId(positionId);
	}

	@Override
	public PositionExperience findByTitleAndPositionId(String title, Long positionId) {
		return positionExperienceRepository.findByTitleAndPositionId(title, positionId);
	}
	
    @PostConstruct
    @Override
    protected void init() {
        super.init();
    }
}

