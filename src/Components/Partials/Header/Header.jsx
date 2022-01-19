import { Nav } from "../Nav/Nav"
import Style from './header.module.scss'
import colorwheel from '../../../Assets/Images/ColorWheel.png'

const navItems = [
    { name: 'VERDENSMÅLENE', path: '/goalspage' },
    { name: 'DELMÅLENE', path: '/subgoalspage' },
    { name: 'UDFORDRINGER', path: '/challengespage' },
    { name: 'KONTAKT OS', path: '/contactpage' }
]

export const Header = (props) => {



    return (
        <header className={Style.myheader}>
            <div className={Style.gridheader}>
                <img src={colorwheel} alt="Color wheel" />
                <div className={Style.headerdiv}>
                    <h1 className={Style.headerh1}>THE GLOBAL GOALS</h1>
                    <h2 className={Style.headerh2}>For sustainable Developement</h2>
                </div>
            </div>
            <Nav navItems={navItems}/>
        </header>
    )
}