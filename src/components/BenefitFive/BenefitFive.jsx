import React from 'react'
import styles from './BenefitFive.module.scss'
import five from '../../img/five.webp'
import ButtonForm from '../UI/ButtonForm/ButtonForm'

const BenefitFive = () => {
	return (
		<div className={styles.container} id='Apparat'>
			<div className={styles.benefit__five}>
				<div className={styles.titles}>
					<h4>
						<span>Стойкий</span> результат уже за 8-10 процедур
					</h4>
					<p>
						С&nbsp;каждой процедурой бриться нужно реже <br /> Кожа становится
						мягкой и гладкой. <br /> Выпавший волос больше не&nbsp;вырастет.{' '}
						<br /> Эффект на&nbsp;несколько лет.
					</p>
				</div>
				<img src={five} alt='Первое преимущество' />
			</div>
			<ButtonForm title='Заказать обратный звонок' />
		</div>
	)
}

export default BenefitFive
