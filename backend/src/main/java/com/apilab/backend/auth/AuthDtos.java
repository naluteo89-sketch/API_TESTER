package com.apilab.backend.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

final class AuthDtos {
    private AuthDtos() {
    }

    record SignupRequest(
            @NotBlank(message = "이름을 입력해 주세요.")
            @Size(max = 50, message = "이름은 50자 이하여야 합니다.") String name,
            @NotBlank(message = "이메일을 입력해 주세요.")
            @Email(message = "올바른 이메일 형식이 아닙니다.") String email,
            @NotBlank(message = "비밀번호를 입력해 주세요.")
            @Size(min = 8, max = 72, message = "비밀번호는 8자 이상 72자 이하여야 합니다.") String password) {
    }

    record LoginRequest(
            @NotBlank(message = "이메일을 입력해 주세요.")
            @Email(message = "올바른 이메일 형식이 아닙니다.") String email,
            @NotBlank(message = "비밀번호를 입력해 주세요.") String password) {
    }

    record UserResponse(Long id, String name, String email) {
        static UserResponse from(User user) {
            return new UserResponse(user.getId(), user.getName(), user.getEmail());
        }
    }

    record AuthResponse(String message, UserResponse user) {
    }
}

