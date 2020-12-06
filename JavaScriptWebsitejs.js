
function Kopapirollo() {
    var a = prompt("Tippelj! Írj be egyet az alábbiak közül: Kő: 1, Papír: 2, Olló: 3");
    var Tecontainer = document.getElementById("te");
    var Gepcontainer = document.getElementById("gep");
    var Eredmeny = document.getElementById("eredmeny");
    var b = Math.floor(Math.random() * 3) + 1;
    switch (a) {
        case '1':
            (a == 1);
            Tecontainer.innerHTML = "A te tipped: " + a + ": KŐ.";
            break;
        case '2':
            (a == 2);
            Tecontainer.innerHTML = "A te tipped: " + a + ": PAPÍR.";
            break;
        case '3':
            (a == 3);
            Tecontainer.innerHTML = "A te tipped: " + a + ": OLLÓ.";
            break;
    }
    var b = Math.floor(Math.random() * 3) + 1;

    /*  switch (b) {
     case '1':
     (b == 1);
     Gepcontainer.innerHTML = "A gép tippje: " + b + ": KŐ.";
     case '2':
     (b == 2);
     Gepcontainer.innerHTML = "A gép tippje: " + b + ": PAPÍR.";
     case '3':
     (b == 3);
     Gepcontainer.innerHTML = "A gép tippje: " + b + ": OLLÓ.";
     }*/
    if (b == 1) {
        Gepcontainer.innerHTML = "A gép tippje: " + b + ": KŐ.";
    } else if (b == 2) {
        Gepcontainer.innerHTML = "A gép tippje: " + b + ": PAPÍR.";
    } else if (b == 3) {
        Gepcontainer.innerHTML = "A gép tippje: " + b + ": OLLÓ.";
    }



    if (a == b) {
        Eredmeny.innerHTML = "Döntetlen!";
    } else if (a == 1 && b == 2 || a == 3 && b == 1 || a == 2 && b == 3) {
        Eredmeny.innerHTML = "A gép nyert!";
    } else if (a == 2 && b == 1 || a == 1 && b == 3 || a == 3 && b == 2) {
        Eredmeny.innerHTML = "Te nyertél!";
    } else {
        Eredmeny.innerHTML = "Csak ezzel a három számmal tudsz játszani: 1 / 2 / 3!";
        Gepcontainer.innerHTML = "";
    }

    buton1.onclick = "";

}
;
