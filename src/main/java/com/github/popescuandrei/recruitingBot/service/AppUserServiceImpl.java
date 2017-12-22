package com.github.popescuandrei.recruitingBot.service;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.github.popescuandrei.recruitingBot.domain.AppUser;
import com.github.popescuandrei.recruitingBot.domain.support.Email;
import com.github.popescuandrei.recruitingBot.repository.AppUserRepository;
import com.github.popescuandrei.recruitingBot.repository.BaseRepository;

@Service
@Qualifier("appUserService")
public class AppUserServiceImpl extends EntityServiceImpl<AppUser> implements AppUserService {

	@Autowired
	@Qualifier("appUserRepository")
	private AppUserRepository appUserRepository;

	public AppUserServiceImpl(BaseRepository<AppUser, Long> repository) {
		super(repository);
	}

	@Override
	public AppUser findByName(String fullName) {
		String[] nameParts = fullName.split(" ");
		
		return appUserRepository.findByFirstNameAndLastName(nameParts[0], nameParts[1]);
	}

	@Override
	public AppUser findByEmail(String email) {
		return appUserRepository.findByEmail(new Email(email));
	}
	
	@Override
	public AppUser findByEmailAndPassword(String email, String password) {
		AppUser user = appUserRepository.findByEmail(new Email(email));
		if(user!=null) {
			if(user.getPassword().equals(password)) {
				return user;
			}
		}
		return null;
	}
	
	@PostConstruct
	@Override
	protected void init() {
		super.init();
	}
}
