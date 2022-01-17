import Style from './footer.module.scss'
import PartnerUNDP from '../../../Assets/Images/Partner-UNDP-Full.png'

export const Footer = () => {

    return (
        <footer className={Style.myfooter}>
            <div>
                <h3>Eksterne Links:</h3>
                <a href="#https://www.verdensmaalene.dk/">https://www.verdensmaalene.dk/</a><br></br><br></br>
                <a href="#https://www.globalgoals.org/">https://www.globalgoals.org/</a><br></br><br></br>
                <a href="#https://www.unenvironment.org/">https://www.unenvironment.org/</a><br></br><br></br>
                <a href="#https://ve.dk/klimaberegner/">https://ve.dk/klimaberegner/</a><br></br><br></br>
            </div>
            <div>
                <h3>Ressourcer:</h3>
                <p>Bliver Verden Bedre  (.pdf)</p>
                <p>Spotlight Rapport  (.pdf)</p>
            </div>
            <div>
                <img src={PartnerUNDP} alt="" />
            </div>
        </footer>
    )
}