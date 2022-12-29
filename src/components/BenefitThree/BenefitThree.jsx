import React from 'react'
import styles from './BenefitThree.module.scss'
import three from '../../img/three.webp'

const BenefitThree = () => {
	return (
		<div className={styles.container} id='Apparat'>
			<div className={styles.titles}>
				<h4>
					<span>Инновационная система охлаждения</span> IceCool
					и&nbsp;наконечник из&nbsp;натурального сапфира
				</h4>
				<p>Процедура проходит без боли, ожогов и раздражений</p>
			</div>
			<img src={three} alt='Первое преимущество' />
		</div>
	)
}

export default BenefitThree
