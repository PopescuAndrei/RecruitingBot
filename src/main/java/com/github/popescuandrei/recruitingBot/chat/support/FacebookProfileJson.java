package com.github.popescuandrei.recruitingBot.chat.support;

import java.io.Serializable;

public class FacebookProfileJson implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private String first_name;
	private String last_name;
	private String profile_pic;
	private String locale;
	private int timezone;
	private String gender;
	private String id;
	
	public FacebookProfileJson() {
		super();
	}

	public FacebookProfileJson(String first_name, String last_name, String profile_pic, String locale, int timezone, String gender, String id) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.profile_pic = profile_pic;
		this.locale = locale;
		this.timezone = timezone;
		this.gender = gender;
		this.id = id;
	}

	public String getFirst_name() {
		return first_name;
	}
	
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	
	public String getLast_name() {
		return last_name;
	}
	
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	
	public String getProfile_pic() {
		return profile_pic;
	}
	
	public void setProfile_pic(String profile_pic) {
		this.profile_pic = profile_pic;
	}
	
	public String getLocale() {
		return locale;
	}
	
	public void setLocale(String locale) {
		this.locale = locale;
	}
	
	public int getTimezone() {
		return timezone;
	}
	
	public void setTimezone(int timezone) {
		this.timezone = timezone;
	}
	
	public String getGender() {
		return gender;
	}
	
	public void setGender(String gender) {
		this.gender = gender;
	}
	
	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
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
		FacebookProfileJson other = (FacebookProfileJson) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "FacebookProfileJson [first_name=" + first_name + ", last_name=" + last_name + ", profile_pic=" + profile_pic + ", locale=" + locale
				+ ", timezone=" + timezone + ", gender=" + gender + ", id=" + id + "]";
	}
}
