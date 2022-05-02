import { Trans, useTranslation } from 'react-i18next';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AllImages } from '../../helpers';
import './experiments.scss';

library.add(faGithub);

export const Experiments = () => {
    const [t] = useTranslation("global");

    return (
      <div className="experiments">
        <div className='title'>
          What are  we seeking?
        </div>
        <div className="cards">
          <div className='card'>
            <img src={AllImages.learn} alt='learn'/>
            <div className='title'>Learn </div>
            <div className='subTitle'>to create</div>
          </div>
          <div className='card'>
            <img src={AllImages.create} alt='create'/>
            <div className='title'>Create </div>
            <div className='subTitle'>to disrupt </div>
          </div>
          <div className='card'>
            <img src={AllImages.disrupt} alt='disrupt'/>
            <div className='title'>Disrupt </div>
            <div className='subTitle'>to discover </div>
          </div>
        </div>
        <div className="button">
          <a href='https://github.com/cavepotcode/' target='_blank'>
            <span>
              <div className='logo'><FontAwesomeIcon icon={['fab', 'github']} /></div>
              Take a look at some of our experiments
              </span>
          </a>
        </div>
        <div className="laboratory">
          <div className="img">
              <img src={AllImages.Laboratory} alt={t("welcome.alt.img.1")} />
          </div>
          <div className="card">
            <span>
              Other than working on projects that challenge us, <strong>we challenge ourselves</strong> by learning and creating. This is a space where we (and you!).  
              Experiment with the <strong>latest technologies </strong> and, of course, why <strong>not create new ones</strong>?
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
