package com.github.popescuandrei.recruitingBot.controller;

import java.util.ArrayList;
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
@RequestMapping("/api/candidates")
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
	public @ResponseBody List<List<Candidate>> findAll() {
		List<Candidate> candidates = candidateService.findAll();
		List<List<Candidate>> candidatesInRows = mapListToRows(candidates);
		
		return candidatesInRows;
	}
	
	/**
	 * Method that maps the list of @{link Candidate}s to a List of rows of @{link Candidate}s
	 * 
	 * @param candidates
	 * @return
	 */
	private List<List<Candidate>> mapListToRows(List<Candidate> candidates) {
		List<List<Candidate>> candidatesInRows = new ArrayList<List<Candidate>>();
		int index = 0;
		for(Candidate candidate: candidates) {
			if(index == 0) {
				candidatesInRows.add(new ArrayList<Candidate>());
			}
			
			candidatesInRows.get(candidatesInRows.size() - 1).add(candidate);
			
			index = index + 1;
			if (index == 3) {
				index = 0;
			}
		}
		return candidatesInRows;
	}
}
