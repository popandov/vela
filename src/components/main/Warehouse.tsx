import { Stack, VStack, Image, Text } from '@chakra-ui/react';
import MainContentTitle from './MainContentTitlte';
import { BiMapAlt } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';

import warehouseImage from '/images/photo_warehouse_33.jpg';

const Warehouse = () => {
  const { t } = useTranslation();
  return (
    <Stack w='full' alignItems='start' fontSize={{ base: '20px' }} lineHeight={{ base: '24px' }} spacing={8}>
      <MainContentTitle
        icon={BiMapAlt}
        fontSize={{ base: '22px' }}
        lineHeight={{ base: '26px' }}
        title={t('warehouse').toUpperCase()}
      />
      <VStack fontSize={{ base: '16px' }} lineHeight={{ base: '19px' }} w='full' alignItems='start' gap='10px'>
        <Text fontWeight={{ base: 700 }}>{t('dimensions')}</Text>
        <VStack spacing={0} w='full' alignItems='start'>
          <Text>{t('warehouseDimensionsDescriptionOne')}</Text>
          <Text>{t('warehouseDimensionDescriptionTwo')}</Text>
        </VStack>
        <Text fontWeight={{ base: 700 }}>{t('totalWarehouseDimensions')}</Text>
      </VStack>
      <Image minW={0} minH={0} src={warehouseImage} />
    </Stack>
  );
};

export default Warehouse;
