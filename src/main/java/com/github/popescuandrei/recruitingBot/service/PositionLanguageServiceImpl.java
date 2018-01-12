package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.github.popescuandrei.recruitingBot.domain.PositionLanguage;
import com.github.popescuandrei.recruitingBot.repository.BaseRepository;
import com.github.popescuandrei.recruitingBot.repository.PositionLanguageRepository;

@Service
@Qualifier("positionLanguageService")
public class PositionLanguageServiceImpl extends EntityServiceImpl<PositionLanguage> implements PositionLanguageService{
	
	@Autowired
	@Qualifier("positionLanguageRepository")
	private PositionLanguageRepository positionLanguageRepository;
	
	public PositionLanguageServiceImpl(BaseRepository<PositionLanguage, Long> repository) {
		super(repository);
	}
	
	public List<PositionLanguage> findAllByPositionId(Long positionId) {
		return positionLanguageRepository.findAllByPositionId(positionId);
	}

	@Override
	public PositionLanguage findByLanguageNameAndPositionId(String name, Long positionId) {
		List<PositionLanguage> all = positionLanguageRepository.findAllByPositionId(positionId);
		
		for(PositionLanguage pl : all) {
			if(pl.getLanguage().getName().equals(name)) {
				return pl;
			}
		}
		return null;
	}
	
    @PostConstruct
    @Override
    protected void init() {
        super.init();
    }

}
