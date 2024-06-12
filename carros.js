// Array de objetos para os carros
let carros = [
    {
        nome: 'Tesla Model 3',
        tipo: 'Elétrico',
        tempoDeRecarga: '15 min',
        motor: 'Dual Motor (AWD)',
        range: '341mi',
        cor: '⚪',
        imagem: 'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2?&bkba_opt=1&view=STUD_3QTR&size=1400&model=m3&options=$APPB,$APBS,$DV2W,$IBB1,$PPSW,$PRM30,$SC04,$MDL3,$W40B,$MT322,$CPF0,$RSF1,$CW03&crop=1400,850,300,130&'
    },
    {
        nome: 'Tesla Model X',
        tipo: 'Elétrico',
        tempoDeRecarga: '15 min',
        motor: '0-60mph 2.5s',
        range: '326mi',
        cor: '🔴',
        imagem: 'https://www.webmotors.com.br/imagens/prod/348911/TESLA_MODEL_X_ELETRICO_PLAID_34891113021165089.png?s=fill&w=165&h=110&q=70&t=true'
    },
    {
        nome: 'Chevrolet Bolt EV',
        tipo: 'Elétrico',
        tempoDeRecarga: '9.3 horas',
        motor: '200hp',
        range: '259mi',
        cor: '🔵',
        imagem: 'https://carroarretado.com.br/wp-content/uploads/2020/01/chevrolet-bolt-730x431.png'
    },
    {
        nome: 'Nissan Leaf',
        tipo: 'Elétrico',
        tempoDeRecarga: '8 horas',
        motor: '147hp',
        range: '149mi',
        cor: '🔴',
        imagem: 'https://di-uploads-pod21.dealerinspire.com/rairdonsnissanofauburn/uploads/2021/10/2022-Nissan-Leaf.png'
    },
    {
        nome: 'BMW i3',
        tipo: 'Elétrico',
        tempoDeRecarga: '5 horas',
        motor: '170hp',
        range: '153mi',
        cor: '⚪',
        imagem: 'https://www.cars.com/i/large/in/v2/stock_photos/33ba2a6c-898f-4acb-a025-086bccdf411b/68340a88-d6b3-4de3-9693-4b14f8fe56ea.png'
    },
    {
        nome: 'Audi e-tron',
        tipo: 'Elétrico',
        tempoDeRecarga: '10 horas',
        motor: '355hp',
        range: '222mi',
        cor: '⚫',
        imagem: 'https://production.autoforce.com/uploads/version/profile_image/8297/model_middle_webp_comprar-perfomance-55_37992e1829.png.webp'
    },
    {
        nome: 'Gol com escada',
        tipo: 'Motor',
        tempoDeRecarga: 'Não elétrico',
        motor: '355hp',
        range: '4km/l',
        cor: '🔵',
        imagem: 'https://www.longlife.com.br/img/linhas/porta-escada/celta-linha-porta-escada-estatica.png'
    }

];

// Seleciona o elemento onde os carros serão inseridos
let divCarros = document.querySelector('.container-carros');

// Itera sobre cada carro
// Itera sobre cada carro
for (let carro of carros) {
    // Cria o HTML para o carro
    let html = `
    <br><br>
        <div class="carros">
            <h2>${carro.nome}</h2>
            <p class="centro">
                <picture>
                    <img class="centro" width=100% src="${carro.imagem}" alt="${carro.nome}">
                </picture>
            </p>
            <hr>
            <ol class="tituloOL" type="1." start="1">
                <li>Informações:</li>
            </ol>
            <ul type="none">
                <li><b>Nome:</b> <i>${carro.nome}</i></li>
                <li><b>Tipo:</b> <i>${carro.tipo}</i></li>
                <li><b>Tempo de Recarga:</b> <i>${carro.tempoDeRecarga}</i></li>
                <li><b>Motor:</b> <i>${carro.motor}</i></li>
                <li><b>Range:</b> <i>${carro.range}</i></li>
                <li><b>Cor:</b> ${carro.cor}</li>
            </ul>
            <div class="menu" style="display: none;">
                <h3>Simule o preço</h3>
                <form>
                    <label for="km">Quantos km você planeja dirigir?</label>
                    <input type="number" id="km" name="km">
                    <input type="submit" value="Calcular">
                </form>
            </div>
        </div>
        <br>
    `;

    // Insere o HTML no div
    divCarros.innerHTML += html;
}

