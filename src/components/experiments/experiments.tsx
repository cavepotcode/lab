import { Trans, useTranslation } from 'react-i18next';
import './experiments.scss';

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
        {/*
        <div className="textwrapper">
            <label className="title">{t("technologies-changes.title")}</label>
            <label className="subtitle"><Trans>{t("technologies-changes.subtitle")}</Trans></label>
        </div>
        <div className="img-technologies">
            <img src={AllImages.Welcome} alt={t("technologies-changes.alt.img.1")} />
        </div>
    */}
      </div>
    )
}
