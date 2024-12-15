import styles from './Button.module.css';

const Button = ({onClick, text, type, role}) => {
    const buttonClass = role === 'secondary' ? styles.secondaryButton : styles.primaryButton;;

    return (
        <button
            type={type}
            onClick={onClick}
            className={buttonClass}
            role={role}
        > {text} 
        </button>
    );
};

export default Button;