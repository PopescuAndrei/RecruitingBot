package com.github.popescuandrei.recruitingBot.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.github.popescuandrei.recruitingBot.domain.AppUser;
import com.github.popescuandrei.recruitingBot.domain.Candidate;
import com.github.popescuandrei.recruitingBot.domain.CandidateEducation;
import com.github.popescuandrei.recruitingBot.domain.CandidateExperience;
import com.github.popescuandrei.recruitingBot.domain.CandidateInterest;
import com.github.popescuandrei.recruitingBot.domain.CandidateLanguage;
import com.github.popescuandrei.recruitingBot.domain.CandidateSkill;
import com.github.popescuandrei.recruitingBot.domain.ChatMessage;
import com.github.popescuandrei.recruitingBot.domain.UserCandidateComment;
import com.github.popescuandrei.recruitingBot.domain.UserCandidateRating;
import com.github.popescuandrei.recruitingBot.dto.ChatMessageDTO;
import com.github.popescuandrei.recruitingBot.dto.CommentDTO;
import com.github.popescuandrei.recruitingBot.dto.EducationDTO;
import com.github.popescuandrei.recruitingBot.dto.ExperienceDTO;
import com.github.popescuandrei.recruitingBot.dto.InterestDTO;
import com.github.popescuandrei.recruitingBot.dto.CandidateLanguageDTO;
import com.github.popescuandrei.recruitingBot.dto.RatingDTO;
import com.github.popescuandrei.recruitingBot.dto.SkillDTO;
import com.github.popescuandrei.recruitingBot.repository.ChatMessageRepository;
import com.github.popescuandrei.recruitingBot.service.AppUserService;
import com.github.popescuandrei.recruitingBot.service.CandidateEducationService;
import com.github.popescuandrei.recruitingBot.service.CandidateExperienceService;
import com.github.popescuandrei.recruitingBot.service.CandidateInterestService;
import com.github.popescuandrei.recruitingBot.service.CandidateLanguageService;
import com.github.popescuandrei.recruitingBot.service.CandidateService;
import com.github.popescuandrei.recruitingBot.service.CandidateSkillService;
import com.github.popescuandrei.recruitingBot.service.UserCandidateCommentService;
import com.github.popescuandrei.recruitingBot.service.UserCandidateLikeService;
import com.github.popescuandrei.recruitingBot.service.UserCandidateRatingService;

@RestController
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:4200", "https://recruitingmessbot.herokuapp.com"}, maxAge = 3600)
@RequestMapping("/api/candidates")
public class CandidateController {

	@Autowired
	@Qualifier("appUserService")
	private AppUserService appUserService;
	
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
	@Qualifier("candidateExperienceService")
	private CandidateExperienceService candidateExperienceService;
	
	@Autowired
	@Qualifier("candidateEducationService")
	private CandidateEducationService candidateEducationService;
	
	@Autowired
	@Qualifier("candidateLanguageService")
	private CandidateLanguageService candidateLanguageService;
	
	@Autowired
	@Qualifier("userCandidateLikeService")
	private UserCandidateLikeService userCandidateLikeService;
	
	@Autowired
	@Qualifier("userCandidateCommentService")
	private UserCandidateCommentService userCandidateCommentService;
	
	@Autowired
	@Qualifier("userCandidateRatingService")
	private UserCandidateRatingService userCandidateRatingService;
	
