package com.github.popescuandrei.recruitingBot.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.github.popescuandrei.recruitingBot.domain.Skill;
import com.github.popescuandrei.recruitingBot.dto.SkillDTO;
import com.github.popescuandrei.recruitingBot.service.SkillService;

@RestController
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:4200", "https://recruitingmessbot.herokuapp.com"}, maxAge = 3600)
@RequestMapping("/api/skills")
public class SkillController {
	
	@Autowired
	@Qualifier("skillService")
	private SkillService skillService;
	
	/**
	 * Mapping for retrieving all {@link Skill}s
	 * @return
	 */
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<SkillDTO> findAll() {
		List<Skill> skills = skillService.findAll();
		
		return skills.stream()
				.map(s -> SkillDTO.mapToDTO(s))
				.collect(Collectors.toList());
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody SkillDTO create(@RequestBody SkillDTO dto) {
		Skill skill = SkillDTO.mapToObject(dto);
		skill = skillService.create(skill);
		
		return SkillDTO.mapToDTO(skill);
	}
}
