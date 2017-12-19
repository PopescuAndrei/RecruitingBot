package com.github.popescuandrei.recruitingBot.service;

import java.util.List;

import com.github.popescuandrei.recruitingBot.domain.support.BaseEntity;

/**
 * Provides basic CRUD operations for all services extending it
 */
public interface EntityService<T extends BaseEntity>{
	
	/**
	 * Generic 'find' method
	 * @param id
	 * @return
	 */
	T find(Long id);
	
	/**
	 * Generic 'create' method
	 * @param entity
	 * @return
	 */
	T create(T entity);
	
	/**
	 * Generic 'update' method
	 * @param entity
	 * @return
	 */
	T update(T entity);
	
	/**
	 * Generic 'delete' method
	 * @param id
	 * @return
	 */
	T delete(Long id);

	/**
	 * Generic 'findAll' method
	 * @return
	 */
	List<T> findAll();
}