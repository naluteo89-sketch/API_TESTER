package com.apilab.backend.post;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.LocalDate;

@Entity
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 100)
    private String slug;

    @Column(nullable = false, length = 30)
    private String category;

    @Column(nullable = false, length = 30)
    private String categoryLabel;

    @Column(nullable = false, length = 200)
    private String title;

    @Column(nullable = false, length = 500)
    private String excerpt;

    @Column(nullable = false, length = 50)
    private String author;

    @Column(nullable = false)
    private LocalDate publishedAt;

    @Column(nullable = false)
    private long views;

    @Column(columnDefinition = "TEXT")
    private String body;

    protected Post() {
    }

    public Post(String slug, String category, String categoryLabel, String title, String excerpt,
                String author, LocalDate publishedAt, long views, String body) {
        this.slug = slug;
        this.category = category;
        this.categoryLabel = categoryLabel;
        this.title = title;
        this.excerpt = excerpt;
        this.author = author;
        this.publishedAt = publishedAt;
        this.views = views;
        this.body = body;
    }

    public Long getId() { return id; }
    public String getSlug() { return slug; }
    public String getCategory() { return category; }
    public String getCategoryLabel() { return categoryLabel; }
    public String getTitle() { return title; }
    public String getExcerpt() { return excerpt; }
    public String getAuthor() { return author; }
    public LocalDate getPublishedAt() { return publishedAt; }
    public long getViews() { return views; }
    public String getBody() { return body; }

    public void increaseViews() {
        views++;
    }
}

