package com.github.popescuandrei.recruitingBot.domain.support;

import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.EMAIL;

import java.io.Serializable;
import java.util.regex.Pattern;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.util.Assert;

/**
 * Value object that designates a valid e-mail address. 
 */
@Embeddable
public class Email implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private static final String EMAIL_REGEX = "^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
	private static final Pattern PATTERN = Pattern.compile(EMAIL_REGEX);
	
	@NotEmpty	
	@Column(name = EMAIL, unique = true, nullable=false, length=100)
	private String address;
	
	public Email() {
	}
	
	/**
	 * Constructor
	 * 
	 * @param value must not be {@code null} or empty.
	 */
	public Email(String address) {
		Assert.isTrue(isValid(address), 
				"Invalid email address.");
		this.address = address;
	}
	
	/**
	 * Returns whether the given {@code value} is a valid 
	 * email address.
	 * 
	 * @param value
	 * @return
	 */
	public static boolean isValid(String value) {
		return (value == null ? false : PATTERN.matcher(value).matches());
	}	
	
	public String getAddress() {
		return address;
	}
	
	public void setAddress(String address) {
		this.address = address;
	}
	
	/* 
	 * (non-Javadoc)
	 * @see Object#toString()
	 */
	@Override
	public String toString() {
		return getAddress();
	}
}