import Slider from '../slider/Slider';
import './ClientSay.scss';

export const ClientSay = () => {
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
