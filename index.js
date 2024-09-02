let toggle = document.getElementById('toggle');
let label_toggle = document.getElementById('label_toggle')
let label_toggle_logo = document.getElementById('logo')
let maletin = document.getElementById('maletin')
let gorro = document.getElementById('gorro')
let pc = document.getElementById('pc')

toggle.addEventListener('change', (event) => {
    let checked = event.target.checked;
    document.body.classList.toggle('darkmodebody')

    if (document.body.classList.contains('darkmodebody')) {
        localStorage.setItem('darkmode', 'true')
        label_toggle.innerHTML = '<span class="material-symbols-outlined">sunny</span>'
        label_toggle_logo.src = "imagenes/logocapyacademynocturnmode.png"
        maletin.src = "imagenes/maletinnocturnmode.png"
        gorro.src = "imagenes/gorro-de-graduacionnocturnmode.png"
        pc.src = "imagenes/computadoranocturnmode.png"
    } else {
        localStorage.setItem('darkmode', 'false');
        label_toggle.innerHTML = '<span class="material-symbols-outlined">clear_night</span>'
        label_toggle_logo.src = "imagenes/logocapyacademy.png"
        maletin.src = "imagenes/maletin.png"
        gorro.src = "imagenes/gorro-de-graduacion.png"
        pc.src = "imagenes/computadora.png"
    }
});

if (localStorage.getItem('darkmode') === 'true') {
    document.body.classList.add('darkmodebody');
    label_toggle.innerHTML = '<span class="material-symbols-outlined">sunny</span>'
    label_toggle_logo.src = "imagenes/logocapyacademynocturnmode.png"
    maletin.src = "imagenes/maletinnocturnmode.png"
    gorro.src = "imagenes/gorro-de-graduacionnocturnmode.png"
    pc.src = "imagenes/computadoranocturnmode.png";
} else {
    document.body.classList.remove('darkmodebody')
    label_toggle.innerHTML = '<span class="material-symbols-outlined">clear_night</span>'
    label_toggle_logo.src = "imagenes/logocapyacademy.png"
    maletin.src = "imagenes/maletin.png"
    gorro.src = "imagenes/gorro-de-graduacion .png"
    pc.src = "imagenes/computadora.png";
}

