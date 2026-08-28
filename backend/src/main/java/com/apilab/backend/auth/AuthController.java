package com.apilab.backend.auth;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private static final String USER_ID = "USER_ID";
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/signup")
    @ResponseStatus(HttpStatus.CREATED)
    AuthDtos.AuthResponse signup(@Valid @RequestBody AuthDtos.SignupRequest request, HttpSession session) {
        User user = authService.signup(request);
        session.setAttribute(USER_ID, user.getId());
        return new AuthDtos.AuthResponse("회원가입이 완료되었습니다.", AuthDtos.UserResponse.from(user));
    }

    @PostMapping("/login")
    AuthDtos.AuthResponse login(@Valid @RequestBody AuthDtos.LoginRequest request, HttpSession session) {
        User user = authService.login(request);
        session.setAttribute(USER_ID, user.getId());
        return new AuthDtos.AuthResponse("로그인되었습니다.", AuthDtos.UserResponse.from(user));
    }

    @GetMapping("/me")
    AuthDtos.UserResponse me(HttpSession session) {
        Long userId = (Long) session.getAttribute(USER_ID);
        if (userId == null) {
            throw new com.apilab.backend.common.ApiException(HttpStatus.UNAUTHORIZED, "로그인이 필요합니다.");
        }
        return AuthDtos.UserResponse.from(authService.getUser(userId));
    }

    @PostMapping("/logout")
    AuthDtos.AuthResponse logout(HttpSession session) {
        session.invalidate();
        return new AuthDtos.AuthResponse("로그아웃되었습니다.", null);
    }
}