	@Autowired
	@Qualifier("chatMessageRepository")
	private ChatMessageRepository chatMessageRepository;
	
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
	 * Method that returns a list with all the {@link Candidate}s 
	 * except the one with the provided id
	 * @param candidateId
	 * @return
	 */
	@RequestMapping(value="/{id}/otherCandidates", method = RequestMethod.GET)
	public @ResponseBody List<Candidate> findAll(@PathVariable("id") Long candidateId) {
		List<Candidate> all = candidateService.findAll();
		Candidate candidate = candidateService.find(candidateId);
		
		all.removeIf(c -> c.equals(candidate));
		
		return all;
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
	public @ResponseBody List<SkillDTO> findAllSkillsForCandidate(@PathVariable("id") Long id) {
		List<CandidateSkill> candidateSkills = candidateSkillService.findAllByCandidateId(id);
		
		return candidateSkills.stream()
				.map(cs -> SkillDTO.mapToDTOFromCandidate(cs))
				.collect(Collectors.toList());
	}
	
	/**
	 * Mapping for retrieving a {@link Candidate}'s interests
	 * @param id
	 * @return
	 */
	@RequestMapping(value="/{id}/interests", method = RequestMethod.GET)
	public @ResponseBody List<InterestDTO> findAllInterestsForCandidate(@PathVariable("id") Long id) {
		List<CandidateInterest> candidateInterests = candidateInterestService.findAllByCandidateId(id);
		
		return candidateInterests.stream()
				.map(ci -> InterestDTO.mapToDTO(ci))
				.collect(Collectors.toList());
	}
	
	/**
	 * Mapping for retrieving a {@link Candidate}'s experience
	 * @param id
	 * @return
	 */
	@RequestMapping(value="/{id}/experience", method = RequestMethod.GET)
	public @ResponseBody List<ExperienceDTO> findAllExperienceForCandidate(@PathVariable("id") Long id) {
		List<CandidateExperience> candidateExperience = candidateExperienceService.findAllByCandidateId(id);
		
		return candidateExperience.stream()
				.map(ce -> ExperienceDTO.mapToDTO(ce))
				.collect(Collectors.toList());
	}
	
	/**
	 * Mapping for retrieving a {@link Candidate}'s education
	 * @param id
	 * @return
	 */
	@RequestMapping(value="/{id}/education", method = RequestMethod.GET)
	public @ResponseBody List<EducationDTO> findAllEducationForCandidate(@PathVariable("id") Long id) {
		List<CandidateEducation> candidateEducation = candidateEducationService.findAllByCandidateId(id);
	
		return candidateEducation.stream()
				.map(ce -> EducationDTO.mapToDTO(ce))
				.collect(Collectors.toList());
	}
	
	/**
	 * Mapping for retrieving a {@link Candidate}'s languages
	 * @param id
	 * @return
	 */
	@RequestMapping(value="/{id}/languages", method = RequestMethod.GET)
	public @ResponseBody List<CandidateLanguageDTO> findAllLanguagesForCandidate(@PathVariable("id") Long id) {
		List<CandidateLanguage> candidateLanguages = candidateLanguageService.findAllByCandidateId(id);
		
		return candidateLanguages.stream()
				.map(cl -> CandidateLanguageDTO.mapToDTO(cl))
				.collect(Collectors.toList());
	}
	
	/**
	 * Mapping for retrieving a candidate's comments
	 * @return
	 */
	@RequestMapping(value="/{id}/comments", method = RequestMethod.GET)
	public @ResponseBody List<CommentDTO> findAllCommentsForCandidate(@PathVariable("id") Long id) {
		List<UserCandidateComment> comments = userCandidateCommentService.findAllByCandidateId(id);
		
		return comments.stream()
				.map(c -> CommentDTO.mapToDTO(c))
				.collect(Collectors.toList());
	}
	
	/**
	 * Mapping for retrieving the number of comments for a {@link Candidate} by its id
	 * @param id
	 * @return
	 */
	@RequestMapping(value="/{id}/noComments", method = RequestMethod.GET)
	public @ResponseBody Long findNumberOfComments(@PathVariable("id") Long id) {
		return userCandidateCommentService.findNumberOfCommentsByCandidateId(id);
	}
	
	/**
	 * Mapping for retrieving the number of likes for a {@link Candidate} by its id
	 * @param id
	 * @return
	 */
	@RequestMapping(value="/{id}/likes", method = RequestMethod.GET)
	public @ResponseBody Long findNumberOfCandidateLikes(@PathVariable("id") Long id) {
		return userCandidateLikeService.findNumberOfLikesByCandidateId(id);
	}
	
	/**
	 * Method for retrieving the chat message thread between the candidate and the bot
	 * @param id
	 * @return
	 */
	@RequestMapping(value="/{id}/chat", method = RequestMethod.GET)
	public @ResponseBody List<ChatMessageDTO> findChatForCandidate(@PathVariable("id") Long id) {
		List<ChatMessage> messages = chatMessageRepository.findAllByCandidateId(id);
		
		return messages.stream()
				.map(m -> ChatMessageDTO.mapToDTO(m))
				.collect(Collectors.toList());
	}
	
	/**
	 * Method for creating a new comment from a user to a candidate
	 * @param comment
	 * @return
	 */
	@RequestMapping(value="/{id}/comments", method = RequestMethod.POST)
	public @ResponseBody CommentDTO createComment(@PathVariable("id") Long candidateId, @RequestBody CommentDTO comment) {
		Candidate candidate = candidateService.find(candidateId);
		AppUser author = appUserService.findByName(comment.getAuthor());
		UserCandidateComment userCandidateComment = userCandidateCommentService.create(CommentDTO.mapToObject(author, candidate, comment));
		
		return CommentDTO.mapToDTO(userCandidateComment);
	}

	@RequestMapping(value="/{id}/rating", method = RequestMethod.GET)
	public @ResponseBody Double findAllRatingsForCandidate(@PathVariable("id") Long id) {
		return userCandidateRatingService.findCandidateRating(id);
	}
	
	/**
	 * Method for creating a new rating from a user to a candidate
	 * @param comment
	 * @return
	 */
	@RequestMapping(value="/{id}/rating", method = RequestMethod.POST)
	public @ResponseBody UserCandidateRating createRating(@PathVariable("id") Long candidateId, @RequestBody RatingDTO dto) {
		Candidate candidate = candidateService.find(candidateId);
		AppUser user = appUserService.findByName(dto.getAuthor());
		UserCandidateRating rating = userCandidateRatingService.create(RatingDTO.mapToObject(user, candidate, dto));
		
		return rating;
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
			if (index == 4) {
				index = 0;
			}
		}
		return candidatesInRows;
	}
}
