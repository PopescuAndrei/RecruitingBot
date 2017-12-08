package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.github.popescuandrei.recruitingBot.domain.UserCandidateLike;
import com.github.popescuandrei.recruitingBot.repository.BaseRepository;
import com.github.popescuandrei.recruitingBot.repository.UserCandidateLikeRepository;

@Service
@Qualifier("userCandidateLikeService")
public class UserCandidateLikeServiceImpl extends EntityServiceImpl<UserCandidateLike> implements UserCandidateLikeService {

	@Autowired
	@Qualifier("userCandidateLikeRepository")
	private UserCandidateLikeRepository userCandidateLikeRepository;
	
	public UserCandidateLikeServiceImpl(BaseRepository<UserCandidateLike, Long> repository) {
		super(repository);
	}
	
    @PostConstruct
    @Override
    protected void init() {
        super.init();
    }

	@Override
	public Long findNumberOfLikesByCandidateId(Long candidateId) {
		Long noLikes = 0l;
		List<UserCandidateLike> likes = userCandidateLikeRepository.findAllByCandidateId(candidateId);
		for(UserCandidateLike like : likes) {
			if(like.getLike().equals(Boolean.TRUE)) {
				noLikes++;
			}
		}
		
		return noLikes;
	}

}
