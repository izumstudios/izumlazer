import React, { useEffect } from 'react'

const Marquiz = () => {
	const Marquiz = window.Marquiz

	useEffect(() => {
		;(function (t, p) {
			window.Marquiz
				? Marquiz.add([t, p])
				: document.addEventListener('marquizLoaded', function () {
						Marquiz.add([t, p])
				  })
		})('Inline', {
			id: '637b72b79384d8004f05c784',
			buttonText: 'Пройти тест',
			bgColor: '#d34085',
			textColor: '#ffffff',
			rounded: true,
			shadow: 'rgba(211, 64, 133, 0.5)',
			blicked: true,
			radius: '12',
		})
	})

	return <div data-marquiz-id='637b72b79384d8004f05c784' />
}

export default Marquiz
