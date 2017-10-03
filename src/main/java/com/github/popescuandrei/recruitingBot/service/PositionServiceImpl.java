package com.github.popescuandrei.recruitingBot.service;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.github.popescuandrei.recruitingBot.domain.Position;
import com.github.popescuandrei.recruitingBot.repository.BaseRepository;
import com.github.popescuandrei.recruitingBot.repository.PositionRepository;

@Service
@Qualifier("positionService")
public class PositionServiceImpl extends EntityServiceImpl<Position> implements PositionService {

	@Autowired
	@Qualifier("positionRepository")
	private PositionRepository interviewProgressRepository;
	
	public PositionServiceImpl(BaseRepository<Position, Long> repository) {
		super(repository);
	}
	
    @PostConstruct
    @Override
    protected void init() {
        super.init();
    }

}
