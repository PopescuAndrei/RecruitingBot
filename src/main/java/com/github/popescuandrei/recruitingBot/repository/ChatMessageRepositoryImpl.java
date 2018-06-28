package com.github.popescuandrei.recruitingBot.repository;

import java.math.BigInteger;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.apache.log4j.Logger;

public class ChatMessageRepositoryImpl implements ChatMessageRepositoryCustom{

	private static final Logger log = Logger.getLogger(ChatMessageRepositoryImpl.class);
	
	@PersistenceContext
	private EntityManager em;
	
	/**
	 * Configure the entity manager to be used.
	 * 
	 * @param em
	 *            the {@link EntityManager} to set.
	 */
	public void setEntityManager(EntityManager em) {
		this.em = em;
	}

	@Override
	public Long getMaxPositionByCandidateId(Long candidateId) {
		String sql = "SELECT max(position) FROM chat_message WHERE chat_message.candidate_id =?0";

		Query query = em.createNativeQuery(sql);
		query.setParameter(0, candidateId);
		BigInteger position = (BigInteger) query.getSingleResult();
		
		return position == null ? 0L: position.longValue();
	}

	@PostConstruct
	private void init() {
		log.info("Custom ChatMessageRepositoryImpl initialized");
	}
}
