package com.eduplanet.auth_service.service;

import com.eduplanet.auth_service.dto.AuthResponse;
import com.eduplanet.auth_service.dto.LoginRequest;
import com.eduplanet.auth_service.dto.RegisterRequest;
import com.eduplanet.auth_service.entity.AppRole;
import com.eduplanet.auth_service.entity.AppUser;
import com.eduplanet.auth_service.repository.AppRoleRepository;
import com.eduplanet.auth_service.repository.AppUserRepository;
import com.eduplanet.auth_service.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private AppUserRepository userRepository;

    @Autowired
    private AppRoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("L'email est déjà utilisé !");
        }

        AppUser user = new AppUser();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        String requestedRole = request.getRole() != null ? request.getRole().toUpperCase() : "STUDENT";
        if (!requestedRole.startsWith("ROLE_")) {
            requestedRole = "ROLE_" + requestedRole;
        }

        Optional<AppRole> roleOpt = roleRepository.findByName(requestedRole);
        AppRole role;
        if (roleOpt.isEmpty()) {
            role = new AppRole(requestedRole);
            roleRepository.save(role);
        } else {
            role = roleOpt.get();
        }

        user.getRoles().add(role);
        userRepository.save(user);

        UserDetails userDetails = userDetailsService.loadUserByUsername(user.getEmail());
        String jwt = jwtUtil.generateToken(userDetails, role.getName());

        return new AuthResponse(jwt, user.getEmail(), role.getName());
    }

    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );

        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail());
        AppUser user = userRepository.findByEmail(request.getEmail()).get();
        String roleName = user.getRoles().iterator().next().getName();
        
        String jwt = jwtUtil.generateToken(userDetails, roleName);

        return new AuthResponse(jwt, user.getEmail(), roleName);
    }
}
