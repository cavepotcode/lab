import { IExplore } from '../../helpers';
import './explore.scss';

export const Explore: React.FC<IExplore>= ({title, left, link, right}) => {

    return (
      <div className="explore">
        <div className="img">
          <img src={left.src} alt={left.alt} />
        </div>
        <div>
          <a href={link} target="_blank">{title}</a>
        </div>
        <div className="img">
            <img src={right.src} alt={right.alt} />
        </div>
      </div>
    )
}
