package com.github.popescuandrei.recruitingBot.domain;

import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.APP_USER_ID;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.CANDIDATE_ID;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.RATING;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.USER_CANDIDATE_RATING;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import com.github.popescuandrei.recruitingBot.domain.support.BaseEntity;

@Entity
@Table(name = USER_CANDIDATE_RATING)
public class UserCandidateRating extends BaseEntity {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
    @NotNull
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = APP_USER_ID, nullable = false)
	private AppUser appUser;
    
    @NotNull
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = CANDIDATE_ID, nullable = false)
	private Candidate candidate;
	
	@Column(name = RATING)
	@Digits(integer = 1, fraction = 2)
	@Min(0)
	@Max(10)
	private Double rating;
	
	@Override
	public Long getId() {
		return id;
	}
	
	public AppUser getAppUser() {
		return appUser;
	}

	public Double getRating() {
		return rating;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Candidate getCandidate() {
		return candidate;
	}

	public void setCandidate(Candidate candidate) {
		this.candidate = candidate;
	}
	
	public void setAppUser(AppUser appUser) {
		this.appUser = appUser;
	}

	public void setRating(Double rating) {
		this.rating = rating;
	}

	@Override
	public void update(BaseEntity entity) {
		if(!(entity instanceof UserCandidateRating)) {
			throw new IllegalArgumentException("entity should be a UserCandidateRating");
		}
		UserCandidateRating rating = (UserCandidateRating) entity;
		
		setRating(rating.getRating());
	}

	@Override
	public String toString() {
		return "UserCandidateRating [id=" + id + ", appUser=" + appUser + ", candidate=" + candidate + ", rating=" + rating + "]";
	}
}