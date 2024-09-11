import i18next from 'i18next';
import { TfiWorld } from 'react-icons/tfi';
import { HiOutlinePhone } from 'react-icons/hi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Button, HStack, Image, Link } from '@chakra-ui/react';

import logoImage from '/images/logo_last.png';
import Select from '../shared/Select';
import { useTranslation } from 'react-i18next';

const languageOptions = [
  { value: 'мк', key: 'mk' },
  { value: 'en', key: 'en' },
];

const Header = () => {
  const { t } = useTranslation();

  const handleChangeLanguage = (value: string) => {
    i18next.changeLanguage(value);
  };

  return (
    <HStack
      top={0}
      bg='white'
      width='full'
      zIndex={100}
      position='sticky'
      justifyContent='space-between'
      paddingY={{ base: 3, lg: 5 }}
      paddingX={{ base: '10px', lg: '50px' }}
    >
      <Image src={logoImage} height={{ base: '55px', lg: 'fit-content' }} />
      <HStack>
        <Button
          leftIcon={<HiOutlinePhone />}
          width={{ base: '100px', lg: '120px' }}
          size={{ xs: 'xs', base: 'sm', lg: 'md' }}
        >
          <Link href={`tel:${t('mobilePhoneOneContent')}`}>{t('contact')}</Link>
        </Button>
        <Select
          options={languageOptions}
          handleOptionChange={handleChangeLanguage}
          currentValue={i18next.language.toUpperCase()}
          buttonProps={{
            variant: 'outline',
            leftIcon: <TfiWorld />,
            justifyContent: 'space-between',
            width: { base: '90px', lg: '100px' },
            rightIcon: <MdKeyboardArrowDown />,
            size: { xs: 'xs', base: 'sm', lg: 'md' },
          }}
        />
      </HStack>
    </HStack>
  );
};

export default Header;
