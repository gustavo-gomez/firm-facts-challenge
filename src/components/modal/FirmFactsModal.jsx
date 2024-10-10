import styles from "../../styles/components/FirmFactsModal.module.scss";
import Card from "../card/Card";

const FirmFactsModal = () => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalHeader}>
        <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed">
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
        </svg>
        <h2 className={styles.title}>Firm Facts</h2>
      </div>
      <div className={styles.modalBody}>
        <Card variant={'default'} buttonVariant='icon'/>
        <Card variant={'default'} buttonVariant='icon'/>
        <Card variant={'default'} buttonVariant='default'/>
        <Card variant={'default'} buttonVariant='icon'/>
        <Card variant={'border'} buttonVariant='icon'/>
        <Card variant={'border'} buttonVariant='icon' buttonDisabled/>
        <Card variant={'border'} buttonVariant='icon'/>

      </div>
    </div>
  )
}

export default FirmFactsModal;