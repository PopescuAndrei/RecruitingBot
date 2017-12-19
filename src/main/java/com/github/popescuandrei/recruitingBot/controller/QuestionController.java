package com.github.popescuandrei.recruitingBot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.github.popescuandrei.recruitingBot.domain.Question;
import com.github.popescuandrei.recruitingBot.domain.QuestionReply;
import com.github.popescuandrei.recruitingBot.service.QuestionReplyService;
import com.github.popescuandrei.recruitingBot.service.QuestionService;

@RestController
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:4200", "https://recruitingmessbot.herokuapp.com"}, maxAge = 3600)
@RequestMapping("/api/questions")
public class QuestionController {

	@Autowired
	@Qualifier("questionService")
	private QuestionService questionService;

	@Autowired
	@Qualifier("questionReplyService")
	private QuestionReplyService questionReplyService;

	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<Question> findAll() {
		List<Question> questions = questionService.findAll();
		return questions;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public @ResponseBody Question findOne(@PathVariable("id") Long id) {
		Question question = questionService.find(id);
		return question;
	}

	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody Question create(@RequestBody Question question) {
		question = questionService.create(question);
		return question;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public @ResponseBody Question delete(@PathVariable("id") Long id) {
		return questionService.delete(id);
	}

	@RequestMapping(value = "/{id}/replies", method = RequestMethod.GET)
	public @ResponseBody List<QuestionReply> findAllRepliesForQuestion(@PathVariable("id") Long id) {
		List<QuestionReply> replies = questionReplyService.findAllByQuestionId(id);
		return replies;
	}

	@RequestMapping(value = "/{id}/replies", method = RequestMethod.POST)
	public @ResponseBody QuestionReply createQuestionReply(@PathVariable("questionId") Long questionId, @RequestBody QuestionReply questionReply) {
		questionReply = questionReplyService.create(questionReply);
		return questionReply;
	}

	@RequestMapping(value = "/{questionId}/replies/{replyId}", method = RequestMethod.DELETE)
	public @ResponseBody QuestionReply deleteQuestionReply(@PathVariable("questionId") Long questionId, @PathVariable("replyId") Long replyId) {
		return questionReplyService.delete(replyId);
	}
}