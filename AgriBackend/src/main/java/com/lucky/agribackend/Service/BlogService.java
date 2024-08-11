package com.lucky.agribackend.Service;

import com.lucky.agribackend.Dao.BlogRepo;
import com.lucky.agribackend.entity.Blog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogService {

    @Autowired
    private BlogRepo blogRepo;

    public List<Blog> searchBlogs(String keyword) {
        return blogRepo.findByTitleContainingIgnoreCaseOrContentContainingIgnoreCase(keyword, keyword);
    }

    public Blog updateBlog(Blog blog) {
        Blog existingBlog = blogRepo.findById(blog.getId()).orElse(null);
        if (existingBlog != null) {
            if (blog.getTitle() != null) {
                existingBlog.setTitle(blog.getTitle());
            }
            if (blog.getYtlink() != null) {
                existingBlog.setYtlink(blog.getYtlink());
            }
            if (blog.getContent() != null) {
                existingBlog.setContent(blog.getContent());
            }
            return blogRepo.save(existingBlog);
        } else {
            return null; // Blog not found
        }
    }


    public void deleteBlog(int id) {
        System.out.println(id);
        blogRepo.deleteById(id);
    }
    
    public Blog createBlog(Blog blog) {
        return blogRepo.save(blog);
    }

    public List<Blog> getAllBlogs() {
        return blogRepo.findAll();
    }
    public Blog getBlogById(int id) {
        return blogRepo.findById(id).orElse(null);
    }

    public List<Blog> searchAll() {
        return blogRepo.findAll();
    }
}
