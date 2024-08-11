package com.lucky.agribackend.Controller;

import com.lucky.agribackend.Service.BlogService;
import com.lucky.agribackend.entity.Blog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/blogs")
public class BlogController {

    @Autowired
    private BlogService blogService;

    // Get all blogs or search by keyword
    @GetMapping
    public ResponseEntity<List<Blog>> searchBlogs(@RequestParam(value = "keyword", required = false) String keyword) {
        List<Blog> blogs;
        if (keyword != null) {
            blogs = blogService.searchBlogs(keyword);
        } else {
            blogs = blogService.getAllBlogs(); // You can add this method to get all blogs
        }
        return ResponseEntity.ok(blogs);
    }

    // Get a single blog by ID
    @GetMapping("/{id}")
    public ResponseEntity<Blog> getBlogById(@PathVariable int id) {
        Blog blog = blogService.getBlogById(id);
        if (blog != null) {
            return ResponseEntity.ok(blog);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Create a new blog
    @PostMapping
    public ResponseEntity<Blog> createBlog(@RequestBody Blog blog) {
        Blog createdBlog = blogService.createBlog(blog);
        return ResponseEntity.ok(createdBlog);
    }

    // Update an existing blog
    @PutMapping("/{id}")
    public ResponseEntity<Blog> updateBlog(@PathVariable int id, @RequestBody Blog blog) {
        blog.setId(id);
        Blog updatedBlog = blogService.updateBlog(blog);
        if (updatedBlog != null) {
            return ResponseEntity.ok(updatedBlog);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a blog by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBlog(@PathVariable int id) {
        Blog blog = blogService.getBlogById(id);
        if (blog != null) {
           blogService.deleteBlog(id);
           return ResponseEntity.ok().build();
         // Successfully deleted
        } else {
            return ResponseEntity.notFound().build(); // Blog not found
        }
    }


}
