import { AllImages } from '../../helpers';
import './explore.scss';

export const Explore = () => {

    return (
      <div className="explore">
        <div className="img">
          <img src={AllImages.exploreLeft} alt="Left" />
        </div>
        <div>
          <a href='http://cavepot.com/contact' target="_blank">let´s explore  together</a>
        </div>
        <div className="img">
            <img src={AllImages.exploreRight} alt="Right" />
        </div>
      </div>
    )
}
