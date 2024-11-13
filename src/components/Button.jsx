import './Button.css'

const Button = ({click, text, type = 'button', role}) => {
    const buttonClass = role === 'secondary' ? 'secondaryButton' : 'primatyButton';
    return (
    <button
        type={type} onClick={click} role={role} className={buttonClass}>{text} 
    </button>
)};

export default Button;