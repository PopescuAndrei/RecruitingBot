package com.github.popescuandrei.recruitingBot.domain;

import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.CANDIDATE;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.FIRST_NAME;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.LAST_NAME;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.github.popescuandrei.recruitingBot.domain.support.BaseEntity;
import com.github.popescuandrei.recruitingBot.domain.support.DbNames;

@Entity
@Table(name = CANDIDATE)
public class Candidate extends BaseEntity{

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@NotNull
	@Size(max = 100)
	@Column(name = FIRST_NAME, length = 59)
	private String firstName;

	@NotNull
	@Size(max = 100)
	@Column(name = LAST_NAME, length = 50)
	private String lastName;
	
	@Column(name = DbNames.EMAIL, unique = true)
	private String email;
	
	@Size(min = 10, max = 10)
	@Column(name = DbNames.PHONE, unique = true)
	private String phone;
	
	@Column(name = DbNames.GENDER)
	private String gender;
	
	@Column(name = DbNames.AGE)
	private int age;
	
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
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
