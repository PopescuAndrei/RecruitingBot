package com.github.popescuandrei.recruitingBot.service;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.github.popescuandrei.recruitingBot.domain.AppUser;
import com.github.popescuandrei.recruitingBot.repository.BaseRepository;
import com.github.popescuandrei.recruitingBot.repository.AppUserRepository;

@Service
@Qualifier("appUserService")
public class AppUserServiceImpl extends EntityServiceImpl<AppUser> implements AppUserService {

	@Autowired
	@Qualifier("userRepository")
	private AppUserRepository userRepository;

	public AppUserServiceImpl(BaseRepository<AppUser, Long> repository) {
		super(repository);
	}

	@PostConstruct
	@Override
	protected void init() {
		super.init();
	}

}
