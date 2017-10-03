package com.github.popescuandrei.recruitingBot.service;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.github.popescuandrei.recruitingBot.domain.Language;
import com.github.popescuandrei.recruitingBot.repository.BaseRepository;
import com.github.popescuandrei.recruitingBot.repository.LanguageRepository;

@Service
@Qualifier("languageService")
public class LanguageServiceImpl extends EntityServiceImpl<Language> implements LanguageService {

	@Autowired
	@Qualifier("languageRepository")
	private LanguageRepository languageRepository;
	
	public LanguageServiceImpl(BaseRepository<Language, Long> repository) {
		super(repository);
	}
	
    @PostConstruct
    @Override
    protected void init() {
        super.init();
    }

}
