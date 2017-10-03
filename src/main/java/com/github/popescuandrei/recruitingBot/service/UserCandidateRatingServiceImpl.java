package com.github.popescuandrei.recruitingBot.service;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.github.popescuandrei.recruitingBot.domain.UserCandidateRating;
import com.github.popescuandrei.recruitingBot.repository.BaseRepository;
import com.github.popescuandrei.recruitingBot.repository.UserCandidateRatingRepository;

@Service
@Qualifier("userCandidateRatingService")
public class UserCandidateRatingServiceImpl extends EntityServiceImpl<UserCandidateRating> implements UserCandidateRatingService {

	@Autowired
	@Qualifier("userCandidateRatingRepository")
	private UserCandidateRatingRepository userCandidateRatingRepository;
	
	public UserCandidateRatingServiceImpl(BaseRepository<UserCandidateRating, Long> repository) {
		super(repository);
	}
	
    @PostConstruct
    @Override
    protected void init() {
        super.init();
    }

}
