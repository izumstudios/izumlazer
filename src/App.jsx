import styles from './scss/app.scss'
import MainMenu from './components/MainMenu/MainMenu'
import HeaderMenu from './components/HeaderMenu/HeaderMenu'
import Header from './components/AllBody/Header/Header'
import BestStudio from './components/BestStudio/BestStudio'
import BenefitOne from './components/BenefitOne/BenefitOne'
import BenefitTwo from './components/BenefitTwo/BenefitTwo'
import BenefitThree from './components/BenefitThree/BenefitThree'
import BenefitFour from './components/BenefitFour/BenefitFour'
import BenefitFive from './components/BenefitFive/BenefitFive'
import Masters from './components/Masters/Masters'
import Reviews from './components/Reviews/Reviews'
import Select from './components/AllBody/Select/Select'
import Mission from './components/Mission/Mission'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import Quiz from './components/Quiz/Quiz'

function App() {
	return (
		<div className={styles.body}>
			<MainMenu />
			<HeaderMenu />
			<Header />
			<Select />
			<BestStudio />
			<BenefitOne />
			<BenefitTwo />
			<BenefitThree />
			<BenefitFour />
			<BenefitFive />
			<Masters />
			<Quiz />
			<Reviews />
			<Mission />
			<Contacts />
			<Footer />
		</div>
	)
}

export default App
