import './Button.scss';
import PropTypes from 'prop-types';

const Button = ({ children, color, size, variant, onClick }) => {
  const classNames = `btn ${color} ${size} ${variant}`;

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    size: PropTypes.string,
    variant: PropTypes.string,
    onClick: PropTypes.func
}

Button.defaultProps = {
  color: 'primary',
  size: 'medium',
  variant: 'filled',
};

export default Button;
