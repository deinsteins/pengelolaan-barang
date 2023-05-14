import { supabase } from "../../api/suppabase";

export const fetchBarang = () => async (dispatch) => {
  try {
    const { data, error } = await supabase.from("barang").select("*");
    if (error) {
      throw error;
    }
    dispatch({ type: "FETCH_BARANG_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_BARANG_FAILURE", payload: error.message });
  }
};

export const addBarang = (barang) => async (dispatch) => {
  try {
    const fotoBarangUrl = await uploadFotoBarang(barang.foto);
    const namaFoto = barang.foto.name;
    const { data, error } = await supabase.from('barang').insert({ ...barang, nama_foto: namaFoto, foto: fotoBarangUrl }).select('*');
    if (error) {
      throw error;
    }
    dispatch({ type: "ADD_BARANG_SUCCESS", payload: data[0] });
  } catch (error) {
    dispatch({ type: "ADD_BARANG_FAILURE", payload: error.message });
  }
};

export const editBarang = (id, oldPhoto, barang) => async (dispatch) => {
  try {
    await deleteFotoBarang(oldPhoto);
    const newPhoto = barang.foto.name;
    const fotoBarangUrl = await uploadFotoBarang(barang.foto);
    const { data, error } = await supabase
      .from("barang")
      .update({...barang, nama_foto: newPhoto, foto: fotoBarangUrl})
      .eq("id", id)
      .select('*');
    if (error) {
      throw error;
    }
    dispatch({ type: "EDIT_BARANG_SUCCESS", payload: data[0] });
  } catch (error) {
    dispatch({ type: "EDIT_BARANG_FAILURE", payload: error.message });
  }
};

export const deleteBarang = (id, namaFoto) => async (dispatch) => {
  try {
    await deleteFotoBarang(namaFoto);
    const { error } = await supabase
      .from("barang")
      .delete()
      .eq("id", id);
    if (error) {
      throw error;
    }
    dispatch({ type: "DELETE_BARANG_SUCCESS", payload: id });
  } catch (error) {
    dispatch({ type: "DELETE_BARANG_FAILURE", payload: error.message });
  }
};

export const uploadFotoBarang = async (file) => {
  const { data, error } = await supabase.storage.from('barang').upload(file.name, file);
  if (error) throw error;
  return data.Key;
};

export const deleteFotoBarang = async (namaFoto) => {
  try {
    const { data, error } = await supabase.storage
      .from('barang')
      .remove([namaFoto])
    if (error) {
      throw error
    }
    console.log('File deleted:', data)
  } catch (error) {
    console.error('Error deleting file:', error)
  }
};
