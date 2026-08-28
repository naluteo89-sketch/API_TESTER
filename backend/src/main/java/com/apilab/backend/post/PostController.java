package com.apilab.backend.post;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    List<PostResponse> findAll(@RequestParam(required = false) String category) {
        return postService.findAll(category);
    }

    @GetMapping("/{slug}")
    PostResponse findBySlug(@PathVariable String slug) {
        return postService.findBySlug(slug);
    }
}

