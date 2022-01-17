import Style from './contact.module.scss'
import Unlogo from '../../../Assets/Images/UN-Logo-Large.png'


export const Contact = () => {
    return (
        <div className={Style.contactcontainer}>
            <div>
                <h3>KONTAKT OS</h3>
                <a href="#top">Tilbage til top</a>
            </div>
            <i>Kontakt os og hør mere om De Sytten Verdensmål. Udfyld formularen herunder:</i>
            <div className={Style.griddiv}>
                <img src={Unlogo} alt="" />
                <form>
                    <input type="text" placeholder='Indtast dit navn' />
                    <input type="text" placeholder='Indtast gyldig E-Mail' />
                    <input type="text" placeholder='Indtast Telefonnummer'/>
                    <textarea rows={12} placeholder='Evt. Besked'></textarea>
                    <div>
                    <button className={Style.cancelbtn}>FORTRYD</button>
                    <button className={Style.sendbtn}>SEND</button>
                    </div>
                </form>
            </div>
        </div>
    )
}