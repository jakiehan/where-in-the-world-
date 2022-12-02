const media = {
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
}



export const darkTheme = {
  color: {
    text: '#fff',
    bgBody: '#20262b',
    bgElem: '#2b3238',
    placeholder: '#a8a8a8',
    shadow: '0 0 5px rgb(245, 245, 245, .2)',
    shadowHov: '0 1px 5px rgb(122, 135, 151, .9)',
    shadowText: '1px 1px 1px rgb(0, 0, 0, .9)'
  },
  media,
}

export const lightTheme = {
  color: {
    text: '#000',
    bgBody: '#fafafa',
    bgElem: '#fff',
    placeholder: '#757575',
    shadow: '0 8px 24px rgb(149, 157, 165, .2)',
    shadowHov: '0 1px 5px rgb(122, 135, 151, .9)',
    shadowText: '1px 1px 1px rgb(119, 136, 153, .4)'
  },
  media,
}
