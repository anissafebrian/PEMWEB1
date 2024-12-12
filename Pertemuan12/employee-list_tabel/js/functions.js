//Membuat fungsi formatRupiah untuk memformat angka menjadi format rupiah
function formatRupiah(number = 0) {
   //memamstikan number adalah integer
    let nominal = parseInt(number)
    return new Intl.NumberFormat('id','ID', {style: 'currency', currency:"IDR", minimumFractionDigits: 0, maximumFractionDigits: 0,})

}

//membuat fungsi untuk menghitung total salary karyawan 
function calculateTotalSalary(employee = {}){
    
    // mengextract data/prpperty/key dari object employee
    const {position, isMarried, religion} = employee;

    //list gaji pokok berdasarkan jabatan
    const listGajiPokok = {
        Manager: 15_000_000,
        'Assistant Manager': 10_000_000,
        Supervisor: 7_500_000,
        Staff: 3_000_000
    };

    //menentukan gaji pokok karyawan
    const gajiPokok = listGajiPokok[position];
    const tunjanganJabatan = 0.2 * gajiPokok;
    const bpjs = 0.05 * gajiPokok;
    const tunjanganKeluarga = isMarried ? 0.1 * gajiPokok : 0;
    const gajiKotor = gajiPokok + tunjanganJabatan + bpjs + tunjanganKeluarga;
    const zakat = religion === 'Islam' && gajiKotor >= 7_000_000 ? 0.02 * gajiKotor : 0;
    const gajiBersih = gajiKotor - zakat;

return Object.assign(employee, {gajiPokok, tunjanganJabatan, bpjs, tunjanganKeluarga, gajiKotor, zakat, gajiBersih})

}

export {formatRupiah, calculateTotalSalary};