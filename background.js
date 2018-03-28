
class WKafelek {
    constructor(type, skrut, tekst) {
        this.skrut = skrut;
        this.tekst = tekst;
    };
};

class kafelek extends WKafelek {
    constructor(skrut, tekst) {
        super('kafelek', skrut, tekst)
    };

    wstaw_tekst() {
        console.log("dzia³a");
    };

    rysyj_kafelek() {
        var kaf1Html = '<div id="kafelek1" class="kaf"><a id="skrut">' + this.skrut + '</a></div>';
        var ElwmentK = $(kaf1Html);
        $('#t').append(ElwmentK);
    };


};

var tab1= [];

$(function () {

    var x = document.getElementById('kDodaj');

    function NowyKafelek() {      

        var tekst = prompt("Wpisz tekst");
        var skrut = tekst[0] + tekst[1];

        const k1 = new kafelek(skrut, tekst);
        tab1.push(k1);

        
        k1.rysyj_kafelek();

        //document.selection.createRange().text = 'twoj text z prompt';
       // function f() {
       //     document.x.y.focus();
        //    document.selection.createRange().text = 'moj text';
       // }
     };

    kDodaj.onclick = NowyKafelek;
   

});
