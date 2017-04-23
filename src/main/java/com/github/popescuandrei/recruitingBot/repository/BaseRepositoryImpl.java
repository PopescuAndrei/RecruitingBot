package com.github.popescuandrei.recruitingBot.repository;

import static com.google.common.base.Preconditions.checkNotNull;

import java.io.Serializable;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;

import javax.persistence.EmbeddedId;
import javax.persistence.EntityManager;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.springframework.data.jpa.repository.support.JpaEntityInformation;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.github.popescuandrei.recruitingBot.domain.support.BaseEntity;

/**
 * {@link BaseRepository} implementation that encapsulates common
 * behavior that is inherited by the subclasses.    
 * 
 * @param <T>
 * @param <ID>
 */
public class BaseRepositoryImpl<T extends BaseEntity, ID extends Serializable> extends SimpleJpaRepository<T, ID> implements BaseRepository<T, ID> {

	private final JpaEntityInformation<T, ?> entityInformation;
	private final EntityManager entityManager;
	private final Class<T> type;
			
	/**
	 * Constructor 
	 * 
	 * @param entityInformation
	 * @param entityManager
	 */
	public BaseRepositoryImpl(JpaEntityInformation<T, ?> entityInformation, EntityManager entityManager) {
        super(entityInformation, entityManager);
        this.entityInformation = entityInformation;
        this.entityManager = entityManager;
        this.type = entityInformation.getJavaType();                
	}
			
	public JpaEntityInformation<T, ?> getEntityInformation() {
		return entityInformation;
	}

	public EntityManager getEntityManager() {
		return entityManager;
	}

		
	@Override
    @Transactional
    public <S extends T> S save(S entity) {
        checkNotNull(entity, "The entity to save cannot be null");

        // creation with auto generated id
        if (entityInformation.isNew(entity)) {
            entityManager.persist(entity);
            return entity;
        }

        // creation with manually assigned key
        if (!entityManager.contains(entity) &&
        		isEntityIdManuallyAssigned(type)) {
            entityManager.persist(entity);
            return entity;
        }

        //update
        return entityManager.merge(entity);
    }
	
	private static boolean isEntityIdManuallyAssigned(Class<?> type) {
        for (Method method : type.getMethods()) {
            if (Modifier.isPublic(method.getModifiers()) && 
            		(method.getAnnotation(Id.class) != null || 
            		 method.getAnnotation(EmbeddedId.class) != null)) {
            	if (method.getAnnotation(Id.class) != null) {
                    return method.getAnnotation(GeneratedValue.class) == null;
                } else if (method.getAnnotation(EmbeddedId.class) != null) {
                    return true;
                } else {
                    return true;
                }
            }
        }
        return false;
    }
}