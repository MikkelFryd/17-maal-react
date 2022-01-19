import Style from './nav.module.scss'
import { Link } from 'react-router-dom'



export const Nav = props => {

	console.log(props);

	return (
		<nav className={Style.headernav}>
				{props && props.navItems && props.navItems.map((value, index) => {
					return (
							<Link to={value.path} key={index}>{value.name}</Link>
					)
				})}
		</nav>
	)
}