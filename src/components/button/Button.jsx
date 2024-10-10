import styles from "../../styles/components/Button.module.scss";
import classNames from "classnames";

const Button = ({variant, disabled = false}) => {
  const isDefaultVariant = variant === 'default';
  return (
    <button
      className={classNames(styles.buttonContainer, {
        [styles.disabledButton]: disabled,
      })}
      disabled={disabled}
    >
      {
        !isDefaultVariant &&
        <div className={styles.icon}>
          <svg width="14" height="14" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.6324 14.9309L21.8485 20.1471C22.0505 20.349 22.0505 20.6756 21.8485 20.8775L20.8775 21.8485C20.6756 22.0505 20.349 22.0505 20.1471 21.8485L14.9309 16.6324C14.8364 16.5336 14.7805 16.4047 14.7805 16.2672V15.7C13.2122 17.0535 11.1713 17.8741 8.93706 17.8741C4.0002 17.8741 0 13.8739 0 8.93706C0 4.0002 4.0002 0 8.93706 0C13.8739 0 17.8741 4.0002 17.8741 8.93706C17.8741 11.1713 17.0535 13.2122 15.7 14.7805H16.2672C16.4047 14.7805 16.5336 14.8321 16.6324 14.9309ZM2.0624 8.93706C2.0624 12.7353 5.13881 15.8117 8.93706 15.8117C12.7353 15.8117 15.8117 12.7353 15.8117 8.93706C15.8117 5.13881 12.7353 2.0624 8.93706 2.0624C5.13881 2.0624 2.0624 5.13881 2.0624 8.93706Z"
              fill="white"/>
          </svg>
        </div>
      }
      <span
        className={classNames(styles.buttonText, {
          [styles.buttonTextDefaultVariant]: isDefaultVariant,
          [styles.buttonTextIconVariant]: !isDefaultVariant,
        })}
      >
        {isDefaultVariant ?
          'This is a one line button' :
          'This is a two line button that terminates with an ellipsis'
        }
      </span>

    </button>
  )
}

export default Button;