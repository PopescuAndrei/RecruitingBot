package com.github.popescuandrei.recruitingBot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.github.popescuandrei.recruitingBot.domain.AppUser;
import com.github.popescuandrei.recruitingBot.dto.AuthDTO;
import com.github.popescuandrei.recruitingBot.service.AppUserService;

@RestController
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:4200", "https://recruitingmessbot.herokuapp.com"}, maxAge = 3600)
@RequestMapping("/api/users")
public class AuthController {

	@Autowired
	@Qualifier("appUserService")
	private AppUserService appUserService;
	
	
	// Implement security
	@RequestMapping(value="/auth", method = RequestMethod.POST)
	public @ResponseBody AppUser getUserByEmail(@RequestBody AuthDTO dto) {
		return appUserService.findByEmailAndPassword(dto.getEmail(), dto.getPassword());
	}
}
