import { AllImages } from '../../helpers';
import './digging.scss';

export const Digging = () => {

    return (
      <div className="digging">
        <div className='content'>
          <div className="img">
            <img src={AllImages.woman} alt="Left" />
          </div>
          <div className='title'>Digging outside the cave</div>
          <div className='text'>
            We <strong>love learning</strong> about the how to and why of things, 
            this is why whenever a <strong>new technology</strong> comes out of a new technology is introduced to 
            us we bring it to the lab to explore and analyze it. Sometimes it's not necessarily a new 
            technology or a combination, sometimes it's the other way around, we come across a problem that 
            we are not sure about how to solve and here we can test, and <strong>discover the best possible solution.</strong> 
          </div>
        </div>
      </div>
    )
}
