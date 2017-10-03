package com.github.popescuandrei.recruitingBot.service;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.github.popescuandrei.recruitingBot.domain.Skill;
import com.github.popescuandrei.recruitingBot.repository.BaseRepository;
import com.github.popescuandrei.recruitingBot.repository.SkillRepository;

@Service
@Qualifier("skillService")
public class SkillServiceImpl extends EntityServiceImpl<Skill> implements SkillService {

	@Autowired
	@Qualifier("skillRepository")
	private SkillRepository skillRepository;
	
	public SkillServiceImpl(BaseRepository<Skill, Long> repository) {
		super(repository);
	}
	
    @PostConstruct
    @Override
    protected void init() {
        super.init();
    }

}
