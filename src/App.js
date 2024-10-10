import styles from './App.module.scss';
import FirmFactsModal from "./components/modal/FirmFactsModal";

function App() {
  return (
    <div className={styles.App}>
      <FirmFactsModal variant='default'/>
    </div>
  );
}

export default App;
