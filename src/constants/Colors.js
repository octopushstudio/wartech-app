const mainColors = {
  green1: '#0BCAD4',
  blue1: '#E6F5FF',
  blue2: '#3750B2',
  dark1: '#112340',
  dark2: '#495A75',
  dark3: '#8092AF',
  gray1: '#7D8797',
  gray2: '#E9E9E9',
  gray3: '#cccccc',
  gray4: '#B1B7C2',
  black1: '#000000',
  black2: 'rgba(0, 0, 0, 0.5)',
  red1: '#E06379',
  orange1: '#FFD647',
};

// Setup Color
export const colors = {
  brandColor: '#4e89d3',
  primary: mainColors.orange1,
  brandColor: mainColors.brand,
  secondary: mainColors.dark1,
  tertiary: mainColors.blue2,
  disable: mainColors.gray3,
  white: 'white',
  black: 'black',
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.gray1,
    menuInactive: mainColors.dark2,
    menuActive: mainColors.blue1,
    subtitle: mainColors.dark3,
  },
  button: {
    primary: {
      background: mainColors.orange1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.dark1,
    },
    disable: {
      background: mainColors.gray3,
      text: mainColors.gray4,
    },
  },
  border: mainColors.gray2,
  cardLight: mainColors.blue1,
  loadingBackground: mainColors.black2,
  error: mainColors.red1,
};
