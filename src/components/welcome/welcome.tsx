import { IWelcome } from '../../helpers';
import './welcome.scss';

export const Welcome: React.FC<IWelcome> = ({title, subTitle, img}) => {

    return (
        <div className="welcome">
            <div className="textwrapper">
                <label className="title">{title}</label>
                <label className="subtitle">{subTitle}</label>
            </div>
            <div className="img">
                <img src={img} alt={img} />
            </div>
        </div>
    )
}
