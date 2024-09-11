import { useState } from 'react';
import { HStack, Image, VStack } from '@chakra-ui/react';

import initialImage from '/images/photo_02_main.jpg';
import photo24 from '/images/photo_cold_storage_14.jpg';
import photo20 from '/images/photo_cold_storage_20.jpg';
import photo21 from '/images/photo_cold_storage_21.jpg';
import photo25 from '/images/photo_cold_storage_25.jpg';
import photo09 from '/images/photo_cold_storage_09.jpg';
import photo33 from '/images/photo_cold_storage_33.jpg';
import photo32 from '/images/photo_cold_storage_32.jpg';

const smallerImages = [photo24, photo20, photo21, photo25, photo09, photo33, photo32];

const ImageContainer = () => {
  const [selectedImage, setSelectedImage] = useState(initialImage);
  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <VStack w='full'>
      <Image minW={0} minH={0} width='full' src={selectedImage} borderRadius='5px' />
      <HStack overflow='auto' w={{base: '92vw', lg: '50vw'}}>
        {smallerImages.map((item) => (
          <Image
            minW='131px'
            minH='74px'
            key={item}
            w='full'
            src={item}
            borderRadius='5px'
            onClick={() => handleImageClick(item)}
          />
        ))}
      </HStack>
    </VStack>
  );
};

export default ImageContainer;
