function createCountryCard(country){
    const card = document.createElement('div')
    card.classList.add('country')
    const countryName = country.name.common
    const name = document.createElement('h2')
    name.textContent = countryName

    const flag = document.createElement('img')
    flag.src = country.flags.svg
    flag.alt = countryName

    card.append(name, flag)
    document.querySelector('#countries').append(card)

}

async function getCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();

    // Função de comparação para ordenar por nome
    const compareByName = (a, b) => {
        const nameA = a.name.common.toLowerCase();
        const nameB = b.name.common.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    };

    countries.sort(compareByName);

    // Limpa a lista de países
    const countriesContainer = document.querySelector('#countries');
    countriesContainer.innerHTML = '';
    console.log(countries)    
    countries.forEach(createCountryCard);
}

getCountries();


getCountries()