package com.github.popescuandrei.recruitingBot.service;

import com.github.popescuandrei.recruitingBot.domain.Language;

public interface LanguageService extends EntityService<Language> {

	/**
	 * Method for retrieving a {@Language} by its name
	 * @param name
	 * @return
	 */
	Language findByName(String name);
}
