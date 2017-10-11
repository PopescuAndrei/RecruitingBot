package com.github.popescuandrei.recruitingBot.util;

import static com.github.popescuandrei.recruitingBot.domain.support.Const.MALE;

import java.util.Random;

public class ImageColorPicker {

	private static String[] MALE_AVATARS = {
			"assets/img/faces/mCandidate1.png", "assets/img/faces/mCandidate2.png",
			"assets/img/faces/mCandidate3.png", "assets/img/faces/mCandidate4.png", 
			"assets/img/faces/mCandidate5.png", "assets/img/faces/mCandidate6.png", 
			"assets/img/faces/mCandidate7.png"
		};
	
	private static String[] FEMALE_AVATARS = {
			"assets/img/faces/fCandidate1.png", "assets/img/faces/fCandidate2.png",
			"assets/img/faces/fCandidate3.png", "assets/img/faces/fCandidate4.png",
			"assets/img/faces/fCandidate5.png", "assets/img/faces/fCandidate6.png",
			"assets/img/faces/fCandidate7.png"
		};
	
	private static String[] POSITION_BACKGROUNDS = {
			"assets/img/pos-bg/1.jpg", "assets/img/pos-bg/2.png",
			"assets/img/pos-bg/3.png", "assets/img/pos-bg/4.jpg",
			"assets/img/pos-bg/5.png", "assets/img/pos-bg/6.jpg"
		};
	
	
	private static String[] COLORS = {
			"#EDB63F", "#DD8335", "#D03A43", "#A6315D",
			"#734488", "#3868A6", "#449C76", "#88B25C"
		};
	
	public ImageColorPicker() {
		throw new UnsupportedOperationException("Should not be instantiated");
	}
	
	/**
	 * Method that returns an avatar's location based on gender
	 * @param gender
	 * @return
	 */
	public static String getRandomAvatar(String gender) {
		if(gender.equals(MALE)) {
			return MALE_AVATARS[new Random().nextInt(MALE_AVATARS.length)];
		}
		return FEMALE_AVATARS[new Random().nextInt(FEMALE_AVATARS.length)];
	}
	
	/**
	 * Method that returns a random background for positions
	 * @return
	 */
	public static String getRandomPositionBackground() {
		return POSITION_BACKGROUNDS[new Random().nextInt(POSITION_BACKGROUNDS.length)];
	}
	
	/**
	 * Method that returns a random color for a candidate
	 * @return
	 */
	public static String getRandomColor() {
		return COLORS[new Random().nextInt(COLORS.length)];
	}
}
