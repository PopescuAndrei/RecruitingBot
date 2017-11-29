package com.github.popescuandrei.recruitingBot.dto;

import java.io.Serializable;
import java.util.Date;

/**
 * {@code CandidateExperience}'s DTO
 * @author epopean
 */
public class ExperienceDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private String title;
	private String company;
	private Date periodFrom;
	private Date periodTo;
	
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getCompany() {
		return company;
	}
	
	public void setCompany(String company) {
		this.company = company;
	}
	
	public Date getPeriodFrom() {
		return periodFrom;
	}
	
	public void setPeriodFrom(Date periodFrom) {
		this.periodFrom = periodFrom;
	}
	
	public Date getPeriodTo() {
		return periodTo;
	}
	
	public void setPeriodTo(Date periodTo) {
		this.periodTo = periodTo;
	}
}
