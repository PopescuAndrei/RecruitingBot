package com.github.popescuandrei.recruitingBot.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:4200", "https://recruitingmessbot.herokuapp.com"}, maxAge = 3600)
@RequestMapping("/api/enums")
public class EnumController {

	/**
	 * Mapping for retrieving a list of {@link String}s representing jobTitles
	 * @return List<String>
	 */
	@RequestMapping(value="/job-titles", method = RequestMethod.GET) 
	public @ResponseBody List<String> jobTitles() {
		return Arrays.asList(
			    "Developer", "Business Analyst", "Consultant", "Architect", "Team Leader", 
			    "Project Manager", "Recruiter", "Financial Advisor", "CFO", "CTO", "CEO");
	}
	
	/**
	 * Mapping for retrieving a single candidate
	 * @return List<String>
	 */
	@RequestMapping(value="/language-levels", method = RequestMethod.GET) 
	public @ResponseBody List<String> languageLevels() {
		return Arrays.asList("Beginner", "Intermediate", "Very Good", "Expert"); 
	}
}
