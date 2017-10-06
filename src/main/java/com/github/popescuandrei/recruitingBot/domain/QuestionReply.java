package com.github.popescuandrei.recruitingBot.domain;

import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.QUESTION_ID;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.REPLY;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.REPLY_MESSAGE;

import java.util.ArrayList;
import java.util.Random;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.github.popescuandrei.recruitingBot.domain.support.BaseEntity;

@Entity
@Table(name = REPLY)
public class QuestionReply extends BaseEntity{

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	@Size(max = 100)
	@Column(name = REPLY_MESSAGE, length = 50)
	private String replyMessage;
	
	@NotNull
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = QUESTION_ID, nullable = false)
    private Question question;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getReplyMessage() {
		return replyMessage;
	}

	public void setReplyMessage(String replyMessage) {
		this.replyMessage = replyMessage;
	}

	public Question getQuestion() {
		return question;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}

	@Override
	public void update(BaseEntity entity) {
		if (!(entity instanceof QuestionReply)) {
			throw new IllegalArgumentException("entity should be of type QuestionReply");
		}
		
		QuestionReply qr = (QuestionReply) entity;
		setReplyMessage(qr.getReplyMessage());
	}
	
	public static QuestionReply any(ArrayList<QuestionReply> replyList) {
		int index = new Random().nextInt(replyList.size());
		return replyList.get(index);
	}
}
