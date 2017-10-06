package com.github.popescuandrei.recruitingBot.domain;

import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.APP_USER;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.APP_USER_SEQ;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.FIRST_NAME;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.LAST_NAME;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.PASSWORD;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.SEQ_GEN;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;

import com.github.popescuandrei.recruitingBot.domain.support.BaseEntity;
import com.github.popescuandrei.recruitingBot.domain.support.Email;

@Entity
@Table(name = APP_USER)
public class AppUser extends BaseEntity{

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@SequenceGenerator(name = SEQ_GEN, sequenceName = APP_USER_SEQ)
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
	
	@OneToMany(mappedBy = "appUser", cascade = {CascadeType.ALL}, fetch = FetchType.LAZY)
	private List<UserCandidateLike> userCandidateLikes;
	
	@OneToMany(mappedBy = "appUser", cascade = {CascadeType.ALL}, fetch = FetchType.LAZY)
	private List<UserCandidateRating> userCandidateRatings;
	
	@OneToMany(mappedBy = "appUser", cascade = {CascadeType.ALL}, fetch = FetchType.LAZY)
	private List<UserCandidateComment> userCandidateComments;
	
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

	public List<UserCandidateLike> getUserCandidateLikes() {
		return userCandidateLikes;
	}

	public void setUserCandidateLikes(List<UserCandidateLike> userCandidateLikes) {
		this.userCandidateLikes = userCandidateLikes;
	}

	public List<UserCandidateRating> getUserCandidateRatings() {
		return userCandidateRatings;
	}

	public void setUserCandidateRatings(List<UserCandidateRating> userCandidateRatings) {
		this.userCandidateRatings = userCandidateRatings;
	}

	public List<UserCandidateComment> getUserCandidateComments() {
		return userCandidateComments;
	}

	public void setUserCandidateComments(List<UserCandidateComment> userCandidateComments) {
		this.userCandidateComments = userCandidateComments;
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
	}
	
}