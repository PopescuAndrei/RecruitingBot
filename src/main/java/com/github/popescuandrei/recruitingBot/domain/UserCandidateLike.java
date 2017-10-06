package com.github.popescuandrei.recruitingBot.domain;

import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.APP_USER_ID;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.CANDIDATE_ID;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.LIKED;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.USER_CANDIDATE_LIKE;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.github.popescuandrei.recruitingBot.domain.support.BaseEntity;

@Entity
@Table(name = USER_CANDIDATE_LIKE)
public class UserCandidateLike extends BaseEntity {
	
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
	
	@Column(name = LIKED, length = 1, nullable = false)
	private Boolean like;
	
	@Override
	public Long getId() {
		return id;
	}
	
	public AppUser getAppUser() {
		return appUser;
	}

	public Boolean getLike() {
		return like;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setAppUser(AppUser appUser) {
		this.appUser = appUser;
	}
	
	public void setLike(Boolean like) {
		this.like = like;
	}

	@Override
	public void update(BaseEntity entity) {
		if(!(entity instanceof UserCandidateLike)) {
			throw new IllegalArgumentException("entity should be a UserCandidateLike");
		}
		// if like => unlike
		// if unlike => like
		setLike(!getLike());
	}
}
