import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InfiniteCarousel = () => {
  const [blogs, setBlogs] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null); // State for tracking expanded description

  const fetchBlogs = async () => {
    const token = Cookies.get('authToken'); // Get the auth token from cookies
    try {
      const response = await axios.get('http://localhost:8080/api/blogs', {
        headers: {
          'Authorization': `Bearer ${token}` // Pass the Authorization header
        }
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  };

  useEffect(() => {
    const getBlogs = async () => {
      const fetchedBlogs = await fetchBlogs();
      setBlogs(fetchedBlogs); // Set the fetched blogs into state
    };

    getBlogs();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000); // Changed to 10 seconds to give more time to watch video
    return () => clearInterval(interval);
  }, [blogs.length]);

  const handleShowMore = () => {
    setExpandedIndex((prevIndex) => (prevIndex === currentIndex ? null : currentIndex));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden bg-gray-900 rounded-lg shadow-xl">
      <div className="flex items-center justify-center h-[600px]"> {/* Increased height */}
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            custom={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute w-full h-full"
          >
            {blogs.length > 0 && (
              <Card className="w-full h-full bg-gray-800 text-white border-none overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{blogs[currentIndex].title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <div className="w-full aspect-video mb-4">
                    <iframe
                      width="100%"
                      height="100%"
                      src={blogs[currentIndex].ytlink}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <CardDescription className="text-gray-300 text-center">
                    {expandedIndex === currentIndex ? (
                      blogs[currentIndex].content
                    ) : (
                      <p>
                        {blogs[currentIndex].content.length > 100
                          ? blogs[currentIndex].content.substring(0, 100) + '...'
                          : blogs[currentIndex].content}
                      </p>
                    )}
                    <Button variant="outline" className="mt-2 text-white border-white hover:bg-gray-700" onClick={handleShowMore}>
                      {expandedIndex === currentIndex ? 'Show Less' : 'Show More'}
                    </Button>
                  </CardDescription>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button variant="outline" className="text-white border-white hover:bg-gray-700">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:bg-gray-700"
        onClick={prevSlide}
        disabled={blogs.length === 0}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:bg-gray-700"
        onClick={nextSlide}
        disabled={blogs.length === 0}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default InfiniteCarousel;
