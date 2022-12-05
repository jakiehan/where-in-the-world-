const darkTheme = {
  text: '#fff',
  bgBody: '#20262b',
  bgElem: '#2b3238',
  placeholder: '#a8a8a8',
  shadow: '0 0 5px rgb(245, 245, 245, .2)',
  shadowHov: '0 1px 5px rgb(122, 135, 151, .9)',
  shadowImgHov: '2px 2px 10px rgb(122, 135, 151, .9)',
  shadowText: '1px 1px 1px rgb(0, 0, 0, .9)'
}

const lightTheme = {
  text: '#000',
  bgBody: '#fafafa',
  bgElem: '#fff',
  placeholder: '#757575',
  shadow: '0 8px 24px rgb(149, 157, 165, .2)',
  shadowHov: '0 1px 5px rgb(122, 135, 151, .9)',
  shadowImgHov: '2px 2px 10px rgb(122, 135, 151, .9)',
  shadowText: '1px 1px 1px rgb(119, 136, 153, .4)'
}

const defaultTheme = {
  borderRadius: {
    sm: '4px',
    md: '5px',
    lg: '6px',
  },
  fontWeight: {
    sm: '300px',
    md: '600px',
    lg: '800px',
  },
  media: {
    mobile: '480px',
    tablet: {
      min: '481px',
      max: '767px',
    },
    portraitTablets: {
      min: '768px',
      max: '991px',
    },
    mediumDesktops: {
      min: '992px',
      max: '1199px',
    },
    desktop: '1200px'
  },
}

const theme = {
  dark: {
    color: darkTheme,
    ...defaultTheme
  },
  light: {
    color: lightTheme,
    ...defaultTheme
  }
}

export default theme;
