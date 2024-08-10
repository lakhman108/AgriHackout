import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cards = [
  {
    id: 1,
    title: 'Amazing Nature Scenery',
    description: 'Explore the breathtaking beauty of nature in this stunning video.',
    youtubeId: 'BHACKCNDMW8',
  },
  {
    id: 2,
    title: 'Urban Architecture',
    description: 'Discover the marvels of modern urban architecture and design.',
    youtubeId: 'uPrUde56YA8',
  },
  {
    id: 3,
    title: 'Space Exploration',
    description: 'Journey through the cosmos and learn about recent space discoveries.',
    youtubeId: 'nA9UZF-SZoQ',
  },
  {
    id: 4,
    title: 'Culinary Delights',
    description: 'Indulge in a visual feast of gourmet cuisine from around the world.',
    youtubeId: 'ixmxOlcrlUc',
  },
  {
    id: 5,
    title: 'Extreme Sports',
    description: 'Experience the thrill of extreme sports through this adrenaline-pumping video.',
    youtubeId: 'L9BGRIjbvU0',
  },
];

const InfiniteCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000); // Changed to 10 seconds to give more time to watch video
    return () => clearInterval(interval);
  }, []);

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
            <Card className="w-full h-full bg-gray-800 text-white border-none overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{cards[currentIndex].title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="w-full aspect-video mb-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${cards[currentIndex].youtubeId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <CardDescription className="text-gray-300 text-center">
                  {cards[currentIndex].description}
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center">
                <Button variant="outline" className="text-white border-white hover:bg-gray-700">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:bg-gray-700"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:bg-gray-700"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default InfiniteCarousel;