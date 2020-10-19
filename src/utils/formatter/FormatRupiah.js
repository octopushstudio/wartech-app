// Helper format rupiah
export const FormatRupiah = (angka) => {
  if (angka) {
    var number_string = angka.toString(),
      sisa = number_string.length % 3,
      rupiah = number_string.substr(0, sisa),
      ribuan = number_string.substr(sisa).match(/\d{3}/g);

    if (ribuan) {
      let separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }
  } else {
    rupiah = "";
  }

  return rupiah;
}

// Fungsi untuk meng-konversi nomor telpon kedalam format yang benar contoh : '08212xxxx'
export function convertNumber(number) {
  // Ambil nomor yang di input
  let readString = number.toString();
  let read_number;
  let return_num;

  // Tentukan awalan kode dari nomor telepon apakah '+62' atau '0'
  let res = readString.substr(0, 3);

  // Jika awalan terbaca '+62' maka :
  if (res === "+62") {
    // Kita ambil angka setelah '+62'
    read_number = readString.substr(4, 17);
    // Kemudian kita replace simbol '-' dengan ''(kosong). agar angka menjadi dempet/menyatu
    return_num = "0" + read_number.replace(/-/g, "");
  }
  // Selain yang berawalan '+62' atau yang berawalan '0' maka :
  else {
    // Langsung kita replace simbol '-' dengan ''(kosong). karna formatnya sudah benar
    return_num = readString.replace(/-/g, "");
  }

  return return_num;
}

// Fungsi untuk membuat jarak antar karakter / (Character spacing)
export function applyLetterSpacing(string, count) {
  return string.split("").join("\u200A".repeat(count));
}
