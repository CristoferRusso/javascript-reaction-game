//Funzione che risponde al click (scomparsa)
document.addEventListener("DOMContentLoaded", function () {
    const shape = document.getElementById("shape");

    //Parte il cronometro
    let startTime = Date.now();
    let show = document.getElementById("time");
    let intId = null;
    let point = document.getElementById("score");
    let fast = document.getElementById("velocità");

    //Funzione alternativa con colori
    function randColor() {
        //Si crea un array e si usa la funzione split che divide i valori all'interno dell'array tra apici 
        const number = '0123456789ABCDEF'.split('');
        let result = '#';
        //Si inizializza un For che incrementa ogni volta fino ad arricare a 6 valori
        for (let i = 0; i < 6; i++) {

            //Si utilizza la funzione random per la generazione casuale
            result += number[Math.floor(Math.random() * 16)];
        }
        return result;
    }


    //Calola il tempo impiegato
    function elapsedTime(t1, t2) {
        const t = (t2 - t1) / 1000;
        return t.toFixed(2).toLocaleString();
    }
    //Calcola i punti (Da sistemare)
    function elapsedScore(t1, t2) {
        const t = t2 + t3;
        return t.toFixed(2).toLocaleString();
    }


    shape.addEventListener("click", shapeCliked);

    makeShapeAppear1();

    function makeShapeAppear1() {
        //Pulisce setinterval
        if (intId) {
            clearInterval(intId);
        }
        //Setinterval chiama una funzione specificata a intervalli specifi dichiarati in millisecondi   
        intId = setInterval(() => {
            //Fa ricomparire l'immagine dopo un periodo casuale utilizzando il metodo di default dell'immagine
            shape.style.display = "block";

            let w = Math.random() * 200;
            if (w < 10) {
                w = 10;
            }

            if (w > 200) {
                w = 200;
            }
            //Alterna i cerchi e i quadrati in maniera random
            if (Math.random() > .5) {
                shape.style.borderRadius = "50%";

            } else shape.style.borderRadius = "0%";

            shape.style.top = Math.random() * 550 + "px";
            shape.style.left = Math.random() * 1500 + "px";
            shape.style.height = w + "px";
            shape.style.width = w + "px";
            shape.style.backgroundColor = randColor();



        }, 1000);

    }

    //Alternativa a makeShapeAppear1 settimeout apetta il tempo specificato e poi finisce
    function makeShapeAppear2() {
        //Pulisce il timeout
        if (intId) {
            clearTimeout(intId);
        }
        intId = setTimeout(() => {
            //Fa ricomparire l'immagine dopo un periodo casuale
            shape.style.display = "block";


        }, Math.random() * 2000);


    }


    function shapeCliked() {

        //Fa scomparire l'immagine
        shape.style.display = "none";

        // Scrive il tempo calcolato nella variabile time(html)

        show.innerHTML = (elapsedTime(startTime, Date.now()));

        //Azzera il cronometro
        startTime = Date.now();

        document.getElementById("score").value = score + 1;
    }



});
