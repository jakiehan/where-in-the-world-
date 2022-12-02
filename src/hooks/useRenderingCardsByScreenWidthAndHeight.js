import { useState, useEffect } from 'react';

export const useRenderingCardsByScreenWidthAndHeight = () => {

  const [initialWindowInnerWidth, setInitialWindowInnerWidth] = useState(window.innerWidth);
  const [initialWindowInnerHeight, setInitialWindowInnerHeight] = useState(window.innerHeight);
  const [currentWindowInnerWidth, setCurrentWindowInnerWidth] = useState(window.innerWidth);
  const [initialNumberOfCards, setInitialNumberOfCards] = useState(0);
  const [additionalNumberOfCards, setAdditionalNumberOfCards] = useState(0);

  const cards = JSON.parse(localStorage.getItem('cards'))
  const h = 310

  const setUpdateTimer = () => {
    setTimeout(() => {
      setCurrentWindowInnerWidth(window.innerWidth);
    }, 1000)
  }

  const setNumberCards = () => {

    if (cards !== null) {
      setInitialNumberOfCards(cards)
    } else {
      if (currentWindowInnerWidth >= 1217) {
        setInitialNumberOfCards(Math.trunc(initialWindowInnerHeight / h * 4));
      } else if (currentWindowInnerWidth > 921 ) {
        setInitialNumberOfCards(Math.trunc(initialWindowInnerHeight / h * 3));
      } else {
        setInitialNumberOfCards(Math.trunc(initialWindowInnerHeight / h * 2));
      }
    }
  }

  const setAdditionalNumberCards = () => {

    if (currentWindowInnerWidth >= 1217) {
      setAdditionalNumberOfCards(12);
    } else if (currentWindowInnerWidth > 921) {
      setAdditionalNumberOfCards(9);
    } else {
      setAdditionalNumberOfCards(6);
    }
  }

  const defineAdditionalNumberOfCardsWhenChangingWidth = () => {

    if ((currentWindowInnerWidth > 921 && currentWindowInnerWidth < 1217) && (initialNumberOfCards < Math.trunc(initialWindowInnerHeight) / h * 3)) {
      setInitialNumberOfCards(prevState => prevState + ((Math.trunc(initialWindowInnerHeight) / h * 3) - initialNumberOfCards))
    }
    if (currentWindowInnerWidth > 1217 && initialNumberOfCards < Math.trunc(initialWindowInnerHeight) / h * 4) {
      setInitialNumberOfCards(prevState => prevState + ((Math.trunc(initialWindowInnerHeight) / h * 4) - initialNumberOfCards))
    }
  }

  const handleScroll = (e) => {

    if ((e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + initialWindowInnerHeight)) < 100) {
      setInitialNumberOfCards(prevState => prevState + additionalNumberOfCards)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  })

  useEffect(() => {

    if (initialWindowInnerWidth === currentWindowInnerWidth) {
      setNumberCards();
      setAdditionalNumberCards();
    } else {
      setAdditionalNumberCards();
      defineAdditionalNumberOfCardsWhenChangingWidth();
    }

    window.addEventListener('resize', setUpdateTimer);
    return () => window.removeEventListener('resize', setUpdateTimer);

  }, [currentWindowInnerWidth])

  return { initialNumberOfCards }
}