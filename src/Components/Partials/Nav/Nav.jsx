import Style from './nav.module.scss'


export const Nav = () => {
    return (
        <nav className={Style.headernav}>
            <a href="#verdensmålene">VERDENSMÅLENE</a>
            <a href="#delmålene">DELMÅLENE</a>
            <a href="#udfordringer">UDFORDRINGER</a>
            <a href="#kontakt">KONTAKT</a>
        </nav>
    )
}