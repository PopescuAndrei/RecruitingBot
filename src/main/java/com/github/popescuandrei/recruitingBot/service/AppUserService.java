package com.github.popescuandrei.recruitingBot.service;

import com.github.popescuandrei.recruitingBot.domain.AppUser;

public interface AppUserService extends EntityService<AppUser>{

	/**
	 * Method for retrieving an {@link AppUser} by its FirstName and LastName
	 * @param fullName
	 * @return
	 */
	AppUser findByName(String fullName);
	
	/**
	 * Method for retrieving an {@link AppUser} by its email address
	 * @param email
	 * @return
	 */
	AppUser findByEmail(String email);
	
	/**
	 * Method for retrieving an {@link AppUser} by its email address and password
	 * @param email
	 * @param password
	 * @return
	 */
	AppUser findByEmailAndPassword(String email, String password);
}
