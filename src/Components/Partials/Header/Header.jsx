import { Nav } from "../Nav/Nav"
import Style from './header.module.scss'
import colorwheel from '../../../Assets/Images/ColorWheel.png'

export const Header = () => {
    return (
        <header className={Style.myheader}>
            <div className={Style.gridheader}>
                <img src={colorwheel} alt="Color wheel" />
                <div className={Style.headerdiv}>
                    <h1 className={Style.headerh1}>THE GLOBAL GOALS</h1>
                    <h2 className={Style.headerh2}>For sustainable Developement</h2>
                </div>
            </div>
            <Nav/>
        </header>
    )
}