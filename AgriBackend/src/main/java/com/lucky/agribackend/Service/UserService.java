package com.lucky.agribackend.Service;

import com.lucky.agribackend.Dao.UserRepo;
import com.lucky.agribackend.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

	@Autowired
	private UserRepo repo;

	private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

	public String saveUser(User user) {
		// Validate the input data

		if(user==null) {
			return  "user is null";
		}
		if(user.getUsername() == null){
			return "Username cannot be empty";
		}
		// Check if the user already exists
		if (repo.findByUsername(user.getUsername()) != null) {
		return ("User with given username already exists.");
		}


		// Encode the user's password before saving
		user.setPassword(encoder.encode(user.getPassword()));
		System.out.println("Encoded password: " + user.getPassword());

		// Save the user and return the result
		repo.save(user);

		return "User Created Succefully";
	}


}

