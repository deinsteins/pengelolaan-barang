import PropTypes from 'prop-types';

const ConfirmDelete = ({ id, onDelete }) => {
  return (
    <div>
      <p>Apakah Anda yakin ingin menghapus barang ini?</p>
      <button onClick={() => onDelete(id)}>Ya</button>
      <button>Tidak</button>
    </div>
  );
}

ConfirmDelete.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default ConfirmDelete;
