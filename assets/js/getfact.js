let fact;
import { writeData } from './funfact.js';

// get a random fact from API
export async function getData() {
    const response = await $.ajax({
      url: 'https://uselessfacts.jsph.pl/random.json?language=en',
      method: "GET",
      dataType: "json"
    });
    fact = response.text;
    writeData(fact);
  }