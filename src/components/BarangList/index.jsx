import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBarang, fetchBarang } from "../../redux/actions/barangActions";
import BarangForm from "../BarangForm";
import Pagination from "../Pagination";
import SearchBar from "../SearchBar";
import './BarangList.scss';
import Button from "../Button";

const BarangList = () => {
  const dispatch = useDispatch();
  const barangList = useSelector((state) => state.barang);
  const { loading, error, barang } = barangList;
  const [currentPage, setCurrentPage] = useState(1);
  const [barangPerPage] = useState(2);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedBarang, setSelectedBarang] = useState(null);

  useEffect(() => {
    dispatch(fetchBarang());
  }, [dispatch]);

  const handleDelete = (id, namaFoto) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      dispatch(deleteBarang(id, namaFoto));
      
    }
  };

  const handleEdit = (barang) => {
    setSelectedBarang(barang);
    setShowModal(true);
  };

  const indexOfLastBarang = currentPage * barangPerPage;
  const indexOfFirstBarang = indexOfLastBarang - barangPerPage;
  const filteredBarang = barang.filter((barang) =>
    barang.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentBarang = filteredBarang.slice(
    indexOfFirstBarang,
    indexOfLastBarang
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="barang-list">
      <h1 className="header-title">Sistem Pengelolaan Barang</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
        <div className="barang-list-header">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Button color='primary' onClick={() => setShowModal(true)}>Tambah Barang</Button>
        </div>
          <table>
            <thead>
              <tr>
                <th>Foto Barang</th>
                <th>Nama Barang</th>
                <th>Harga Beli</th>
                <th>Harga Jual</th>
                <th>Stok</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentBarang.map((barang) => (
                <tr key={barang.id}>
                  <td>
                    <img className="barang-images" src={`https://ebizuroruhdqytorsvgt.supabase.co/storage/v1/object/public/barang/${barang.nama_foto}`} alt={barang.nama} />
                  </td>
                  <td>{barang.nama}</td>
                  <td>{barang.hargaBeli}</td>
                  <td>{barang.hargaJual}</td>
                  <td>{barang.stok}</td>
                  <td className="action">
                    <Button color='warning' onClick={() => handleEdit(barang)}>Edit</Button>
                    <Button color='danger' onClick={() => handleDelete(barang.id, barang.nama_foto)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            barangPerPage={barangPerPage}
            totalBarang={filteredBarang.length}
            paginate={paginate}
          />
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <h2>Data Barang</h2>
                <span className="close" onClick={() => setShowModal(false)}>
                  &times;
                </span>
                <BarangForm barang={selectedBarang} closeModal={setShowModal} />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BarangList;
