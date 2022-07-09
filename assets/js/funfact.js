let fact;
const funfactText = document.getElementById('funfact-text');

getData();

// get a random fact from API
async function getData() {
    const response = await $.ajax({
      url: 'https://uselessfacts.jsph.pl/random.json?language=en',
      method: "GET",
      dataType: "json"
    });
    fact = response.text;
    writeData(fact);
  }

// write response result to the text field or a backup text if the API call fails 
export function writeData(fact) {
    if (fact.length > 0) {
      funfactText.innerHTML = fact;
    } else {
      funfactText.innerHTML = "It's impossible to hum while holding your nose.";
    }
  }



