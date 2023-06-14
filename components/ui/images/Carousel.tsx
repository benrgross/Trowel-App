import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';
import ImageWithFallback from './ImageWithFallback';
import Image from 'next/image';
import { toTitleCase } from '@/utils/helper-fuctions';
import { useWindowSize } from '@/utils/useWindowSize';

type TabKey = 'flower' | 'leaf' | 'habit' | 'fruit' | 'bark' | 'other';

type CarouselImage = {
  id: number;
  image_url: string;
  copyright: string;
};

type Images = {
  flower: CarouselImage[];
  leaf: CarouselImage[];
  habit: CarouselImage[];
  fruit: CarouselImage[];
  bark: CarouselImage[];
  other: CarouselImage[];
};

type CarouselComponentProps = {
  images: Images;
};

const defaultImageUrl =
  'https://www.creativefabrica.com/wp-content/uploads/2019/12/09/Plants-Monochrome-Icon-Vector-Graphics-1-5-580x386.jpg';

const CarouselComponent: React.FC<CarouselComponentProps> = ({ images }) => {
  const [activeTab, setActiveTab] = useState<TabKey>(
    Object.keys(images)[0] as TabKey
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleThumbClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className='w-full h-full px-6'>
      <div className='flex flex-wrap overflow-hidden'>
        {Object.keys(images).map((tab) => (
          <button
            key={tab}
            className={`font-poppins px-2 py-1 rounded-t shadow-md ${
              tab === activeTab
                ? 'bg-green-moss text-white'
                : 'bg-green-pale text-green-dark'
            }`}
            onClick={() => setActiveTab(tab as TabKey)}
          >
            {tab === '' ? 'General' : toTitleCase(tab)}
          </button>
        ))}
      </div>

      <Carousel selectedItem={activeIndex}>
        {images[activeTab].map((img: CarouselImage) => (
          <div key={img.id} className='w-full h-64 bg-gray-extraLight'>
            <Image
              alt={`${activeTab}-carousel-image`}
              src={`/api/image-proxy?url=${img.image_url}`}
              width={100}
              height={100}
              className='object-contain w-full h-full shadow-sm'
              placeholder='empty'
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        ))}
      </Carousel>
      <div className='py-4 overflow-x-auto whitespace-nowrap'>
        {images[activeTab as keyof Images].map((img, index) => (
          <div
            key={img.id}
            className='inline-block mr-2 bg-gray-medium'
            onClick={() => handleThumbClick(index)}
          >
            <Image
              alt='carousel-img'
              src={`/api/image-proxy?url=${img.image_url}`}
              width={100}
              height={100}
              className='object-cover cursor-pointer w-[100px] h-[100px]'
              placeholder='empty'
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default CarouselComponent;

// fix types, add fallback, fix thumb size and update tabs style
