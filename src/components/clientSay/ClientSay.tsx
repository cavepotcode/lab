import { useTranslation } from 'react-i18next';
import { AllImages } from '../../helpers';
import Slider from '../slider/Slider';
import './ClientSay.scss';

export const ClientSay = () => {
    const [t] = useTranslation("global");

    return (
        <div className="client-say">
            <div className="label-wrapper">
                <label>Quotes that inspire us</label>
            </div>
            <div className="right-container">
                <Slider />
            </div>
        </div>
    )
}
