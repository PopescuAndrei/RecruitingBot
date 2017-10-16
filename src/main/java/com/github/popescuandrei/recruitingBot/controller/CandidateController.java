package com.github.popescuandrei.recruitingBot.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.github.popescuandrei.recruitingBot.domain.Candidate;
import com.github.popescuandrei.recruitingBot.domain.CandidateInterest;
import com.github.popescuandrei.recruitingBot.domain.CandidateSkill;
import com.github.popescuandrei.recruitingBot.domain.UserCandidateComment;
import com.github.popescuandrei.recruitingBot.service.CandidateInterestService;
import com.github.popescuandrei.recruitingBot.service.CandidateService;
import com.github.popescuandrei.recruitingBot.service.CandidateSkillService;
import com.github.popescuandrei.recruitingBot.service.UserCandidateCommentService;

@RestController
@RequestMapping("/api/candidates")
public class CandidateController {

	@Autowired
	@Qualifier("candidateService")
	private CandidateService candidateService;
	
	@Autowired
	@Qualifier("candidateSkillService")
	private CandidateSkillService candidateSkillService;
	
	@Autowired
	@Qualifier("candidateInterestService")
	private CandidateInterestService candidateInterestService;
	
	@Autowired
	@Qualifier("userCandidateCommentService")
	private UserCandidateCommentService userCandidateCommentService;
	
	/**
	 * Mapping for retrieving a single candidate
	 * @param id
	 * @return
	 */
	@RequestMapping(value="/{id}", method = RequestMethod.GET) 
	public @ResponseBody Candidate findOne(@PathVariable("id") Long id) {
		Candidate candidate = candidateService.find(id);
		return candidate;
	}
	
	/**
	 * Mapping for retrieving all candidates
	 * @return
	 */
	@RequestMapping(method = RequestMethod.GET) 
	public @ResponseBody List<List<Candidate>> findAll() {
		List<Candidate> candidates = candidateService.findAll();
		List<List<Candidate>> candidatesInRows = mapListToRows(candidates);
		
		return candidatesInRows;
	}
	
	/**
	 * Mapping for retrieving a {@link Candidate}'s skills
	 * @param id
	 * @return
	 */
	@RequestMapping(value="/{id}/skills", method = RequestMethod.GET)
	public @ResponseBody List<CandidateSkill> findAllSkillsForCandidate(@PathVariable("id") Long id) {
		return candidateSkillService.findAllByCandidateId(id);
	}
	
	/**
	 * Mapping for retrieving a {@link Candidate}'s interests
	 * @param id
	 * @return
	 */
	@RequestMapping(value="/{id}/interests", method = RequestMethod.GET)
	public @ResponseBody List<CandidateInterest> findAllInterestsForCandidate(@PathVariable("id") Long id) {
		return candidateInterestService.findAllByCandidateId(id);
	}
	
	/**
	 * Mapping for retrieving a candidate's comments
	 * @return
	 */
	@RequestMapping(value="/{id}/comments", method = RequestMethod.GET)
	public @ResponseBody List<UserCandidateComment> findAllCommentsForCandidate(@PathVariable("id") Long id) {
		List<UserCandidateComment> comments = userCandidateCommentService.findAllByCandidateId(id);
		
		return comments;
	}
	
	/**
	 * Method for creating a new comment from a user to a candidate
	 * @param comment
	 * @return
	 */
	@RequestMapping(value="/{id}/comments", method = RequestMethod.POST)
	public @ResponseBody UserCandidateComment createComment(@RequestBody UserCandidateComment comment) {
		comment = userCandidateCommentService.create(comment);
		
		return comment;
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
