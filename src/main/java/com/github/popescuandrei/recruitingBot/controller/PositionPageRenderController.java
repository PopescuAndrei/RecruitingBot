package com.github.popescuandrei.recruitingBot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.github.popescuandrei.recruitingBot.domain.Position;
import com.github.popescuandrei.recruitingBot.domain.PositionSkill;
import com.github.popescuandrei.recruitingBot.service.PositionService;
import com.github.popescuandrei.recruitingBot.service.PositionSkillService;

@Controller
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:4200"}, maxAge = 3600)
@RequestMapping("/api/positionurls")
public class PositionPageRenderController {

	@Autowired
	private PositionService positionService;
	
	@Autowired
	private PositionSkillService positionSkillService;
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = "text/html;charset=UTF-8")
	public String viewPosition(@PathVariable("id") Long id) {
		Position position = positionService.find(id);
		List<PositionSkill> positionSkills = positionSkillService.findAllByPositionId(id);
		
		StringBuilder html = new StringBuilder("<div>");
		html.append("<h3><strong>Position:</strong>" + position.getName() + "</h3>");
		html.append("<p><strong>Description:</strong>" + position.getDescription() + "</p>");
		html.append("<p><strong>Added on:</strong>" + position.getCreationDate() + "</p>");
		html.append("<p><strong>Requirements:</strong></p>");
		for(PositionSkill skill: positionSkills) {
			html.append("<p><span style='color:green;'>" + skill.getSkill().getName() + "</span>, Level: " + skill.getLevel() + "</p>");
		}
		html.append("</div>");
		return html.toString();
	}
}
