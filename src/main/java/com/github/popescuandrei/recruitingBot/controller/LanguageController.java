package com.github.popescuandrei.recruitingBot.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.github.popescuandrei.recruitingBot.domain.Language;
import com.github.popescuandrei.recruitingBot.service.LanguageService;

@RestController
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:4200", "https://recruitingmessbot.herokuapp.com"}, maxAge = 3600)
@RequestMapping("/api/languages")
public class LanguageController {
	
	@Autowired
	@Qualifier("languageService")
	private LanguageService languageService;
	
	/**
	 * Mapping for retrieving all {@link Language}s
	 * @return
	 */
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<String> findAll() {
		List<Language> languages = languageService.findAll();
		
		return languages.stream()
				.map(Language::getName)
				.collect(Collectors.toList());
	}
}
