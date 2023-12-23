export const theme = Object.freeze({
  colors: {
    primaryWhite: '#F8F9EB',
    primaryBlack: '#010101',
    backgroundGrey: '#f4f4f4',
    lightGrey: '#DFDFDF',
    grey: '#5C5C5C',
    green: '#25FF51',
    blue: '#DBF2FF',

    getRandomHexColor() {
      return Math.floor(Math.random() * 16777215).toString(16);
    },
  },
});
