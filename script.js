// variables
var sp, btn_start, btn_stop, t, ms, s, mn, h;

// initialisation des variables au chargement
window.onload = function() {
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    t;
    ms = 0, s = 0, mn = 0, h = 0;
}

// compteur
function update_chrono() {
    ms += 1;

    if(ms == 10) {
        ms = 1;
        s += 1
    }

    if(s == 60) {
        s = 0;
        mn += 1
    }

    if(mn == 60) {
        mn = 0;
        h += 1
    }

    // valeurs dans span
    sp[0].innerHTML = h + 'h'; // selectionner le premier span
    sp[1].innerHTML = mn + 'min'; // selectionner le second span
    sp[2].innerHTML = s + 's'; // selectionner le troisieme span
    sp[3].innerHTML = ms + 'ms' // selectionner le quatrieme span
}

// function bouton start
function start() {
    //exectuer la fonction update_chrono() toutes les 100ms
    t = setInterval(update_chrono, 100)
    btn_start.disabled = true;
}

// bouton stop
function stop() {
    clearInterval(t); // suppression de l'interval t
    btn_start.disabled = false;
}

// reset
function reset() {
    clearInterval(t);
    btn_start.disabled = false;
    ms = 0, s = 0, mn = 0, h = 0;

    // dans les spans
    sp[0].innerHTML = h + 'h'; 
    sp[1].innerHTML = mn + 'min';
    sp[2].innerHTML = s + 's'; 
    sp[3].innerHTML = ms + 'ms'
}