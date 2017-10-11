package com.github.popescuandrei.recruitingBot.domain;

import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.POSITION;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.QUERY;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.QUESTION;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.github.popescuandrei.recruitingBot.domain.support.BaseEntity;

@Entity
@Table(name = QUESTION)
public class Question extends BaseEntity {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	@Size(max = 100)
	@Column(name = QUERY, length = 50)
	private String query;
	
	@NotNull
	@Column(name = POSITION)
	private Long position;
	
	@Override
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getQuery() {
		return query;
	}

	public void setQuery(String query) {
		this.query = query;
	}

	public Long getPosition() {
		return position;
	}

	public void setPosition(Long position) {
		this.position = position;
	}
	
	@Override
	public void update(BaseEntity entity) {
		if (!(entity instanceof Question)) {
			throw new IllegalArgumentException("entity should be a Question");
		}
		
		Question question = (Question) entity;
		setQuery(question.getQuery());
		setPosition(question.getPosition());
	}

	@Override
	public String toString() {
		return "Question [id=" + id + ", query=" + query + ", position=" + position + "]";
	}
}
