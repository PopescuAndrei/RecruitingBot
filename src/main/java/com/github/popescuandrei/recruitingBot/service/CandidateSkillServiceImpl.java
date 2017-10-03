package com.github.popescuandrei.recruitingBot.service;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.github.popescuandrei.recruitingBot.domain.CandidateSkill;
import com.github.popescuandrei.recruitingBot.repository.BaseRepository;
import com.github.popescuandrei.recruitingBot.repository.CandidateSkillRepository;

@Service
@Qualifier("candidateSkillService")
public class CandidateSkillServiceImpl extends EntityServiceImpl<CandidateSkill> implements CandidateSkillService {

	@Autowired
	@Qualifier("candidateSkillRepository")
	private CandidateSkillRepository candidateSkillRepository;
	
	public CandidateSkillServiceImpl(BaseRepository<CandidateSkill, Long> repository) {
		super(repository);
	}
	
    @PostConstruct
    @Override
    protected void init() {
        super.init();
    }

}
