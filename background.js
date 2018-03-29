
class WKafelek {
    constructor(type, skrut, tekst) { // do czego służy arg type? nie jest nigdzie wykorzystany
        this.skrut = skrut;
        this.tekst = tekst;
    }
}

class kafelek extends WKafelek {
    constructor( skrut, tekst) {
        super('kafelek', skrut, tekst)
    }

    wstaw_tekst() { // zakładam że metoda ma zapisać tablicę w cookies lub localstorage?
        console.log( JSON.stringify( tab1 ) ); // Zapisuje tablicę obiektów. Działaj dalej :)
    }

    rysyj_kafelek() {
        
        // przyjrzy się temu
        var kaf1Html = '<div id="kafelek1" class="kaf"><a id="skrut">' + this.skrut + '</a></div>'; // id="skrut" oraz id="kafelek1" będzie powtarzać się w kolejnych kafelkach. Atrybut id powinien mieć unikalną wartość.
        
        var ElwmentK = $(kaf1Html);
        $('#t').append(ElwmentK);
    }
}

var tab1= [];

$(function () {

    var x = document.getElementById('kDodaj');

    function NowyKafelek() {      

        var tekst = prompt("Wpisz tekst");
        var skrut = tekst[0] + tekst[1];

        const k1 = new kafelek(skrut, tekst);
        
        tab1.push(k1);
        k1.wstaw_tekst(); // nie wywołałeś metody, dlatego nie działała

        
        k1.rysyj_kafelek();
        

        //document.selection.createRange().text = 'twoj text z prompt';
       // function f() {
       //     document.x.y.focus();
        //    document.selection.createRange().text = 'moj text';
       // }
     };

    kDodaj.onclick = NowyKafelek;
   

});
