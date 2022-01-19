import Style from './middlesection.module.scss'
import { imgArr } from './imgArr'



export const Middlesection = () => {
    

        // imgArr.sort((a, b) => a - b) 




    return (
        <section className={Style.middlesection}>
            <div>
                <h3>DELMÅLENE</h3>
                <a href=".">Tilbage til top</a>
            </div>
                <i>FN's 17 Verdensmål er opdelt i 169 delmål. Delmålene er mere konkrete mål for, hvordan Verdensmålene skal opfyldes. For at måle på hvert delmål har FN formuleret en række indikatorer for de enkelte delmål.<br></br><br></br></i>
                <b>Se eksempler på enkelte delmål her:</b><br></br><br></br>
                <div className={Style.goalcontainer}>
                    {imgArr.map((item, index) => {
                        return (
                            <img src={item} key={index} alt="" />
                        )
                    })}
                </div>
        </section>
    )
}