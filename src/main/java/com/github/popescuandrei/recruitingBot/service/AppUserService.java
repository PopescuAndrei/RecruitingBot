package com.github.popescuandrei.recruitingBot.service;

import com.github.popescuandrei.recruitingBot.domain.AppUser;

public interface AppUserService extends EntityService<AppUser>{

	/**
	 * Method for retrieving an {@link AppUser} by its FirstName and LastName
	 * @param fullName
	 * @return
	 */
	AppUser findByName(String fullName);
}
