import { Trans, useTranslation } from 'react-i18next';
import { AllImages } from '../../helpers';
import './welcome.scss';

export const Welcome = () => {
    const [t] = useTranslation("global");

    return (
        <div className="welcome">
            <div className="textwrapper">
                <label className="title">{t("welcome.title")}</label>
                <label className="subtitle"><Trans>{t("welcome.subtitle")}</Trans></label>
            </div>
            <div className="img">
                <img src={AllImages.Welcome} alt={t("welcome.alt.img.1")} />
            </div>
        </div>
    )
}
