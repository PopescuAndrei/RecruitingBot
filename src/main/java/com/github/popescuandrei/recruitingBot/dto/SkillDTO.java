package com.github.popescuandrei.recruitingBot.dto;

import java.io.Serializable;

import com.github.popescuandrei.recruitingBot.domain.Candidate;
import com.github.popescuandrei.recruitingBot.domain.CandidateSkill;
import com.github.popescuandrei.recruitingBot.domain.Position;
import com.github.popescuandrei.recruitingBot.domain.PositionSkill;
import com.github.popescuandrei.recruitingBot.domain.Skill;

/**
 * {@code CandidateSkill}'s or {@code PositionSkill}'s DTO
 * @author epopean
 *
 */
public class SkillDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private String name;
	private Long level;
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public Long getLevel() {
		return level;
	}
	
	public void setLevel(Long level) {
		this.level = level;
	}
	
	public static CandidateSkill mapToCandidateSkill(Candidate candidate, Skill skill, SkillDTO dto) {
		CandidateSkill cs = new CandidateSkill();
		cs.setCandidate(candidate);
		cs.setSkill(skill);
		cs.setLevel(dto.getLevel());
		
		return cs;
	}
	
	public static PositionSkill mapToPositionSkill(Position position, Skill skill, SkillDTO dto) {
		PositionSkill ps = new PositionSkill();
		ps.setPosition(position);
		ps.setSkill(skill);
		ps.setLevel(dto.getLevel());
		
		return ps;
	}
	
	public static SkillDTO mapToDTOFromCandidate(CandidateSkill candidateSkill) {
		SkillDTO dto = new SkillDTO();
		dto.setLevel(candidateSkill.getLevel());
		dto.setName(candidateSkill.getSkill().getName());
		
		return dto;
	}
	
	public static SkillDTO mapToDTOFromPosition(PositionSkill positionSkill) {
		SkillDTO dto = new SkillDTO();
		dto.setLevel(positionSkill.getLevel());
		dto.setName(positionSkill.getSkill().getName());
		
		return dto;
	}
	
	public static SkillDTO mapToDTO(Skill skill) {
		SkillDTO dto = new SkillDTO();
		dto.setLevel(0L);
		dto.setName(skill.getName());
		
		return dto;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((level == null) ? 0 : level.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
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
		SkillDTO other = (SkillDTO) obj;
		if (level == null) {
			if (other.level != null)
				return false;
		} else if (!level.equals(other.level))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}
}
