package com.github.popescuandrei.recruitingBot.domain;

import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.APP_USER_ID;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.CANDIDATE_ID;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.COMMENT;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.CREATION_DATE;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.USER_CANDIDATE_COMMENT;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.github.popescuandrei.recruitingBot.domain.support.BaseEntity;

@Entity
@Table(name = USER_CANDIDATE_COMMENT)
public class UserCandidateComment extends BaseEntity {
	
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
	
	@Size(max = 255)
	@Column(name = COMMENT)
	private String comment;
	
	@Column(name = CREATION_DATE)
	@Temporal(TemporalType.TIMESTAMP)
	private Date creationDate;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public AppUser getAppUser() {
		return appUser;
	}

	public void setAppUser(AppUser appUser) {
		this.appUser = appUser;
	}

	public Candidate getCandidate() {
		return candidate;
	}

	public void setCandidate(Candidate candidate) {
		this.candidate = candidate;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public Date getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}

	@Override
	public void update(BaseEntity entity) {
		throw new UnsupportedOperationException("Comment cannot be updated");
	}

	@Override
	public String toString() {
		return "UserCandidateComment [id=" + id + ", appUser=" + appUser + ", candidate=" + candidate + ", comment=" + comment + ", creationDate="
				+ creationDate + "]";
	}
}
