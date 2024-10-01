import { useState } from 'react';
import {
  HStack,
  Image,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  IconButton,
  Center,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'; // Import icons for buttons

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
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(smallerImages[index]); // Set the selected image based on index
    setIsOpen(true); // Open the modal on image click
  };

  const closeModal = () => {
    setIsOpen(false); // Close the modal
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % smallerImages.length; // Loop back to the start
    setCurrentIndex(nextIndex);
    setSelectedImage(smallerImages[nextIndex]); // Update selected image
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + smallerImages.length) % smallerImages.length; // Loop to the end
    setCurrentIndex(prevIndex);
    setSelectedImage(smallerImages[prevIndex]); // Update selected image
  };

  return (
    <VStack w='full'>
      <Image minW={0} minH={0} width='full' src={selectedImage} borderRadius='5px' />
      <HStack overflow='auto' w={{ base: '90vw', lg: '50vw' }}>
        {smallerImages.map((item, index) => (
          <Image
            minW='131px'
            minH='74px'
            key={item}
            w='full'
            src={item}
            borderRadius='5px'
            onClick={() => handleImageClick(index)}
            cursor='pointer'
            _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s' }}
          />
        ))}
      </HStack>

      {/* Modal for displaying the selected image */}
      <Modal isOpen={isOpen} onClose={closeModal} isCentered>
        <ModalOverlay />
        <ModalContent maxW="70vw" maxH="70vh"> {/* Set max width and height */}
          {/* <ModalHeader>Image Preview</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody display='flex' justifyContent='center' position='relative'>
            <Center>
              <IconButton
                icon={<ChevronLeftIcon />}
                aria-label='Previous Image'
                onClick={handlePrev}
                isDisabled={smallerImages.length <= 1} // Disable if only one image
                position='absolute'
                left='10px'
                zIndex='1' />
            </Center>
            <Image
              src={selectedImage}
              minW={0} 
              minH={0} 
              width='100%'  // Use 100% to fill the modal
              maxH='65vh'
              borderRadius='5px'
              objectFit='contain' />
            <Center>
              <IconButton
                icon={<ChevronRightIcon />}
                aria-label='Next Image'
                onClick={handleNext}
                isDisabled={smallerImages.length <= 1} // Disable if only one image
                position='absolute'
                right='10px'
                zIndex='1'/>
            </Center>
            
          </ModalBody>
        </ModalContent>
      </Modal>

    </VStack>
  );
};

export default ImageContainer;
