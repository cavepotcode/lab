import { useParams } from "react-router-dom";
import { ClientSay } from "../../components/clientSay/ClientSay";
import { HowWeDoIt } from "../../components/howWeDoIt/HowWeDoIt";
import { Investigation } from "../../components/investigation/Investigation";
import { Welcome } from "../../components/welcome/welcome";
import { TechnologiesThatWeUse } from "../../components/technologiesThatWeUse/TechnologiesThatWeUse";
import { WhatDoWeDo } from "../../components/whatDoWeDo/WhatDoWeDo";
import WhatIsCavepot from "../../components/whatIsCavepot/WhatIsCavepot";
import { Link, scroller } from 'react-scroll';

import './HomePage.scss';
import { useEffect } from "react";
import { Experiments } from "../../components/experiments/experiments";
import { ICard } from "../../components/whatDoWeDo/WhatDoWeDo";

const cards: Array<ICard> = [
  {title: "", text: "Breaking rules is often the only way to explore new ideas! If you stick to them all the time, how will you get to know your authentic potencial?", buttonLink: "https://cavepot.com", buttonText: "Learn More"},
  {title: "", text: "This is a free, no-judgement and safe zone. You don’t have to br a genius to get involved! Our differences are what makes us so unique!", buttonLink: "https://cavepot.com", buttonText: "Wanna join?"},
  {title: "", text: "We are curious about many things. That’s why, whenever a new technology comes out we bring it to our lab so we can explore it.", buttonLink: "https://blog.cavepot.com", buttonText: "Whats new?"},
  {title: "", text: "Here is where we cook some of our greatest ideas! All ingredients are important (specially the ones you bring!)", buttonLink: "https://cavepot.com", buttonText: "Share your ideas"}
]

export function HomePage() {
  let params = useParams();

  if (params.menu) {
    scrollToSection(params.menu)
  }

  useEffect(() => {
    if (params.menu) {
        scrollToSection(params.menu)
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
      <Welcome />
      <Experiments />
      <WhatDoWeDo 
        title="What do we here?" 
        subTitle="You know what they say about learning the rules before breaking them? Exactly." 
        cards={cards}/>
      {/*
      <WhatIsCavepot />
      <HowWeDoIt />
      <TechnologiesThatWeUse />
      <ClientSay />
      <Investigation />
      */}
    </div>
  );
}