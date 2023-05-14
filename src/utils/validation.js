export const validateFoto = (file) => {
    const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
    if (!allowedExtensions.exec(file.name)) {
      return 'Format foto barang yang diizinkan hanya JPG dan PNG';
    } else if (file.size > 100000) {
      return 'Ukuran foto barang maksimal 100KB';
    } else {
      return '';
    }
  }
  
  export const validateNama = (nama, barang) => {
    const existingBarang = barang.find(b => b.nama === nama);
    if (existingBarang && (!barang.id || existingBarang.id !== barang.id)) {
      return 'Nama barang harus unik';
    } else {
      return '';
    }
  }
  
  export const validateNumber = (value) => {
    if (isNaN(value)) {
      return 'Harga beli, harga jual, dan stok hanya boleh diisi dengan angka';
    } else {
      return '';
    }
  }
  