package com.github.popescuandrei.recruitingBot.domain;

import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.LIKE;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.USER_CANDIDATE_LIKE;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.USER_ID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.github.popescuandrei.recruitingBot.domain.support.BaseEntity;

@Entity
@Table(name = USER_CANDIDATE_LIKE)
public class UserCandidateLike extends BaseEntity {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@OneToOne
	@Column(name = USER_ID, nullable = false)
	private User user;
	
	@Column(name = LIKE, length = 1, nullable = false)
	private Boolean like;
	
	@Override
	public Long getId() {
		return id;
	}
	
	public User getUser() {
		return user;
	}

	public Boolean getLike() {
		return like;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setUser(User user) {
		this.user = user;
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
