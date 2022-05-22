function borang() {
    let nama = document.getElementById("nama").value;
    document.getElementById("paparnama").innerHTML = nama;
    let alamat = document.getElementById("alamat").value;
    document.getElementById("paparalamat").innerHTML = alamat;
    let bangsa = document.getElementById("bangsa").value;
    document.getElementById("paparbangsa").innerHTML = bangsa;
    return false;
}

function checkButton() {
    if (document.getElementById('lelaki').checked) {
        document.getElementById("disp").innerHTML
            = document.getElementById("lelaki").value;
    }
    else if (document.getElementById('wanita').checked) {
        document.getElementById("disp").innerHTML
            = document.getElementById("wanita").value;
    }
    else {
        document.getElementById("error").innerHTML
        = "Sila pilih jantina";
    }
}
