import styles from "../../styles/components/Card.module.scss";
import classNames from "classnames";
import Button from "../button/Button";

const Card = ({variant, buttonVariant, buttonDisabled}) => {
  return (
    <div
      className={
        classNames(styles.cardContainer, {
          [styles.defaultVariant]: variant === 'default',
          [styles.borderVariant]: variant === 'border',
        })
      }
    >
      <div
        className={
          classNames(styles.innerContainer, {
            [styles.ContendCentered]: variant === 'default',
            [styles.ContendNotCentered]: variant === 'border',
          })
        }
      >
        <Button variant={buttonVariant} disabled={buttonDisabled}/>
      </div>
    </div>
  )
}

export default Card;