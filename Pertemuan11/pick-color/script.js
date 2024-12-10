function changeColor() {
    // mendeklarasikan variabelcolor dan inisialisasi dengan dom element html dengan id color
    let color = document.getElementById('color').value;

    // mengubah background color element body
    document.body.style.backgroundColor = color;


}