import PropTypes from 'prop-types'

const Button = ({ text, onClick }) => {
return  <button onClick={onClick} className='btn'>{text}</button>
}

Button.defaultProps = {
    text: 'Add',
}


Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button