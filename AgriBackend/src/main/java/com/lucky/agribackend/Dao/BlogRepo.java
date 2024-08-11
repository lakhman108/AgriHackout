package com.lucky.agribackend.Dao;

import com.lucky.agribackend.entity.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BlogRepo extends JpaRepository<Blog,Integer> {
    List<Blog> findByTitleContainingIgnoreCaseOrContentContainingIgnoreCase(String title, String content);
}
