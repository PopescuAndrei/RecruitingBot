package com.github.popescuandrei.recruitingBot.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.github.popescuandrei.recruitingBot.domain.CandidateLanguage;

@Repository
@Qualifier("candidadateLanguageRepository")
public interface CandidateLanguageRepository extends BaseRepository<CandidateLanguage, Long> {

}
