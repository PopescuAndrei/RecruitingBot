package com.github.popescuandrei.recruitingBot.service;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.github.popescuandrei.recruitingBot.domain.Question;
import com.github.popescuandrei.recruitingBot.repository.BaseRepository;
import com.github.popescuandrei.recruitingBot.repository.QuestionRepository;

@Service
@Qualifier("questionService")
public class QuestionServiceImpl extends EntityServiceImpl<Question> implements QuestionService {

	@Autowired
	@Qualifier("questionRepository")
	private QuestionRepository questionRepository;
	
	public QuestionServiceImpl(BaseRepository<Question, Long> repository) {
		super(repository);
	}
	
	public Question findByPosition(Long position) {
		return questionRepository.findByPosition(position);
	}
	
    @PostConstruct
    @Override
    protected void init() {
        super.init();
    }

}
