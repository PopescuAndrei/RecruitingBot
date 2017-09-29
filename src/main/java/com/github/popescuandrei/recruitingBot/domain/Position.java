package com.github.popescuandrei.recruitingBot.domain;

import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.CREATION_DATE;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.DESCRIPTION;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.IMAGE;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.LAST_UPDATE_DATE;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.NAME;
import static com.github.popescuandrei.recruitingBot.domain.support.DbNames.POSITION;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.github.popescuandrei.recruitingBot.domain.support.BaseEntity;

@Entity
@Table(name = POSITION)
public class Position extends BaseEntity{
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@NotNull
	@Size(max = 50)
	@Column(name = NAME, length = 50)
	private String name;
	
	@NotNull
	@Size(max = 100)
	@Column(name = DESCRIPTION, length = 50)
	private String description;
	
	@Size(max = 100)
	@Column(name = IMAGE, length = 100)
	private String image;
	
	@Column(name = CREATION_DATE)
	@Temporal(TemporalType.TIMESTAMP)
	private Date creationDate;
	
	@Column(name = LAST_UPDATE_DATE)
	@Temporal(TemporalType.TIMESTAMP)
	private Date lastUpdate;
	
	@Override
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Date getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}
	
	public Date getLastUpdate() {
		return lastUpdate;
	}
	
	public void setLastUpdate(Date lastUpdate) {
		this.lastUpdate = lastUpdate;
	}

	@Override
	public void update(BaseEntity entity) {
		if (!(entity instanceof Position)) {
			throw new IllegalArgumentException("Entity should be of type Position");
		}
		
		Position position = (Position) entity;
		setName(position.getName());
		setDescription(position.getDescription());
		setImage(position.getImage());
		setLastUpdate(new Date());
	}

}
