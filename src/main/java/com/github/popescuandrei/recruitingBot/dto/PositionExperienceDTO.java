package com.github.popescuandrei.recruitingBot.dto;

import java.io.Serializable;

import com.github.popescuandrei.recruitingBot.domain.Position;
import com.github.popescuandrei.recruitingBot.domain.PositionExperience;

public class PositionExperienceDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private String title;
	private Long years;
	
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

	public static PositionExperience mapToObject(Position position, PositionExperienceDTO dto) {
		PositionExperience pe = new PositionExperience();
		pe.setPosition(position);
		pe.setTitle(dto.getTitle());
		pe.setYears(dto.getYears());
		
		return pe;
	}
	
	public static PositionExperienceDTO mapToDTO(PositionExperience pe) {
		PositionExperienceDTO dto = new PositionExperienceDTO();
		dto.setTitle(pe.getTitle());
		dto.setYears(pe.getYears());
		
		return dto;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((title == null) ? 0 : title.hashCode());
		result = prime * result + ((years == null) ? 0 : years.hashCode());
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
		PositionExperienceDTO other = (PositionExperienceDTO) obj;
		if (title == null) {
			if (other.title != null)
				return false;
		} else if (!title.equals(other.title))
			return false;
		if (years == null) {
			if (other.years != null)
				return false;
		} else if (!years.equals(other.years))
			return false;
		return true;
	}
}
