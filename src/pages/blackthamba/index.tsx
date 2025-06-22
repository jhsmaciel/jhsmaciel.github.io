
import { useTheme } from 'contexts/ThemeContext';
import React, { useEffect, useState } from 'react';

function BlackThambaLandingPage() {
  const { changeTheme, mode } = useTheme();
  const [previousMode] = useState(mode);


  const changeFavicon = (imagePath: string) => {
    const favicon = document.querySelector("link[rel~='icon']") as HTMLLinkElement
    if (favicon) {
      let path = process.env.PUBLIC_URL;
      favicon.href = path + imagePath;
    }
  }

  useEffect(() => {
    changeTheme('dark');
    changeFavicon('/blackthamba.png');
    document.title = "Black Thamba";
    return () => {
      console.log('previousMode', previousMode);
      if (previousMode) changeTheme(previousMode);
      changeFavicon('/favicon.png');
      document.title = "João Maciel";
    }
  }, []);

  return (
    <React.Fragment>
      <div>Black thamba MC</div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <section id="inicio">Inicio</section>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <section id="sobre">Sobre</section>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <section id="estatuto">Estatuto</section>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <section id="eventos">Eventos</section>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <section id="galeria">Galeria</section>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <section id="contato">Contato</section>
    </React.Fragment>
  );
}

export default BlackThambaLandingPage;
