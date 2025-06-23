
import { useTheme } from 'contexts/ThemeContext';
import React, { useEffect, useState } from 'react';
import Hero from './components/hero'; // TODO Translate it to english
import About from './components/about' 
import Rules from './components/rules';
import Events from './components/events';
import Gallery from './components/gallery';
import Footer from './components/footer';
import { Divider } from '@mui/material';

function BlackThambaLandingPage() {
  const { changeTheme, mode } = useTheme();
  const [previousMode] = useState(mode);


  const changeFavicon = (image: string) => {
    const favicon = document.querySelector("link[rel~='icon']") as HTMLLinkElement
    if (favicon) {
      let path = process.env.PUBLIC_URL;
      console.log(process.env.PUBLIC_URL)
      favicon.href = path + "/" + image;
    }
  }

  useEffect(() => {
    changeTheme('dark');
    changeFavicon('blackthamba.png');
    document.title = "Black Thamba";
    return () => {
      if (previousMode) changeTheme(previousMode);
      changeFavicon('favicon.png');
      document.title = "João Maciel";
    }
  }, [changeTheme, previousMode]);

  return (
    <React.Fragment>
      <Hero />
      <Divider />
      <About />
      <Rules />
      <Events />
      <Gallery />
      <Divider />
      <Footer />
    </React.Fragment>
  );
}

export default BlackThambaLandingPage;
