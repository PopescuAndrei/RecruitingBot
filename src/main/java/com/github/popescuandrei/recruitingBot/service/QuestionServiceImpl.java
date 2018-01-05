package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.github.popescuandrei.recruitingBot.domain.Question;
import com.github.popescuandrei.recruitingBot.domain.QuestionReply;
import com.github.popescuandrei.recruitingBot.repository.BaseRepository;
import com.github.popescuandrei.recruitingBot.repository.QuestionReplyRepository;
import com.github.popescuandrei.recruitingBot.repository.QuestionRepository;

@Service
@Qualifier("questionService")
public class QuestionServiceImpl extends EntityServiceImpl<Question> implements QuestionService {

	@Autowired
	@Qualifier("questionRepository")
	private QuestionRepository questionRepository;
	
	@Autowired
	@Qualifier("questionReplyRepository")
	private QuestionReplyRepository questionReplyRepository;
	
	public QuestionServiceImpl(BaseRepository<Question, Long> repository) {
		super(repository);
	}
	
	public Question findByPosition(Long position) {
		return questionRepository.findByPosition(position);
	}


	@Override
	public void deleteOldQuestions(List<Question> newQuestions) {
		List<Question> existingQuestions = questionRepository.findAll();
		
		existingQuestions
			.stream()
			.forEach(q -> {
				if(!newQuestions.contains(q)) {
					List<QuestionReply> replies = questionReplyRepository.findAllByQuestionId(q.getId());
					
					replies
						.stream()
						.forEach(r -> questionReplyRepository.delete(r.getId()));
					
					questionRepository.delete(q.getId());
				}
			});
	}
	
    @PostConstruct
    @Override
    protected void init() {
        super.init();
    }

}
