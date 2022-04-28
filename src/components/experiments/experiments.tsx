import { Trans, useTranslation } from 'react-i18next';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
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
        <div className='button'>
          <a href='https://github.com/cavepotcode/' target='_blank'>
            <span>Take a look at some of our experiments</span>
          </a>
        </div>
      </div>
    )
}
