import PropTypes from 'prop-types'

const Button = ({colour, label, onClick}) => {

    return (
        <>
            <button 
                onClick={onClick}
                className="btn"
                style={{backgroundColor: colour}}
            >
                {label}
            </button>
        </>
    )
}

Button.propTypes = {
    colour: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default Button
