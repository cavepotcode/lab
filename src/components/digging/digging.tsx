import { IDigging } from '../../helpers';
import './digging.scss';

export const Digging: React.FC<IDigging> = ({title, text, img}) => {

    return (
      <div className="digging">
        <div className='content'>
          <div className="img">
            <img src={img.src} alt={img.alt} />
          </div>
          <div className='title'>{title}</div>
          <div className='text' dangerouslySetInnerHTML={{__html: text}}></div>
        </div>
      </div>
    )
}
