package com.github.popescuandrei.recruitingBot.domain;

import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.LANGUAGE;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.LANGUAGE_SEQ;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.MESSAGE;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.SEQ_GEN;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import com.github.popescuandrei.recruitingBot.domain.support.BaseEntity;

@Entity
@Table(name = LANGUAGE)
public class Language extends BaseEntity {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@SequenceGenerator(name = SEQ_GEN, sequenceName = LANGUAGE_SEQ)
	private Long id;
	
	@Size(max = 50)
	@Column(name = MESSAGE, length = 50)
	private String name;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public void update(BaseEntity entity) {
		throw new UnsupportedOperationException("Language cannot be updated");
	}
}
