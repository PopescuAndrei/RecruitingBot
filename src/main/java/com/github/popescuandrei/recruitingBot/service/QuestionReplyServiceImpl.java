package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.github.popescuandrei.recruitingBot.domain.QuestionReply;
import com.github.popescuandrei.recruitingBot.repository.BaseRepository;
import com.github.popescuandrei.recruitingBot.repository.QuestionReplyRepository;

@Service
@Qualifier("questionReplyService")
public class QuestionReplyServiceImpl extends EntityServiceImpl<QuestionReply> implements QuestionReplyService {

	@Autowired
	@Qualifier("questionReplyRepository")
	private QuestionReplyRepository questionReplyRepository;
	
	public QuestionReplyServiceImpl(BaseRepository<QuestionReply, Long> repository) {
		super(repository);
	}
	
	public List<QuestionReply> findAllByQuestionId(Long questionId) {
		return questionReplyRepository.findAllByQuestionId(questionId);
	}
	
    @PostConstruct
    @Override
    protected void init() {
        super.init();
    }

}
