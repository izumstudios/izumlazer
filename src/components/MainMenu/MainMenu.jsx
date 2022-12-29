import React, { useState } from 'react'
import logo from '../../img/logo.webp'
import styles from './MainMenu.module.scss'
import { Link } from 'react-scroll'
import { HiMenu, HiOutlineX } from 'react-icons/hi'

const menu = [
	{
		id: 1,
		menuName: 'Главная',
		toLink: 'Top',
	},
	{
		id: 2,
		menuName: 'Мощный аппарат',
		toLink: 'Apparat',
	},
	{
		id: 3,
		menuName: 'Наши специалисты',
		toLink: 'Masters',
	},
	{
		id: 4,
		menuName: 'Отзывы',
		toLink: 'Reviews',
	},
	{
		id: 5,
		menuName: 'Цены',
		toLink: 'Price',
	},
	{
		id: 6,
		menuName: 'Абонементы',
		toLink: 'Price',
	},
	{
		id: 7,
		menuName: 'Контакты',
		toLink: 'Contacts',
	},
]

const MainMenu = () => {
	const [nav, setNav] = useState(false)
	return (
		<div className={styles.container}>
			<nav>
				<Link
					to='Top'
					spy={true}
					offset={30}
					smooth={true}
					duration={300}
					activeClass={styles.active}
					href='/'
				>
					<img src={logo} alt='Логотип izumstudios' width={135} height={83} />
				</Link>
				<div className={styles.mainMenu}>
					<ul>
						{menu.map(item => {
							return (
								<li key={item.id}>
									<Link
										key={item.id}
										to={item.toLink}
										spy={true}
										offset={-40}
										smooth={true}
										duration={300}
										activeClass={styles.active}
										href='/'
									>
										{item.menuName}
									</Link>
								</li>
							)
						})}
					</ul>
				</div>
			</nav>
			<div className={styles.icon} onClick={() => setNav(!nav)}>
				{nav ? <HiOutlineX size={30} /> : <HiMenu size={30} />}
			</div>
			<div className={nav ? styles.popup : styles.none}>
				<ul>
					{menu.map(item => {
						return (
							<li key={item.id}>
								<Link
									key={item.id}
									to={item.toLink}
									spy={true}
									smooth={true}
									duration={300}
									activeClass={styles.active}
									href='/'
									onClick={() => setNav(!nav)}
								>
									{item.menuName}
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default MainMenu
