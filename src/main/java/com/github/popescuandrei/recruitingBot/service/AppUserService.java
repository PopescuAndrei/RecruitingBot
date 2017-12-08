package com.github.popescuandrei.recruitingBot.service;

import com.github.popescuandrei.recruitingBot.domain.AppUser;

public interface AppUserService extends EntityService<AppUser>{

	AppUser findByName(String fullName);
}
