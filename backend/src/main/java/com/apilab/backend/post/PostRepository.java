package com.apilab.backend.post;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findAllByOrderByPublishedAtDesc();
    List<Post> findByCategoryOrderByPublishedAtDesc(String category);
    Optional<Post> findBySlug(String slug);
}

