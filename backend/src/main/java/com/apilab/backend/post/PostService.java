package com.apilab.backend.post;

import com.apilab.backend.common.ApiException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class PostService {

    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<PostResponse> findAll(String category) {
        List<Post> posts = category == null || category.isBlank()
                ? postRepository.findAllByOrderByPublishedAtDesc()
                : postRepository.findByCategoryOrderByPublishedAtDesc(category);
        return posts.stream().map(PostResponse::from).toList();
    }

    @Transactional
    public PostResponse findBySlug(String slug) {
        Post post = postRepository.findBySlug(slug)
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "게시글을 찾을 수 없습니다."));
        post.increaseViews();
        return PostResponse.from(post);
    }
}

