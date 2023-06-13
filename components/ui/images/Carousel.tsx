import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';
import ImageWithFallback from './ImageWithFallback';
import Image from 'next/image';

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
  const [activeTab, setActiveTab] = useState<string>(Object.keys(images)[0]);
  const [imageLoaded, setImageLoaded] = useState(false);

  const renderThumbs = () => {
    return images[activeTab as keyof Images].map((img) => (
      <Image
        alt='carousel-img'
        key={img.id}
        src={`/api/image-proxy?url=${img.image_url}`}
        width={500}
        height={500}
        // className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 opacity-100`}
        placeholder='empty'
      />
    ));
  };

  return (
    <div className='w-[400px] h-[400px]'>
      <div className='flex space-x-4'>
        {Object.keys(images).map((tab) => (
          <button
            key={tab}
            className={
              tab === activeTab
                ? 'bg-green-moss text-green-extraDark font-poppins px-3 py-1'
                : 'bg-green-pale text-green-extraDark font-poppins px-3 py-1'
            }
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <Carousel renderThumbs={renderThumbs}>
        {images[activeTab].map((img) => (
          <div key={img.id}>
            <Image
              alt={`${activeTab}-carousel-image`}
              src={`/api/image-proxy?url=${img.image_url}`}
              width={400}
              height={400}
              //   className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              //     imageLoaded ? 'opacity-100' : 'opacity-0'
              //   } object-cover`}
              className='w-[400px] h-[400px] object-cover'
              placeholder='empty'
              onLoad={() => setImageLoaded(true)}
            />
            <p className='legend'>{img.copyright}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;

// fix types, add fallback, fix thumb size and update tabs style
