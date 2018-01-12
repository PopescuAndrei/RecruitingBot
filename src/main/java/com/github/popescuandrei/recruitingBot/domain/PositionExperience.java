package com.github.popescuandrei.recruitingBot.domain;

import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.POSITION_EXPERIENCE;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.POSITION_ID;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.TITLE;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.YEARS;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

import com.github.popescuandrei.recruitingBot.domain.support.BaseEntity;

@Entity
@Table(name = POSITION_EXPERIENCE)
public class PositionExperience extends BaseEntity {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = POSITION_ID, nullable = false)
	private Position position;
	
	@Size(max = 100)
	@Column(name = TITLE, length = 100)
	private String title;
	
	@Min(0)
	@Max(100)
	@Column(name = YEARS)
	private Long years;
	
	public Position getPosition() {
		return position;
	}

	public void setPosition(Position position) {
		this.position = position;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
	
	public Long getYears() {
		return years;
	}
	
	public void setYears(Long years) {
		this.years = years;
	}

	@Override
	public void update(BaseEntity entity) {
		if (!(entity instanceof PositionExperience)) {
			throw new IllegalArgumentException("Entity should be of type PositionExperience");
		}
		
		PositionExperience pe = (PositionExperience) entity;
		setPosition(pe.getPosition());
		setTitle(pe.getTitle());
		setYears(pe.getYears());
	}

	@Override
	public String toString() {
		return "PositionExperience [id=" + id + ", title=" + title + ", years=" + years + "]";
	}
}

