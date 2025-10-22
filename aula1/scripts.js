async function buscarDadosComAwait(){
    try{
        const resposta= await fetch("https://raw.githubusercontent.com/miqueiassousa/irineu-store/refs/heads/main/eletronicos.json");
        const dados= await resposta.json();
        const notebooks = dados.Notebook;
       const usuario =notebooks[1];
         console.log("Modelo", usuario.Modelo);
    }
    catch(erro){
        console.log("Deu erro", erro);
    }

    }
buscarDadosComAwait();
// const primeiroNotebook = notebooks[0];
//             console.log("Modelo:", primeiroNotebook.Modelo);