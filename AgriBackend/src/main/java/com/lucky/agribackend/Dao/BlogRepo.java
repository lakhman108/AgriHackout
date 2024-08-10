package com.lucky.agribackend.Dao;

import com.lucky.agribackend.entity.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepo extends JpaRepository<Blog,Integer> {
}
