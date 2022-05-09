import { useParams } from "react-router-dom";
import { ClientSay } from "../../components/clientSay/ClientSay";
import { Welcome } from "../../components/welcome/welcome";
import { WhatDoWeDo } from "../../components/whatDoWeDo/WhatDoWeDo";
import { Explore } from "../../components/explore/explore";
import { scroller } from 'react-scroll';

import './HomePage.scss';
import { useEffect } from "react";
import { Experiments } from "../../components/experiments/experiments";
import { Digging } from "../../components/digging/digging";
import { Text } from '../../helpers';

export function HomePage() {
  let params = useParams();

  if (params.menu) {
    scrollToSection(params.menu)
  }

  useEffect(() => {
    if (params.menu) {
      //scrollToSection(params.menu)
    }
    // code to run after render goes here
  }, []); // <-- empty array means 'run once'

  function scrollToSection(section) {
    section = `#${section}`;
    const element = document.querySelector(section);
    console.log(element)
    scroller.scrollTo(300, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }

  return (
    <div className="home-page">
      <Welcome title={Text.welcome.title} subTitle={Text.welcome.subTitle} img={Text.welcome.img}/>
      <Experiments title={Text.experiment.title} cards={Text.experiment.cards} /> {/* TODO: Need to improve */}
      <WhatDoWeDo title={Text.what.title} subTitle={Text.what.subTitle} cards={Text.what.cards}/>
      <Digging title={Text.digging.title} text={Text.digging.text} img={Text.digging.img}/> 
      <ClientSay /> {/* TODO: Improve the client say and the slider */}
      <Explore title={Text.explore.title} link={Text.explore.link} right={Text.explore.right} left={Text.explore.right}/>
    </div>
  );
}