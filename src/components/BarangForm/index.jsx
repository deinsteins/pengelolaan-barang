import { useState } from "react";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { addBarang, editBarang } from "../../redux/actions/barangActions";

import './BarangForm.scss';
import Button from "../Button";

const BarangForm = ({ barang, closeModal }) => {
  const [fotoBarang, setFotoBarang] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    nama: barang ? barang.nama : "",
    hargaBeli: barang ? barang.hargaBeli : "",
    hargaJual: barang ? barang.hargaJual : "",
    stok: barang ? barang.stok : "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const maxSize = 100 * 1024;
    if (file && file.size > maxSize) {
      setError('File terlalu besar. Maksimum ukuran file adalah 100 KB.');
      setFotoBarang(null);
    } else {
      setFotoBarang(file);
      setError(null);
    }
    setFotoBarang(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) { 
      alert('File terlalu besar. Maksimum ukuran file adalah 100 KB.')
    } else {
      if (barang) {
        dispatch(editBarang(barang.id, barang.nama_foto, { ...formData, foto: fotoBarang }));
      } else {
        dispatch(addBarang({ ...formData, foto: fotoBarang }));
      }
      closeModal();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="foto">Foto Barang</label>
        <input
          type="file"
          id="foto"
          name="foto"
          accept=".jpg,.png"
          onChange={handleFileChange}
        />
         {error && <div className="error">{error}</div>}
      </div>
      <div>
        <label htmlFor="nama">Nama Barang</label>
        <input
          type="text"
          id="nama"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="hargaBeli">Harga Beli</label>
        <input
          type="number"
          id="hargaBeli"
          name="hargaBeli"
          value={formData.hargaBeli}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="hargaJual">Harga Jual</label>
        <input
          type="number"
          id="hargaJual"
          name="hargaJual"
          value={formData.hargaJual}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="stok">Stok</label>
        <input
          type="number"
          id="stok"
          name="stok"
          value={formData.stok}
          onChange={handleChange}
          required
        />
      </div>
      <Button color='success' buttontype="submit">{barang ? "Edit" : "Tambah"} Barang</Button>
    </form>
  );
};

BarangForm.propTypes = {
  barang: PropTypes.array,
  closeModal: PropTypes.func

}

export default BarangForm;
