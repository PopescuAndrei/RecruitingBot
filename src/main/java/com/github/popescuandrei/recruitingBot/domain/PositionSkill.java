package com.github.popescuandrei.recruitingBot.domain;

import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.LEVEL;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.POSITION_ID;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.POSITION_SKILL;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.SKILL_ID;

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
import javax.validation.constraints.NotNull;

import com.github.popescuandrei.recruitingBot.domain.support.BaseEntity;

@Entity
@Table(name = POSITION_SKILL)
public class PositionSkill extends BaseEntity {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = SKILL_ID, nullable = false)
	private Skill skill;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = POSITION_ID, nullable = false)
	private Position position;
	
	@NotNull
	@Min(1)
	@Max(100)
	@Column(name = LEVEL)
	private Long level;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Skill getSkill() {
		return skill;
	}

	public void setSkill(Skill skill) {
		this.skill = skill;
	}

	public Position getPosition() {
		return position;
	}

	public void setPosition(Position position) {
		this.position = position;
	}

	public Long getLevel() {
		return level;
	}

	public void setLevel(Long level) {
		this.level = level;
	}

	@Override
	public void update(BaseEntity entity) {
		if (!(entity instanceof PositionSkill)) {
			throw new IllegalArgumentException("Entity should be an instance of PositionSkill");
		}
		
		PositionSkill ps = (PositionSkill) entity;
		setSkill(ps.getSkill());
		setPosition(ps.getPosition());
		setLevel(ps.getLevel());
	}

	@Override
	public String toString() {
		return "PositionSkill [id=" + id + ", skill=" + skill + ", position=" + position + ", level=" + level + "]";
	}
}
