package com.github.popescuandrei.recruitingBot.service;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.github.popescuandrei.recruitingBot.domain.PositionSkill;
import com.github.popescuandrei.recruitingBot.repository.BaseRepository;
import com.github.popescuandrei.recruitingBot.repository.PositionSkillRepository;

@Service
@Qualifier("positionSkillService")
public class PositionSkillServiceImpl extends EntityServiceImpl<PositionSkill> implements PositionSkillService {

	@Autowired
	@Qualifier("positionSkillRepository")
	private PositionSkillRepository positionSkillRepository;
	
	public PositionSkillServiceImpl(BaseRepository<PositionSkill, Long> repository) {
		super(repository);
	}
	
    @PostConstruct
    @Override
    protected void init() {
        super.init();
    }

}
