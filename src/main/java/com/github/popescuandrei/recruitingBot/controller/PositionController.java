package com.github.popescuandrei.recruitingBot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.github.popescuandrei.recruitingBot.domain.Position;
import com.github.popescuandrei.recruitingBot.service.PositionService;


@RestController
@RequestMapping("/api/positions")
public class PositionController {

	@Autowired
	PositionService positionService;
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public @ResponseBody Position findOne(@PathVariable("id") Long id) {
		Position position = positionService.find(id);
		return position;
	}
	
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<Position> findAll() {
		List<Position> positions = positionService.findAll();
		return positions;
	}
	 
	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody Position create(@RequestBody Position position) {
		return positionService.create(position);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public @ResponseBody Position delete(@PathVariable("id") Long id) {
		return positionService.delete(id);
	}
}
