const api_url = "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"; //bandeira, pais, população, regiao e capital

async function buscarPaises() {
    try {
        const resposta = await fetch(api_url);
        const dados = await resposta.json();
        return dados;

    } catch (erro) {
        console.error("País ",erro, " não encontrado!");

        
    }
    
}