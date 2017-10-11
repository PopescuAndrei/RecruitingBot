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

	@SuppressWarnings("null")
	@Override
	public Long getMaxPositionByCandidateId(Long candidateId) {
		StringBuilder sql = new StringBuilder();
		sql.append("SELECT max(position)")
			.append(" FROM chat_message")
			.append(" WHERE chat_message.candidate_id =?0");
		
		Query query = em.createNativeQuery(sql.toString());
		query.setParameter(0, candidateId);
		Long position = ((BigInteger) query.getSingleResult()).longValue();
		
		return position == null ? 0L: position;
	}

	@PostConstruct
	private void init() {
		log.info("Custom ChatMessageRepositoryImpl initialized");
	}
}
