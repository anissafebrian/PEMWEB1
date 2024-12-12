// membuat array object yang berisi data karyawan
const employees = [
    {
        id : 111, name: 'Alissa', 
        position: 'Manager', 
        isMarried: true, 
        religion: 'Islam'

    },
    {
        id : 112, name: 'Jeno', 
        position: 'Assistant Manager', 
        isMarried: false, 
        religion: 'Hindu'

    },
    {
        id : 113, name: 'Jaemin', 
        position: 'Supervisor', 
        isMarried: true, 
        religion: 'Budha'

    },
    {
        id : 114, name: 'Mingyu', 
        position: 'Staff', 
        isMarried: false, 
        religion: 'Kristen'

    },
    {
        id : 115, name: 'Renjun', 
        position: 'Staff', 
        isMarried: true, 
        religion: 'Budha'

    }
];


// Membuat array columNames berisi nama kolom
const columnNames = [
    'No',
    'NIP',
    'Nama',
    'Jabatan',
    'Status',
    'Agama',
    'Gaji Pokok',
    'Tunjangan Jabatan',
    'BPJS',
    'Tunjangan Keluarga',
    'Zakat', 
    'Gaji Bersih',

];

// export variable employees dan columnNames
export { employees, columnNames };
