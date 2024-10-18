let alunos = [];

function AddAluno(){

    let alunos = {
       "nome": document.getElementById("nome").value,  
       "matricula": document.getElementById("matricula").value, 
       "data de nascimento": document.getElementById("nascimento").value,
       "curso": document.getElementById("curso").value,
       "sexo": document.getElementById("sexo").value
    }

     console.log(alunos);
    //  alunos.push(alunos)
    //  LimparCampos();  
}

function ViewNomeAluno(){
    console.log(alunos);

    
}

function LimparCampos(){   
    document.getElementById("nome").value,
    document.getElementById("matricula").value,
    document.getElementById("nascimento").value,
    document.getElementById("curso").value,
    document.getElementById("sexo").value

}

function ViewAluno() {
    for ( let i = 0; i <alunos.lenght; i++){
    console.log(alunos[i].nome);
    }

}
















// function AddAluno2(){
//     let  = {
//         "marca": document.getElementById("marca").value,
//         "modelo": document.getElementById("modelo").value,
//         "fabricacao":document.getElementById("fabricacao").value,
//         "cor":document.getElementById("cor").value
//     }
//     console.log(carro);
// }

// function AddCarrosArray(){
//     let carros = [
        
        
//     ];

//     let carro = {
//         "marca": document.getElementById("marca").value,
//         "modelo": document.getElementById("modelo").value,
//         "fabricacao":document.getElementById("fabricacao").value,
//         "cor":document.getElementById("cor").value
// }
// /*carros.unshift(carro)  "unshift" para ser o primeiro. "push"para ser o ultímo */
//    // carros.push(carro);//
//     carros.splice (2,1, carro);
//     console.log(carros);

//     let findCarro = carros.find(carro => carro.cor == "vermelho"); 

//     console.long(findCarro);

//     let filtercarro = carros.filter(car => car.ano >=2005
//          && car.cor == "vermelho");
//     console.log(filtercarro);
    
// }; 