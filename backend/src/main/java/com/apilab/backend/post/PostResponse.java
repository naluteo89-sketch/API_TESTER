package com.apilab.backend.post;

import java.time.format.DateTimeFormatter;

public record PostResponse(
        String slug,
        String category,
        String categoryLabel,
        String title,
        String excerpt,
        String author,
        String date,
        long views,
        String body) {

    private static final DateTimeFormatter DATE_FORMAT = DateTimeFormatter.ofPattern("yyyy.MM.dd");

    static PostResponse from(Post post) {
        return new PostResponse(
                post.getSlug(), post.getCategory(), post.getCategoryLabel(), post.getTitle(),
                post.getExcerpt(), post.getAuthor(), post.getPublishedAt().format(DATE_FORMAT),
                post.getViews(), post.getBody());
    }
}

