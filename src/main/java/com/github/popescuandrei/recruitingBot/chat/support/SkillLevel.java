package com.github.popescuandrei.recruitingBot.chat.support;

import java.io.Serializable;

import com.github.popescuandrei.recruitingBot.domain.Skill;

public class SkillLevel implements Serializable {

	private static final long serialVersionUID = 1L;

	private Skill skill;
	private Long level;
	
	/**
	 * Constructor
	 */
	public SkillLevel() {
		super();
	}

	/**
	 * Constructor
	 * @param skill
	 * @param score
	 */
	public SkillLevel(Skill skill, Long level) {
		super();
		this.skill = skill;
		this.level = level;
	}
	
	public Skill getSkill() {
		return skill;
	}
	
	public void setSkill(Skill skill) {
		this.skill = skill;
	}
	
	public Long getLevel() {
		return level;
	}
	
	public void setLevel(Long level) {
		this.level = level;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((skill == null) ? 0 : skill.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		SkillLevel other = (SkillLevel) obj;
		if (skill == null) {
			if (other.skill != null)
				return false;
		} else if (!skill.equals(other.skill))
			return false;
		return true;
	}
}
