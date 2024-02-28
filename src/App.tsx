import './App.css';
import { Navbar, Home, Statistics, Contract, Billing, Bussines,Cta, Testimonials, Clients, Footer } from './components';
import { styles } from './util/style';

function App() {
  return (
    <div className="App bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexStart} `}>
				<div className={`${styles.container}`}>
					<Navbar />
				</div>
			</div>
      <div className={`${styles.flexStart}`}>
				<div className={`${styles.container}`}>
					<Home />
				</div>
			</div>
      <div
				className={`bg-primary ${styles.paddingX} ${styles.flexStart} `}
			>
				<div className={`${styles.container}`}>
					<Statistics />
					<Contract />
					<Billing />
					<Bussines />
					<Testimonials />
					<Clients />
					<Cta />
					<Footer />
				</div>
			</div>

    </div>
  );
}

export default App;
