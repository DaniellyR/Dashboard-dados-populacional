// testar funções externas e internas
externa();
function externa(){
    console.log("testando a externa");
    interna();
    console.log("vem depois da chamada da interna ");
    function interna(){
        console.log("testando a interna");
    }
}