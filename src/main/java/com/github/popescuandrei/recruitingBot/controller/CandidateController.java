package com.github.popescuandrei.recruitingBot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.github.popescuandrei.recruitingBot.domain.Candidate;
import com.github.popescuandrei.recruitingBot.service.CandidateService;

@RestController
@RequestMapping("/candidates")
public class CandidateController {

	@Autowired
	@Qualifier("candidateService")
	private CandidateService candidateService;
	
	@RequestMapping(value="/{id}", method = RequestMethod.GET) 
	public @ResponseBody Candidate findOne(@PathVariable("id") Long id) {
		Candidate candidate = candidateService.find(id);
		return candidate;
	}
	
	@RequestMapping(method = RequestMethod.GET) 
	public @ResponseBody List<Candidate> findAll() {
		List<Candidate> candidates = candidateService.findAll();
		return candidates;
	}
}
