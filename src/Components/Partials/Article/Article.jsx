import Style from './article.module.scss';
import LeaveNoOne from '../../../Assets/Images/Image-Leave-No-One.jpg';
import Sustainability from '../../../Assets/Images/Image-Sustainability.jpg';
import Hunger from '../../../Assets/Images/Image-Hunger.jpg'

export const Article = () => {
    return (
        <article className={Style.myarticle}>
            <div>
                <h3>UDFORDRINGER</h3>
                <a href="#top">Tilbage til top</a>
            </div>
            <i>Der er en lang række faktorer der har indvirkning på opfyldelsen af de mål, man gennem aftaler har forpligtiget sig til.</i>
            <h5>Vækst vs bæredygtighed.</h5>
            <div className={Style.imagearticle}>
                <p>En overordnet udfordring er, at der mangler et mere nuanceret syn på sammenhængen mellem vækst og bæredygtighed. Vægtning mellem økonomisk vækst og påvirkninger af miljø og samfund.<br></br><br></br> Opretholdes den nuværende globale, materielle vækst, øges presset på jordens ressourcer.<br></br><br></br> De livsunderstøttende økosystemer bliver i stigende grad overbelastet, og uligheden i verden vil blive større.</p>
                <img src={Sustainability} alt="" />
            </div>
            <h5>Leave no-one behind.</h5>
            <div className={Style.imagearticle}>
                <p>I 2030-dagsordenen er inkluderet princippet om ”leave no one behind”. Princippet tilsiger, at alle lande skal opnå alle verdensmål, uden at nogen lades i stikken.<br></br><br></br> Arbejdet med verdensmålene skal begynde med, at de fattigste og mest marginaliserede adresseres først.<br></br><br></br> Dette er et vigtigt princip, hvortil også efterlevelsen af og respekten for menneskerettigheder er altafgørende.<br></br><br></br> Med andre ord: “Leave No-One behind”.</p>
                <img src={LeaveNoOne} alt="" />
            </div>
            <h5>Fattigdom og sult.</h5>
            <div className={Style.imagearticle}>
            <p>Afskaffelsen af alle former for fattigdom er fortsat en af de største udfordringer for menneskedheden.<br></br><br></br> Mens antallet af mennesker, der lever i ekstrem fattigdom, er halveret - fra 1,9 milliarder i 1990 til 736 millioner i 2015 - kæmper alt for mange statig med at få opfyldt deres mest basale menneskelige behov.<br></br><br></br> Verdensbanken definerer "ekstrem fattigdom" som en personlig indkomst på under 1,9 dollars om dagen - dvs. cirka 13 kroner.</p>
            <img src={Hunger} alt="" />
            </div>
        </article>
    )
}