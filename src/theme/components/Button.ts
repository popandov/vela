export const Button = {
  baseStyle: {
    borderRadius: '6px',
  },
  variants: {
    solid: {
      background: 'red.500',
      color: 'white',
      _active: {
        background: 'red.500',
        color: 'white',
      },
      _hover: {
        background: 'red.600',
        color: 'white',
        _disabled: {
          background: 'red.600',
          color: 'white',
        },
      },
      _disabled: {
        background: 'red.600',
        color: 'white',
      },
    },
    outline: {
      background: 'transparent',
      color: 'black',
      border: '1px solid',
      borderColor: 'black',
      _active: {
        background: 'transparent',
        color: 'black',
        border: '1px solid',
        borderColor: 'black',
      },
      _hover: {
        background: 'white',
        color: 'black',
        border: '1px solid',
        borderColor: 'black',
        _disabled: {
          background: 'white',
          color: 'black',
          border: '1px solid',
          borderColor: 'black',
        },
      },
      _disabled: {
        background: 'white',
        color: 'black',
        border: '1px solid',
        borderColor: 'black',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
};
