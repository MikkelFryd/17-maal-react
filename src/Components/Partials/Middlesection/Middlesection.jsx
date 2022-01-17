import Style from './middlesection.module.scss'
import i1 from '../../../Assets/Images/Goals/1.png'
import i2 from '../../../Assets/Images/Goals/2.png'
import i3 from '../../../Assets/Images/Goals/3.png'
import i4 from '../../../Assets/Images/Goals/4.png'
import i5 from '../../../Assets/Images/Goals/5.png'
import i6 from '../../../Assets/Images/Goals/6.png'
import i7 from '../../../Assets/Images/Goals/7.png'
import i8 from '../../../Assets/Images/Goals/8.png'
import i9 from '../../../Assets/Images/Goals/9.png'
import i10 from '../../../Assets/Images/Goals/10.png'
import i11 from '../../../Assets/Images/Goals/11.png'
import i12 from '../../../Assets/Images/Goals/12.png'
import i13 from '../../../Assets/Images/Goals/13.png'
import i14 from '../../../Assets/Images/Goals/14.png'
import i15 from '../../../Assets/Images/Goals/15.png'
import i16 from '../../../Assets/Images/Goals/16.png'
import i17 from '../../../Assets/Images/Goals/17.png'
import i18 from '../../../Assets/Images/Goals/18.png'


const imgArr = [
    i1,
    i2,
    i3,
    i4,
    i5,
    i6,
    i7,
    i8,
    i9,
    i10,
    i11,
    i12,
    i13,
    i14,
    i15,
    i16,
    i17,
    i18,
]






export const Middlesection = () => {
    

        // imgArr.sort((a, b) => a - b) 




    return (
        <section className={Style.middlesection}>
            <div>
                <h3>DELMÅLENE</h3>
                <a href="#top">Tilbage til top</a>
            </div>
                <i>FN's 17 Verdensmål er opdelt i 169 delmål. Delmålene er mere konkrete mål for, hvordan Verdensmålene skal opfyldes. For at måle på hvert delmål har FN formuleret en række indikatorer for de enkelte delmål.<br></br><br></br></i>
                <b>Se eksempler på enkelte delmål her:</b><br></br><br></br>
                <div className={Style.goalcontainer}>
                    {imgArr.map((r, index) => {
                        return (
                            <img src={r} key={index} alt="" />
                        )
                    })}
                    
                </div>
        </section>
    )
}