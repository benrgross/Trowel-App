// PlantPreviewCard.tsx
import router from 'next/router';
import ImageWithFallback from '@/components/ui/images/ImageWithFallback';

interface PlantPreviewCardProps {
  id: number;
  slug: string;
  commonName: string;
  scientificName: string;
  imageUrl: string;
}

const PlantPreviewCard: React.FC<PlantPreviewCardProps> = ({
  id,
  slug,
  commonName,
  scientificName,
  imageUrl,
}) => {
  const defaultImageUrl =
    'https://www.creativefabrica.com/wp-content/uploads/2019/12/09/Plants-Monochrome-Icon-Vector-Graphics-1-5-580x386.jpg';

  const handleSelection = (slug: string) => {
    router.push({
      pathname: `/plants/${slug}`,
    });
  };

  return (
    <button
      onClick={() => handleSelection(slug)}
      key={id}
      className='max-w-sm overflow-hidden border rounded shadow-lg cursor-pointer border-gray-light hover:bg-gray-light'
    >
      <div className='w-full'>
        <div className='relative w-[300px] h-[200px]'>
          <ImageWithFallback
            alt={`${commonName}-search-thumb-img`}
            src={
              imageUrl ? `/api/image-proxy?url=${imageUrl}` : defaultImageUrl
            }
            width={300}
            height={200}
            className='absolute top-0 left-0 w-full h-full transition-opacity duration-500'
            fallbackSrc={defaultImageUrl}
          />
        </div>
      </div>
      <div className='px-6 py-4'>
        <div className='mb-2 text-xl font-bold'>{commonName}</div>
        <div className='text-base text-gray-600'>{scientificName}</div>
      </div>
    </button>
  );
};

export default PlantPreviewCard;
