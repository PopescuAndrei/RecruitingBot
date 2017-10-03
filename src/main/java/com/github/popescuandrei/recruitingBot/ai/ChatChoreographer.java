//package com.github.popescuandrei.recruitingBot.ai;
//
//import static com.github.popescuandrei.recruitingBot.domain.support.Const.BOT_NAME;
//
//import java.util.ArrayList;
//import java.util.Date;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.stereotype.Component;
//
//import com.github.popescuandrei.recruitingBot.domain.Candidate;
//import com.github.popescuandrei.recruitingBot.domain.ChatMessage;
//import com.github.popescuandrei.recruitingBot.domain.InterviewProgress;
//import com.github.popescuandrei.recruitingBot.domain.Question;
//import com.github.popescuandrei.recruitingBot.domain.QuestionReply;
//import com.github.popescuandrei.recruitingBot.domain.support.Const;
//import com.github.popescuandrei.recruitingBot.service.CandidateService;
//import com.github.popescuandrei.recruitingBot.service.ChatMessageService;
//import com.github.popescuandrei.recruitingBot.service.InterviewProgressService;
//import com.github.popescuandrei.recruitingBot.service.QuestionReplyService;
//import com.github.popescuandrei.recruitingBot.service.QuestionService;
//
//@Component
//@Qualifier("chatChoreographer")
//public class ChatChoreographer {
//
//	@Autowired
//	@Qualifier("interviewProgressService")
//	private InterviewProgressService interviewProgressService;
//
//	@Autowired
//	@Qualifier("candidateService")
//	private CandidateService candidateService;
//	
//	@Autowired
//	@Qualifier("chatMessageService")
//	private ChatMessageService chatMessageService;
//	
//	@Autowired
//	@Qualifier("questionService")
//	private QuestionService questionService;
//	
//	@Autowired
//	@Qualifier("questionReplyService")
//	private QuestionReplyService questionReplyService;
//	
////	@Autowired
////	private MessageBuilder messageBuilder;
//	
//	private Question currentQuestion;
//	private Question nextQuestion;
//	private List<QuestionReply> replies;
//	
//	public void onFacebookMessage(Candidate candidate, FacebookMessageModel message) {
//		ChatMessage chatMessage = new ChatMessage();
//		
//	}
//	
//	public QuestionReply onAiMessage(Candidate candidate, AiMessageModel message) {
//		InterviewProgress progress = interviewProgressService.findByCandidate(candidate);
//		
//		// TODO: BIG SWITCH STATEMENT TO SAVE AI-MESSAGE IN DB
//		// PROBABLY PARSE BASED ON @{link Question} currentQuestion
//		
//		// check first for yes or no answers to see if you need to proceed with the next question or wait for more answers
//		// if wait for more answers => send generic reply from a constant array (That's awesome! Anything else?)"
//		
//		// afterwards, process to ask the next question
//		currentQuestion = null;
//		nextQuestion = null;
//		replies = null;
//		if (progress == null ) {
//			nextQuestion = questionService.findByPosition(1);
//		} else {
//			nextQuestion = questionService.findByPosition(progress.getProgress());
//		}
//		
//		if (nextQuestion == null) {
//			
//		}
//		
//		
//		List<QuestionReply> replies = questionReplyService.findAllByQuestion(currentQuestion);
//		QuestionReply selectedReply = QuestionReply.any(replies);
//		
//		// if not first question and not last question => hello reply
//		// if last question => goodbye reply
//		// else randomReply from replies
//		
//		return selectedReply;
//		
//	}
//	
//	private ChatMessage saveCandidateMessage(Candidate candidate, String candidateMessage) {
//		Long nextMessagePosition = chatMessageService.findNextMessagePosition();
//		
//		ChatMessage message = new ChatMessage();
//		message.setCandidate(candidate);
//		message.setMessage(candidateMessage);
//		message.setFromRobot(Boolean.FALSE);
//		message.setPosition(nextMessagePosition);
//		message.setCreationDate(new Date());
//		
//		message = chatMessageService.save(message);
//		
//		return message;
//	}
//	
//	private ChatMessage saveBotMessage(Candidate candidate, String botMessage) {
//		Long nextMessagePosition = chatMessageService.findNextMessagePosition();
//		
//		ChatMessage message = new ChatMessage();
//		message.setCandidate(candidate);
//		message.setMessage(botMessage);
//		message.setFromRobot(Boolean.TRUE);
//		message.setPosition(nextMessagePosition);
//		message.setCreationDate(new Date());
//		
//		message = chatMessageService.save(message);
//		
//		return message;
//	}
//	
//	private QuestionReply helloReply(Candidate candidate) {
//		QuestionReply reply = new QuestionReply();
//		reply.setId(0L);
//		reply.setQuestion(new Question());
//		reply.setReplyMessage("Hello " + candidate.getFirstName() + "! "
//							+ "I'm " + BOT_NAME + ". "
//							+ "Nice to meet you. I'm here to help you find a job and also help our HR department. "
//							+ "Probably you're looking for a job. "
//							+ "Would you like me to show you our available positions and tell me which one is of interest to you?");
//		return reply;
//	}
//	
//	private QuestionReply goodbyeReply(Candidate candidate) {
//		QuestionReply reply = new QuestionReply();
//		reply.setId(0L);
//		reply.setQuestion(new Question());
//		reply.setReplyMessage("Thank you for your time, " + candidate.getFirstName() + "! "
//							+ "My colleagues will check back with you in a couple of days! "
//							+ "Enjoy your time, you did great! "
//							+ "It was nice meeting you!");
//		return reply;
//	}
//}
