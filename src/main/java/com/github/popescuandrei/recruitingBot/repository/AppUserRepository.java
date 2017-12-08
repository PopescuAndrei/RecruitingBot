package com.github.popescuandrei.recruitingBot.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.github.popescuandrei.recruitingBot.domain.AppUser;

@Repository
@Qualifier("appUserRepository")
public interface AppUserRepository extends BaseRepository<AppUser, Long>{

	AppUser findByFirstNameAndLastName(String firstName, String lastName);
}
