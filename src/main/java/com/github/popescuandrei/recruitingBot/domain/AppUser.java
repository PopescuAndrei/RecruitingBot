package com.github.popescuandrei.recruitingBot.domain;

import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.APP_USER;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.FIRST_NAME;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.LAST_NAME;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.PASSWORD;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;

import com.github.popescuandrei.recruitingBot.domain.support.BaseEntity;
import com.github.popescuandrei.recruitingBot.domain.support.DbNames;
import com.github.popescuandrei.recruitingBot.domain.support.Email;

@Entity
@Table(name = APP_USER)
public class AppUser extends BaseEntity{

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	@Size(max = 100)
	@Column(name = FIRST_NAME, length = 59)
	private String firstName;

	@NotNull
	@Size(max = 100)
	@Column(name = LAST_NAME, length = 50)
	private String lastName;

	@Column(unique = true)
	private Email email;
	
	@NotEmpty
	@Size(min = 4, max = 100)
	@Column(name = PASSWORD, nullable = false, length = 100)
	private String password;
	
	@Column(name = DbNames.AVATAR, length = 255)
	private String avatar;
	
	@Override
	public Long getId() {
		return id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Email getEmail() {
		return email;
	}

	public void setEmail(Email email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public String getAvatar() {
		return avatar;
	}
	
	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}
	
	public String getFullName() {
		return this.firstName + " " + this.lastName;
	}

	@Override
	public void update(BaseEntity entity) {
		if (!(entity instanceof AppUser)) {
			throw new IllegalArgumentException("Entity should be of type User");
		}
		AppUser user = (AppUser) entity;
		
		setFirstName(user.getFirstName());
		setLastName(user.getLastName());
		setEmail(user.getEmail());
		setPassword(user.getPassword());
		setAvatar(user.getAvatar());
	}

	@Override
	public String toString() {
		return "AppUser [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + ", password=" + password + "]";
	}
}