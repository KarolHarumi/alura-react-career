class Relogio {

    constructor() {
        this._segundos = 0;

        // this = window
        // setInterval(function () {
        //     console.log(++this._segundos);
        //   }, 1000);

        // this = class Relogio
        setInterval(() => console.log(++this._segundos), 1000);
    }
}

var relogio = new Relogio();