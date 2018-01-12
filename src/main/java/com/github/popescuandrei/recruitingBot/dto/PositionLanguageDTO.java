package com.github.popescuandrei.recruitingBot.dto;

import java.io.Serializable;

import com.github.popescuandrei.recruitingBot.domain.Language;
import com.github.popescuandrei.recruitingBot.domain.Position;
import com.github.popescuandrei.recruitingBot.domain.PositionLanguage;

public class PositionLanguageDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String name;
	private String level;
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getLevel() {
		return level;
	}
	
	public void setLevel(String level) {
		this.level = level;
	}
	
	public static PositionLanguage mapToObject(Position position, Language language, PositionLanguageDTO dto) {
		PositionLanguage pl = new PositionLanguage();
		pl.setPosition(position);
		pl.setLanguage(language);
		pl.setLevel(dto.getLevel());
		
		return pl;
	}
	
	public static PositionLanguageDTO mapToDTO(PositionLanguage positionLanguage) {
		PositionLanguageDTO dto = new PositionLanguageDTO();
		dto.setName(positionLanguage.getLanguage().getName());
		dto.setLevel(positionLanguage.getLevel());
		
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
		PositionLanguageDTO other = (PositionLanguageDTO) obj;
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
