import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AllImages , IExperiment, Text} from '../../helpers';
import './experiments.scss';

library.add(faGithub);

export const Experiments: React.FC<IExperiment> = ({title, cards} ) => {
    const welcome = Text.welcome;

    return (
      <div className="experiments">
        <div className='title'>
          {title}
        </div>
        <div className="cards">
          {cards.map((card) => {
            return (
              <div key={card.title} className='card'>
                <img src={card.img.src} alt={card.img.alt}/>
                <div className='title'>{card.title}</div>
                <div className='subTitle'>{card.subTitle}</div>
              </div>)
          })}
        </div>
        <div className="button">
          <a href='https://github.com/cavepotcode/' target='_blank' rel="noopener noreferrer">
            <span>
              <div className='logo'><FontAwesomeIcon icon={['fab', 'github']} /></div>
              Take a look at some of our experiments
              </span>
          </a>
        </div>
        <div className="laboratory">
          <div className="img">
              <img src={AllImages.Laboratory} alt={welcome.img} />
          </div>
          <div className="card">
            <span>
              Other than working on projects that challenge us, <strong>we challenge ourselves</strong> by learning and creating. This is a space where we (and you!) 
              experiment with the <strong>latest technologies </strong> and, of course, why <strong>not create new ones</strong>?
            </span>
            <span>
              Not only do we work in the lab for our company, but also, 
              and very important, to contribute to our community with open source projects.
            </span>   
          </div>
        </div>
      </div>
    )
}
