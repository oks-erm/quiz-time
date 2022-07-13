let fact;
import { writeData } from './funfact.js';

// get a random fact from API
export async function getData() {
  const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
  // assign response to variable when promise resolves
      let data = await response.json();
      fact = data.text;
      writeData(fact);
  }
