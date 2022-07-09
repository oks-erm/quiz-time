let fact;

getData();

// get a random fact from API
async function getData() {
    const response = await $.ajax({
      url: 'https://uselessfacts.jsph.pl/random.json?language=en',
      method: "GET",
      dataType: "json"
    });
    fact = response.text;
    console.log(fact);
    // writeData(fact);
  }

