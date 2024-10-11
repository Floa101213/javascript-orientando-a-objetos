function AddCarro(){
    let carro = {
        "marca": "fiat",
        "modelo": "Uno Vivace",
        "fabricacao": 2021,
        "cor":"partel de flango"
    }
    console.log(carro);

}

function AddCarro2(){
    let carro = {
        "marca": document.getElementById("marca").value,
        "modelo": document.getElementById("modelo").value,
        "fabricacao":document.getElementById("fabricacao").value,
        "cor":document.getElementById("cor").value
    }
    console.log(carro);
}

function AddCarrosArray(){
    let carros = [
        {
                "marca": "Hyundai",
                "modelo": "HB20",
                "fabricacao": 2022,
                "cor":"Branco"
        },
        {
                "marca": "Chevrolet",
                "modelo": "Celta",
                "fabricacao": 2014,
                "cor":"Prata"      
        },
        {
                "marca": "Lamborghini",
                "modelo": "Aventador",
                "fabricacao": 2021,
                "cor":"Preto"
        },
        {
                "marca": "Nissan",
                "modelo": "GTR Skyline R32",
                "fabricacao": 2018,
                "cor":"Vermelho"
        },

        {

            "marca": "lamborghini",
            "modelo": "Lamborghini venatus",
            "fabricacao": 2022,
            "cor":"laranja"

        },

        {

            "marca": "cacau show",
            "modelo": "la creme de lacler",
            "fabricacao": 2017,
            "cor":"marrom"

        },
        
        
    ];

    let carro = {
        "marca": document.getElementById("marca").value,
        "modelo": document.getElementById("modelo").value,
        "fabricacao":document.getElementById("fabricacao").value,
        "cor":document.getElementById("cor").value
}
/*carros.unshift(carro)  "unshift" para ser o primeiro. "push"para ser o ultímo */
   // carros.push(carro);//
    carros.splice (2,1, carro);
    console.log(carros);

    let findCarro = carros.find(carro => carro.cor == "vermelho"); 

    console.long(findCarro);

    let filtercarro = carros.filter(car => car.ano >=2005
         && car.cor == "vermelho");
    console.log(filtercarro);
    
}; 