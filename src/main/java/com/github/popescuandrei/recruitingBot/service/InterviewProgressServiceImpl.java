package com.github.popescuandrei.recruitingBot.service;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.github.popescuandrei.recruitingBot.domain.InterviewProgress;
import com.github.popescuandrei.recruitingBot.repository.BaseRepository;
import com.github.popescuandrei.recruitingBot.repository.InterviewProgressRepository;

@Service
@Qualifier("interviewProgressService")
public class InterviewProgressServiceImpl extends EntityServiceImpl<InterviewProgress> implements InterviewProgressService {

	@Autowired
	@Qualifier("interviewProgressRepository")
	private InterviewProgressRepository interviewProgressRepository;
	
	public InterviewProgressServiceImpl(BaseRepository<InterviewProgress, Long> repository) {
		super(repository);
	}
	
    @PostConstruct
    @Override
    protected void init() {
        super.init();
    }

}
