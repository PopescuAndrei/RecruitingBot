package com.github.popescuandrei.recruitingBot.domain;

import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.LANGUAGE_ID;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.LEVEL;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.POSITION_ID;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.POSITION_LANGUAGE;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.github.popescuandrei.recruitingBot.domain.support.BaseEntity;

@Entity
@Table(name = POSITION_LANGUAGE)
public class PositionLanguage extends BaseEntity {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotNull
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = POSITION_ID, nullable = false)
	private Position position;
	
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = LANGUAGE_ID, nullable = false)
	private Language language;
	
	@Size(max = 500)
	@Column(name = LEVEL, length = 500)
	private String level;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Position getPosition() {
		return position;
	}

	public void setPosition(Position position) {
		this.position = position;
	}

	public Language getLanguage() {
		return language;
	}

	public void setLanguage(Language language) {
		this.language = language;
	}

	public String getLevel() {
		return level;
	}
	
	public void setLevel(String level) {
		this.level = level;
	}
	
	@Override
	public void update(BaseEntity entity) {
		if (!(entity instanceof PositionLanguage)) {
			throw new IllegalArgumentException("Entity should be a PositionLanguage");
		}
		
		PositionLanguage pl = (PositionLanguage) entity;
		setPosition(pl.getPosition());
		setLanguage(pl.getLanguage());
		setLevel(pl.getLevel());
	}

	@Override
	public String toString() {
		return "PositionLanguage [id=" + id + ", position=" + position + ", language=" + language + ", level=" + level + "]";
	}
}
