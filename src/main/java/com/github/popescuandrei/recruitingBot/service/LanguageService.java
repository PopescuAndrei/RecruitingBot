package com.github.popescuandrei.recruitingBot.service;

import com.github.popescuandrei.recruitingBot.domain.Language;

public interface LanguageService extends EntityService<Language> {

	Language findByName(String name);
}
