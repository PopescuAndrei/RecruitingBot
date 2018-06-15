package com.github.popescuandrei.recruitingBot;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

public final class Utils {
	
	private Utils() {
		throw new UnsupportedOperationException("Should not be instantiated.");
	}
	
	/**
	 * Helper method for computing the weighted mean
	 * @param values
	 * @param weights
	 * @return
	 */
	public static Double computeWeightedMean(Double[] values, Double[] weights) {
		Double weightedMean = 0.0;
		for(int index = 0; index < values.length; index++) {
			weightedMean = values[index] * weights[index];
		}
		return weightedMean/100;
	}
	
	/**
	 * Helper method for computing the difference in months between two dates
	 * @param startDate
	 * @param endDate
	 * @return
	 */
	public static Long monthsDifference(Date startDate, Date endDate) {
		Calendar startCalendar = new GregorianCalendar();
		Calendar endCalendar = new GregorianCalendar();
		
		startCalendar.setTime(startDate);
		endCalendar.setTime(endDate);

		int diffYear = endCalendar.get(Calendar.YEAR) - startCalendar.get(Calendar.YEAR);
		int diffMonth = diffYear * 12 + endCalendar.get(Calendar.MONTH) - startCalendar.get(Calendar.MONTH);
		
		return (long) diffMonth;
	}
}
