package com.lucky.agribackend.Controller;

import com.lucky.agribackend.Dao.BlogRepo;
import com.lucky.agribackend.entity.Blog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/blog")
public class BlogController {
    @Autowired
    private BlogRepo blogRepo;

    @GetMapping
    public List<Blog> getBlogRepo() {
        return blogRepo.findAll();
    }
    @PostMapping()
    public Blog getBlogRepo(Blog blog) {
        return blogRepo.save(blog);
    }
}
