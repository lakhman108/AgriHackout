package com.lucky.agribackend.Service;


import com.lucky.agribackend.Dao.UserRepo;
import com.lucky.agribackend.entity.User;
import com.lucky.agribackend.entity.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MyUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepo repo;
	
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		Optional<User> user = Optional.ofNullable(repo.findByUsername(username));

	if (user==null) {
		System.out.println("User 404");
		throw new UsernameNotFoundException("User 404");
	}

		 return new UserPrincipal(user.get());
	}

}
