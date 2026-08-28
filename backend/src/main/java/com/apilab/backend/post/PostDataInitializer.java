package com.apilab.backend.post;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;

@Component
public class PostDataInitializer implements CommandLineRunner {

    private final PostRepository postRepository;

    public PostDataInitializer(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @Override
    public void run(String... args) {
        if (postRepository.count() > 0) return;

        postRepository.saveAll(List.of(
                post("rest-api-design-checklist", "api", "API 활용", "REST API를 설계할 때 놓치기 쉬운 5가지", "일관된 엔드포인트와 응답 구조를 만들기 위한 실무 기준을 살펴봅니다.", "김개발", LocalDate.of(2026, 8, 28), 128),
                post("frontend-api-errors", "development", "개발 이야기", "프론트엔드에서 API 오류를 다루는 방법", "사용자 경험을 해치지 않으면서 오류 상태를 명확하게 전달하는 패턴을 정리했습니다.", "이코드", LocalDate.of(2026, 8, 27), 96),
                post("community-open", "updates", "업데이트", "APILAB 커뮤니티를 시작합니다", "API를 만들고 사용하는 사람들의 경험과 질문을 자유롭게 나눠보세요.", "APILAB", LocalDate.of(2026, 8, 26), 214),
                post("cors-question", "questions", "질문과 답변", "브라우저 API 요청에서 CORS 오류가 발생해요", "개발 환경과 운영 환경에서 CORS 문제를 해결하는 방법을 함께 찾아봅니다.", "박질문", LocalDate.of(2026, 8, 25), 73),
                post("fetch-timeout", "api", "API 활용", "Fetch 요청에 타임아웃 적용하기", "AbortController를 이용해 안전하게 요청 시간을 제한하는 방법입니다.", "최프론트", LocalDate.of(2026, 8, 24), 85),
                post("typescript-response", "development", "개발 이야기", "TypeScript로 API 응답 모델링하기", "런타임 데이터와 타입 선언 사이의 간극을 줄이는 설계 방식을 소개합니다.", "정타입", LocalDate.of(2026, 8, 23), 147)
        ));
    }

    private Post post(String slug, String category, String categoryLabel, String title, String excerpt,
                      String author, LocalDate date, long views) {
        return new Post(slug, category, categoryLabel, title, excerpt, author, date, views, excerpt);
    }
}

