import { AllImages } from '../helpers';
import { ICard } from "../components/whatDoWeDo/WhatDoWeDo";

export interface IImg {
  src: string;
  alt: string;
}

export interface IExperimentCard {
  title: string;
  subTitle: string;
  img: IImg;
}

export interface IWhat {
  title: string;
  subTitle: string;
  cards: Array<ICard>
}

export interface IWelcome {
  title: string;
  subTitle: string;
  img: string;
}

export interface IExperiment {
  title: string;
  cards : Array<IExperimentCard>
}

interface IText {
  what: IWhat; 
  welcome: IWelcome;
  experiment: IExperiment;
}

export const Text: IText = {
  welcome: {
    title: 'Hi! Welcome to our exploration lab!',
    subTitle:'Get your gloves and safety glasses on, because we’re about to make something big.',
    img: AllImages.Welcome
  },
  what:{
    title: 'What do we do here?',
    subTitle: 'You know what they say about learning the rules before breaking them? Exactly.',
    cards:[
      {title: "", text: "Breaking rules is often the only way to explore new ideas! If you stick to them all the time, how will you get to know your authentic potencial?", buttonLink: "https://cavepot.com", buttonText: "Learn More"},
      {title: "", text: "This is a free, no-judgement and safe zone. You don’t have to be a genius to get involved! Our differences are what makes us so unique!", buttonLink: "https://cavepot.com", buttonText: "Wanna join?"},
      {title: "", text: "We are curious about many things. That’s why, whenever a new technology comes out we bring it to our lab so we can explore it.", buttonLink: "https://blog.cavepot.com", buttonText: "Whats new?"},
      {title: "", text: "Here is where we cook some of our greatest ideas! All ingredients are important (specially the ones you bring!)", buttonLink: "https://cavepot.com", buttonText: "Share your ideas"}
    ]
  },
  experiment: {
    title: 'What are  we seeking?',
    cards: [
      {title: 'Learn', subTitle: 'to create', img: {src: AllImages.learn, alt: 'learn'}},
      {title: 'Create', subTitle: 'to disrupt', img: {src: AllImages.create, alt: 'create'}},
      {title: 'Disrupt', subTitle: 'to discover', img: {src: AllImages.disrupt, alt: 'disrupt'}}
    ]
  }
}