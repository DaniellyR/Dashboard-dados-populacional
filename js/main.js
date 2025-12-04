async function iniciarSistema() {
    console.log("Iniciando sistema...");
    
    // chamar a api
    const paises = await buscarPaises();
    console.log("Dados recebidos:", paises);
}

iniciarSistema();