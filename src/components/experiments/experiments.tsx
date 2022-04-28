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
        <div className="cards">
          <div className='card'>
            <div className='title'>Learn to create</div>
            <div className='subTitle'>gdfgdsa to disrupt ss dffg drhdh </div>
          </div>
          <div className='card'>
            <div className='title'>Create to disrupt</div>
            <div className='subTitle'>hgfdhfdgs to disrupt ss dffg drhdh </div>
          </div>
          <div className='card'>
            <div className='title'>Disrupt to discover</div>
            <div className='subTitle'>gfdhfdhd fshfdshf dshdfsh to disrupt ss dffg drhdh </div>
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
              Other than working on projects that challenge us, we challenge ourselves learning and creating. This is a space where we (and you!)  experiment with the latest technologies and, of course, why not create new ones?
              Not only do we work in the lab for our company, but also, and very important, to contribute to our community with open source projects.</span>   
          </div>
        </div>
      </div>
    )
}
