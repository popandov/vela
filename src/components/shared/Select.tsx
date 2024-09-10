import { Button, ButtonProps, Menu, MenuButton, MenuList, useDisclosure, VStack } from '@chakra-ui/react';

type SelectOption = {
  key: string;
  value: string;
};

interface Props {
  buttonProps?: ButtonProps;
  currentValue: string;
  options: SelectOption[];
  handleOptionChange: (value: string) => void;
}

const Select = ({ currentValue, options, handleOptionChange, buttonProps }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSelect = (value: string) => {
    handleOptionChange(value);
    onClose();
  };

  return (
    <Menu isOpen={isOpen} onClose={onClose}>
      <MenuButton as={Button} onClick={onOpen} {...buttonProps}>
        {currentValue}
      </MenuButton>
      <MenuList as={VStack}>
        {options.map((item) => (
          <Button
            border='0'
            width='full'
            key={item.key}
            variant='outline'
            size={{ xs: 'xs', sm: 'sm', lg: 'md' }}
            onClick={() => handleSelect(item.value)}
          >
            {item.value}
          </Button>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Select;
