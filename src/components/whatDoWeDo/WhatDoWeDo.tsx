import { useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { AllImages } from '../../helpers';

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
        <div className='card'>
          {/*<div className='img-wrapper'>
            <img src={AllImages.StaffAugmentation} />
          </div>
          */}
          {/*<label><Trans>{card.title}</Trans></label>*/}
          <p><Trans>{card.text}</Trans></p>
          <NavLink to={card.buttonLink}>
              <button>
                  {card.buttonText}
              </button>
          </NavLink>
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
