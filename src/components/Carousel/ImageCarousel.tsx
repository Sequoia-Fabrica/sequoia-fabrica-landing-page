import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
    images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    // State to hold shuffled images
    const [shuffledImages, setShuffledImages] = useState<string[]>([]);

    // Function to shuffle images
    const shuffleImages = (imagesArray: string[]): string[] => {
        let shuffled = [...imagesArray]; // Create a copy to avoid mutating the original array
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
        }
        return shuffled;
    };

    // Shuffle images on initial render
    useEffect(() => {
        setShuffledImages(shuffleImages(images));
    }, [images]); // Dependency array includes `images` to ensure re-shuffling if the `images` prop changes


    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === shuffledImages.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(goToNext, 8000);
        return () => clearInterval(interval);
    }, [shuffledImages.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? shuffledImages.length - 1 : prevIndex - 1));
    };

    return (
        <div className="relative w-screen h-[400px] overflow-hidden">
            <div className="absolute inset-0 flex transition-transform duration-300 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 100 / shuffledImages.length}%)`,
                    width: `${shuffledImages.length * 100}%` // Set the container width
                }}>
                {shuffledImages.map((image, index) => (
                    <div key={index}
                        className="w-full h-[400px] relative" // Adjust each image container to take full width
                        style={{ width: `${100 / shuffledImages.length}%` }}>
                        <Image src={image} layout="fill" objectFit="cover" alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
                onClick={goToPrevious}
            >
                Prev
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
                onClick={goToNext}
            >
                Next
            </button>
        </div>
    );
};

export default ImageCarousel;