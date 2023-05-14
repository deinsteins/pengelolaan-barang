import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = ({ isOpen, title, onClose, children }) => {
  const modalClassName = `modal ${isOpen ? 'open' : ''}`;

  return (
    <div className={modalClassName}>
      <div className="modal__overlay" onClick={onClose} />
      <div className="modal__content">
        <div className="modal__header">
          <h2 className="modal__title">{title}</h2>
          <button className="modal__close" onClick={onClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
