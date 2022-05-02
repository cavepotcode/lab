import { useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";

import './WhatDoWeDo.scss';

export interface ICard {
  title: string,
  text: string,
  buttonLink: string,
  buttonText: string
}

export interface IWhatDoWeDoProps {
  title: string,
  subTitle: string
  cards: Array<ICard>,
  delay?: number;
}

export const WhatDoWeDo: React.FC<IWhatDoWeDoProps> = ({title, subTitle, cards, delay = 0 , ...props}) => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animation');
        entry.target.style.animationDelay = delay + 's'
        delay = delay + 0.2;
        return;
      }
    });
    delay = 0;
  });

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(item => {
        observer.observe(item);
    });
  }, [])

  const renderCard = (card: ICard) =>{
    return (
        <div key={uuidv4()} className='card'>
          <p>{card.text}</p>
          <a href={card.buttonLink} target="_blank">
            {card.buttonText}
          </a>
        </div>
    )
  }

  return (
      <div className="what-do-we-do">
        <div className="title">
          <label>{title}</label>
          <label>{subTitle}</label>
        </div>
        <div className="cards-wrapper">
          {cards.map((card: ICard) => renderCard(card))}
        </div>
      </div>
  );
}
