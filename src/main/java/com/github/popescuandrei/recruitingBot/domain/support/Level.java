package com.github.popescuandrei.recruitingBot.domain.support;

public enum Level {
	BEGINNER ("Beginner", 25L),
	INTERMEDIATE ("Intermediate",50L),
	VERYGOOD ("Very Good", 75L),
	EXPERT ("Expert", 100L);
	
	private final String name;
	private final Long level;
	
	private Level(String name, Long level) {
		this.name = name;
		this.level = level;
	}

	public String getName() {
		return name;
	}

	public Long getLevel() {
		return level;
	}
	
	public static Double compareLevels(String candidateLevel, String positionLevel) {
		if (Level.valueOf(positionLevel).getLevel() - Level.valueOf(candidateLevel).getLevel() == 25) {
			return 0.75;
		} else if (Level.valueOf(positionLevel).getLevel() - Level.valueOf(candidateLevel).getLevel() == 50) {
			return 0.5;
		} else if (Level.valueOf(positionLevel).getLevel() - Level.valueOf(candidateLevel).getLevel() == 75) {
			return 0.25;
		}
		return 1.0;
	}
}
