package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.github.popescuandrei.recruitingBot.domain.UserCandidateComment;
import com.github.popescuandrei.recruitingBot.repository.BaseRepository;
import com.github.popescuandrei.recruitingBot.repository.UserCandidateCommentRepository;

@Service
@Qualifier("userCandidateCommentService")
public class UserCandidateCommentServiceImpl extends EntityServiceImpl<UserCandidateComment> implements UserCandidateCommentService {

	@Autowired
	@Qualifier("userCandidateCommentRepository")
	private UserCandidateCommentRepository userCandidateCommentRepository;
	
	public UserCandidateCommentServiceImpl(BaseRepository<UserCandidateComment, Long> repository) {
		super(repository);
	}
	
	public List<UserCandidateComment> findAllByCandidateId(Long candidateId) {
		return userCandidateCommentRepository.findAllByCandidateId(candidateId);
	}
	
    @PostConstruct
    @Override
    protected void init() {
        super.init();
    }

	@Override
	public Long findNumberOfCommentsByCandidateId(Long candidateId) {
		return (long) userCandidateCommentRepository.findAllByCandidateId(candidateId).size();
	}

}
