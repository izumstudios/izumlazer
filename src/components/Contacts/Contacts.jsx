import React from 'react'
import styles from './Contacts.module.scss'
import metro from '../../img/metro.webp'
import map from '../../img/map.webp'
import darkBlue from '../../img/darkBlue.webp'
import blue from '../../img/blue.webp'
import green from '../../img/green.webp'
import grey from '../../img/grey.webp'
import orange from '../../img/orange.webp'
import purple from '../../img/purple.webp'
import red from '../../img/red.webp'
import yellow from '../../img/yellow.webp'

const Contacts = () => {
	return (
		<div className={styles.container} id='Contacts'>
			<h1>Удобное расположение студий</h1>
			<div className={styles.information}>
				<div className={styles.leftInfo}>
					<div className={styles.infoTitle}>
						<a className='mgo-number' href='tel:+74951506977'>
							8 (495) 150-69-77
						</a>
						<a href='mailto:mail to:izumstudios@mail.ru'>izumstudios@mail.ru</a>
					</div>
					<div className={styles.adress}>
						<p>
							<img src={green} alt='метро' /> <img src={yellow} alt='метро' />{' '}
							<img src={orange} alt='метро' />{' '}
							<span>&nbsp;Новокузнецкая,&nbsp;</span> ул.Пятницкая, 20, стр.1
						</p>
						<p>
							<img src={purple} alt='метро' /> <img src={yellow} alt='метро' />{' '}
							<img src={metro} alt='метро' />{' '}
							<span>&nbsp;Таганская,&nbsp;</span> ул.Николоямская, 40, стр.1
						</p>
						<p>
							<img src={grey} alt='метро' /> <img src={metro} alt='метро' />{' '}
							<span>&nbsp;Новослободская,&nbsp;</span>ул.Долгоруковская, 4А
						</p>
						<p>
							<img src={red} alt='метро' /> <img src={metro} alt='метро' />{' '}
							<span>&nbsp;Парк культуры,&nbsp;</span> ул.Пречистенка, 40/2с1
						</p>
						<p>
							<img src={green} alt='метро' /> <img src={metro} alt='метро' />{' '}
							<span>&nbsp;Павелецкая,&nbsp;</span> ул.Кожевническая, 7, стр.1
						</p>
						<p>
							<img src={darkBlue} alt='метро' /> <img src={blue} alt='метро' />{' '}
							<span>&nbsp;Смоленская,&nbsp;</span> ул. Арбат, 54/2 стр. 1
						</p>
					</div>{' '}
					<a href='tel:+74952605751'>Онлайн консультация</a>
				</div>
				<div className={styles.map}>
					<a
						href='https://yandex.ru/maps/213/moscow/?ll=37.602334%2C55.753190&mode=usermaps&source=constructorLink&um=constructor%3A1901685d6cf1f00db1775ac8ad35e5ca2ecf72c3a9bb231f50b04030c8740058&z=12'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={map} alt='карта' />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Contacts
