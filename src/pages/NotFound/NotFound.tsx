import { AllImages, Data } from "../../helpers";


import "./NotFount.scss"

export function NotFoundPage(){
    const notFound = Data["not-found"];
    
    return(
        <div className="not-found">
            <label>{notFound.title}</label>
            <label>{notFound.subtitle}</label>
            <img src={AllImages.Olla} alt={notFound.img} />
        </div>
    );
}