// Selecione todos os carros
let carrosDiv = document.querySelectorAll('.carros');

// Itera sobre cada carro
for (let carro of carrosDiv) {
    // Adicione um ouvinte de evento 'click' ao carro
    carro.addEventListener('click', function () {
        let carInfo = document.getElementById('carInfo');
        carInfo.style.display = 'flex'; // Define o display para flex
        carInfo.style.alignItems = 'center'; // Centraliza os itens na direção transversal

        // Preencha o modal com as informações do carro
        let infoText = document.createElement('div');
        infoText.innerText = this.querySelector('ul').innerText;

        let imgSrc = this.querySelector('img').src;
        let imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        imgElement.style.width = '600px';
        imgElement.style.height = 'auto';

        // Limpa o conteúdo anterior
        carInfo.innerHTML = '';
        carInfo.appendChild(imgElement); // Imagem do lado esquerdo
        carInfo.appendChild(infoText); // Informações do lado direito

        // Calcule o preço do aluguel (aqui você pode adicionar sua própria lógica para calcular o preço)
        document.getElementById('rentPrice').innerText = 'Preço do aluguel: ' + calcularPrecoAluguel();
        // Exiba o modal
        document.getElementById('carModal').style.display = "block";
    });
}


// Quando o usuário clica em <span> (x), fecha o modal
document.getElementsByClassName("close")[0].onclick = function () {
    document.getElementById('carModal').style.display = "none";
}

// Quando o usuário clica em qualquer lugar fora do modal, fecha o modal
window.onclick = function (event) {
    if (event.target == document.getElementById('carModal')) {
        document.getElementById('carModal').style.display = "none";
    }
}

document.getElementById('rentPrice').innerText = 'Preço do aluguel: ';

document.getElementById('calculate').addEventListener('click', function (event) {
    event.preventDefault();
    let hours = Number(document.getElementById('hours').value);
    if (isNaN(hours)) {
        document.getElementById('rentPrice').innerText = '⚠️ Por favor, insira um número válido de horas.';
    } else {
        document.getElementById('rentPrice').innerText = '💰 Preço do aluguel: R$' + calcularPrecoAluguel(hours) + ' \n\n📞 Telefone para contato: (11) 4002-8922';
    }
});


function calcularPrecoAluguel(hours) {
    let precoPadrao = 300;
    if (isNaN(hours)) {
        return '0 \n⚠ Insira o número de horas abaixo!';
    } else {
        return precoPadrao * hours;
    }
}


// Primeiro, selecione a barra de pesquisa
let searchBar = document.querySelector('.search-bar');

// Adicione um ouvinte de evento 'input' à barra de pesquisa
searchBar.addEventListener('input', function (e) {
    // Obtenha o valor atual da barra de pesquisa
    let searchValue = e.target.value.toLowerCase();

    // Selecione todos os carros
    let carrosDiv = document.querySelectorAll('.carros');

    // Itere sobre cada carro
    for (let carro of carrosDiv) {
        // Obtenha o nome do carro
        let nome = carro.querySelector('h2').textContent.toLowerCase();

        // Verifique se o nome do carro inclui o valor da pesquisa
        if (nome.includes(searchValue)) {
            // Se sim, exiba o carro
            carro.style.display = '';
        } else {
            // Se não, oculte o carro
            carro.style.display = 'none';
        }
    }
});


