



/**************************************************/
/*                      Age                       */
/**************************************************/


const ageInput = document.getElementById('age_input');
const ageSpan = document.getElementById('age_span');

function updateAge() {
    const age = ageInput.value;
    let yearsText = "лет";

    if (age % 10 == 1) {
        yearsText = "год";
    } else if ([2, 3, 4].includes(age % 10)) {
        yearsText = "года";
    }
    ageSpan.innerHTML = `${age} ${yearsText}`;
}

ageInput.addEventListener('input', updateAge);


/**************************************************/
/*                Country & City                  */
/**************************************************/


const countrySelect = document.getElementById('country_select');
const citySelect = document.getElementById('city_select');
const customCity = document.getElementById('custom_city');
const customCityInput = document.getElementById('custom_city_input');

countrySelect.addEventListener('change', function() {
    const selectedCountry = countrySelect.value;
    citySelect.innerHTML = "";

    if (selectedCountry === 'Belarus') {
        addCityOption('Минск');
        addCityOption('Гомель');
        addCityOption('Могилев');
        addCityOption('Витебск');
        addCityOption('Гродно');
        addCityOption('Брест');
    } else if (selectedCountry === 'Russia') {
        addCityOption('Москва');
        addCityOption('Санкт-Петербург');
        addCityOption('Новосибирск');
        addCityOption('Екатеринбург');
        addCityOption('Нижний Новгород');
        addCityOption('Казань');
    } else if (selectedCountry === 'Ukraine') {
        addCityOption('Киев');
        addCityOption('Харьков');
        addCityOption('Одесса');
        addCityOption('Днепр');
        addCityOption('Донецк');
        addCityOption('Запорожье');
    }
    addCityOption('Другой');

    function addCityOption(city) {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
      }
});

citySelect.addEventListener('change', function() {
    const selectedCity = citySelect.value;

    if (selectedCity === 'Другой') {
        customCity.style.display = 'block';
    } else {
        customCity.style.display = 'none';
    }
});


/**************************************************/
/*                   Search                       */
/**************************************************/


const fill = document.getElementById('fill');

ageInput.addEventListener('input', function() {
  const percent = (this.value - this.min) / (this.max - this.min) * 100;
  fill.style.width = `${percent}%`;
});