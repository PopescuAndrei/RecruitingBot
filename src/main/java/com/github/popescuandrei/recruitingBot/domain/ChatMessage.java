package com.github.popescuandrei.recruitingBot.domain;

import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.CANDIDATE_ID;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.CHAT_MESSAGE;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.CHAT_MESSAGE_SEQ;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.CREATION_DATE;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.FROM_ROBOT;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.MESSAGE;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.POSITION;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.SEQ_GEN;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.github.popescuandrei.recruitingBot.domain.support.BaseEntity;

@Entity
@Table(name = CHAT_MESSAGE)
public class ChatMessage extends BaseEntity {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@SequenceGenerator(name = SEQ_GEN, sequenceName = CHAT_MESSAGE_SEQ)
	private Long id;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = CANDIDATE_ID, nullable = false)	
	private Candidate candidate;
	
	@Column(name = FROM_ROBOT, length = 1, nullable = false)
	private Boolean fromRobot;
	
	@NotNull
	@Column(name = POSITION)
	private Long position;
	
	@Size(max = 255)
	@Column(name = MESSAGE, length = 255)
	private String message;
	
	@Column(name = CREATION_DATE)
	@Temporal(TemporalType.TIMESTAMP)
	private Date creationDate;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Candidate getCandidate() {
		return candidate;
	}

	public void setCandidate(Candidate candidate) {
		this.candidate = candidate;
	}

	public Boolean getFromRobot() {
		return fromRobot;
	}

	public void setFromRobot(Boolean fromRobot) {
		this.fromRobot = fromRobot;
	}

	public Long getPosition() {
		return position;
	}

	public void setPosition(Long position) {
		this.position = position;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Date getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}

	@Override
	public void update(BaseEntity entity) {
		throw new UnsupportedOperationException("chat message cannot be updated");
	}
	
	
}
