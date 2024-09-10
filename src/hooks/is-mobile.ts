import { useMediaQuery } from '@chakra-ui/react';

const useIsMobile = () => {
  const [isBelow1280px] = useMediaQuery('(max-width: 992px)');

  return isBelow1280px;
};

export default useIsMobile;
