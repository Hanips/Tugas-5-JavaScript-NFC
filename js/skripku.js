function tambah(){
    let frm = window.document.getElementById("kalkulator");
	let nomer1 = frm.angka1.value;
    let nomer2 = frm.angka2.value;

    if (isNaN(nomer1) || isNaN(nomer2)) {
        frm.hasil.value = alert ("Maaf yang anda input bukan angka");
    }else{
        let hsl = parseInt(nomer1) + parseInt(nomer2);
        frm.hasil.value = hsl;
    }
}

function kurang(){
    let frm = window.document.getElementById("kalkulator");
	let nomer1 = frm.angka1.value;
    let nomer2 = frm.angka2.value;

    if (isNaN(nomer1) || isNaN(nomer2)) {
        frm.hasil.value = alert ("Maaf yang anda input bukan angka");
    }else{
        let hsl = parseInt(nomer1) - parseInt(nomer2);
        frm.hasil.value = hsl;
    }
}

function bagi(){
    let frm = window.document.getElementById("kalkulator");
	let nomer1 = frm.angka1.value;
    let nomer2 = frm.angka2.value;

    if (isNaN(nomer1) || isNaN(nomer2)) {
        frm.hasil.value = alert ("Maaf yang anda input bukan angka");
    }else{
        let hsl = parseInt(nomer1) / parseInt(nomer2);
        frm.hasil.value = hsl;
    }
}

function kali(){
    let frm  = window.document.getElementById("kalkulator");
	let nomer1 = frm.angka1.value;
    let nomer2 = frm.angka2.value;

    if (isNaN(nomer1) || isNaN(nomer2)) {
        frm.hasil.value = alert ("Maaf yang anda input bukan angka");
    }else{
        let hsl = parseInt(nomer1) * parseInt(nomer2);
        frm.hasil.value = hsl;
    }
}
