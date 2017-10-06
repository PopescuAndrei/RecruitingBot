package com.github.popescuandrei.recruitingBot.domain;

import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.AGE;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.CANDIDATE;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.FACEBOOK_UUID;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.FIRST_NAME;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.GENDER;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.LAST_NAME;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.PHONE;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.github.popescuandrei.recruitingBot.domain.support.BaseEntity;
import com.github.popescuandrei.recruitingBot.domain.support.Email;

@Entity
@Table(name = CANDIDATE)
public class Candidate extends BaseEntity{

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = FACEBOOK_UUID, unique = true)
	private String facebookUuid;
	
	@NotNull
	@Size(max = 50)
	@Column(name = FIRST_NAME, length = 59)
	private String firstName;

	@NotNull
	@Size(max = 50)
	@Column(name = LAST_NAME, length = 50)
	private String lastName;
	
	@Column(unique = true)
	private Email email;
	
	@Size(min = 10, max = 10)
	@Column(name = PHONE, unique = true)
	private String phone;
	
	@Column(name = GENDER)
	private String gender;
	
	@Column(name = AGE)
	private int age;
	
	@OneToMany(mappedBy = "candidate", cascade = {CascadeType.ALL}, fetch = FetchType.LAZY)
	private List<CandidateEducation> candidateEducations;
	
	@OneToMany(mappedBy = "candidate", cascade = {CascadeType.ALL}, fetch = FetchType.LAZY)
	private List<CandidateExperience> candidateExperiences;
	
	@OneToMany(mappedBy = "candidate", cascade = {CascadeType.ALL}, fetch = FetchType.LAZY)
	private List<CandidateInterest> candidateInterests;
	
	@OneToMany(mappedBy = "candidate", cascade = {CascadeType.ALL}, fetch = FetchType.LAZY)
	private List<CandidateLanguage> candidateLanguages;
	
	@OneToMany(mappedBy = "candidate", cascade = {CascadeType.ALL}, fetch = FetchType.LAZY)
	private List<CandidateSkill> candidateSkills;
	
	@OneToMany(mappedBy = "candidate", cascade = {CascadeType.ALL}, fetch = FetchType.LAZY)
	private List<ChatMessage> chatMessages;
	
	@OneToOne(mappedBy = "candidate", cascade = {CascadeType.ALL}, fetch = FetchType.LAZY)
	private InterviewProgress interviewProgress;
	
	@OneToMany(mappedBy = "candidate", cascade = {CascadeType.ALL}, fetch = FetchType.LAZY)
	private List<UserCandidateLike> userCandidateLikes;
	
	@OneToMany(mappedBy = "candidate", cascade = {CascadeType.ALL}, fetch = FetchType.LAZY)
	private List<UserCandidateRating> userCandidateRatings;
	
	@OneToMany(mappedBy = "candidate", cascade = {CascadeType.ALL}, fetch = FetchType.LAZY)
	private List<UserCandidateComment> userCandidateComments;
	
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    
    public String getFacebookUuid() {
        return facebookUuid;
    }

    public void setFacebookUuid(String facebookUuid) {
        this.facebookUuid = facebookUuid;
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

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}
	
	public List<CandidateEducation> getCandidateEducations() {
		return candidateEducations;
	}

	public void setCandidateEducations(List<CandidateEducation> candidateEducations) {
		this.candidateEducations = candidateEducations;
	}

	public List<CandidateExperience> getCandidateExperiences() {
		return candidateExperiences;
	}

	public void setCandidateExperiences(List<CandidateExperience> candidateExperiences) {
		this.candidateExperiences = candidateExperiences;
	}

	public List<CandidateInterest> getCandidateInterests() {
		return candidateInterests;
	}

	public void setCandidateInterests(List<CandidateInterest> candidateInterests) {
		this.candidateInterests = candidateInterests;
	}

	public List<CandidateLanguage> getCandidateLanguages() {
		return candidateLanguages;
	}

	public void setCandidateLanguages(List<CandidateLanguage> candidateLanguages) {
		this.candidateLanguages = candidateLanguages;
	}

	public List<CandidateSkill> getCandidateSkills() {
		return candidateSkills;
	}

	public void setCandidateSkills(List<CandidateSkill> candidateSkills) {
		this.candidateSkills = candidateSkills;
	}

	public List<ChatMessage> getChatMessages() {
		return chatMessages;
	}

	public void setChatMessages(List<ChatMessage> chatMessages) {
		this.chatMessages = chatMessages;
	}

	public InterviewProgress getInterviewProgress() {
		return interviewProgress;
	}

	public void setInterviewProgress(InterviewProgress interviewProgress) {
		this.interviewProgress = interviewProgress;
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
		if (!(entity instanceof Candidate)) {
			throw new IllegalArgumentException("Entity should be of type Candidate");
		}
		Candidate candidate = (Candidate) entity;
		
		setFirstName(candidate.getFirstName());
		setLastName(candidate.getLastName());
		setEmail(candidate.getEmail());
		setPhone(candidate.getPhone());
		setGender(candidate.getGender());
		setAge(candidate.getAge());
	}

}
