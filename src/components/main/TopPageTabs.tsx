import { useTranslation } from 'react-i18next';
import { FaRegSnowflake } from 'react-icons/fa';
import { HiOutlineArchiveBox } from 'react-icons/hi2';
import { Box, Icon, Tab, TabList, TabPanel, TabPanels, TabProps, Tabs, useToken, VStack } from '@chakra-ui/react';
import ColdStorage from './ColdStorage';
import Rooms from './Rooms';
import Machines from './Machines';
import OtherActivities from './OtherActivities';
import GeneralInfo from './GeneralInfo';
import Warehouse from './Warehouse';

const sharedStyled: TabProps = {
  gap: 2,
  minW: '50%',
  paddingX: '0',
  borderBottom: 0,
  _active: { color: 'red.700' },
  _selected: { color: 'red.700' },
  maxH: { base: '45px', lg: '53px' },
  fontSize: { base: '18px', lg: '24px' },
  lineHeight: { base: '20px', lg: '53px' },
};

const TopPageTabs = () => {
  const { t } = useTranslation();
  const [gray500] = useToken('colors', ['gray.500']);

  return (
    <Tabs orientation='horizontal' width='full' paddingX={{ base: '10px', lg: '50px' }}>
      <TabList
        bg='white'
        zIndex={200}
        color='gray.500'
        borderRadius='5px'
        marginBottom={{ base: '10px' }}
        justifyContent='space-around'
        border={`1px solid ${gray500}`}
      >
        <Tab {...sharedStyled}>
          <Icon as={FaRegSnowflake} />
          {t('coolingStorage')}
        </Tab>
        <Box h={{ base: '28px', lg: '42px' }} minW='1px' bg='gray.500' position='relative' top='1' />
        <Tab {...sharedStyled}>
          <Icon as={HiOutlineArchiveBox} />
          {t('warehouse')}
        </Tab>
      </TabList>
      <TabPanels pt={8}>
        <TabPanel bg='gray.200' borderRadius='5px'>
          <VStack spacing={{ base: 12 }} p={{lg: 3}}>
            <ColdStorage />
            <Rooms />
            <Machines />
            <OtherActivities />
          </VStack>
        </TabPanel>
        <TabPanel bg='gray.200' borderRadius='5px'>
          <VStack spacing={{ base: 9 }}>
            <GeneralInfo />
            <Warehouse />
          </VStack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TopPageTabs;
