package com.github.popescuandrei.recruitingBot.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.github.popescuandrei.recruitingBot.domain.Language;

@Repository
@Qualifier("languageRepository")
public interface LanguageRepository extends BaseRepository<Language, Long> {

}
