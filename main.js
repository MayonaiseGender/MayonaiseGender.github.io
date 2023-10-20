// A minimal CSS framework: you can research
// and choose others, or use none at all.
import '@picocss/pico'

// Our stylesheet.
import './style.css'


// We can import raw code fragments for samples, like this:
import fragment from './code-fragments/fragment.css?raw'
document.querySelector('#fragment').textContent = fragment;

import importExample from './code-fragments/importExample.sh?raw'
document.querySelector('#importExample').textContent = importExample;

// A code highlighter
import hljs from 'highlight.js'
// You can check the folder for other themes!
import 'highlight.js/styles/panda-syntax-dark.css'
// This next line of code automatically finds
// code blocks in your HTML (in <pre><code></code>
// </pre>) and makes them look pretty!
hljs.highlightAll();

// This is a pretty good start for JavaScript: we will add more as needed!
import tscalc from './code-fragments/tscalc.cs?raw'
document.querySelector('#tscalc').textContent = tscalc

//Following Code Courtesy of ChatGPT

    // Function to calculate age
    function calculateAge(birthYear) {
        const currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    }

    // Function to update the text
    function updateAgeText() {
        const age = calculateAge(2006); // Replace with your birth year
        const ageTextElement = document.getElementById('ageText');
      if (age === 18) {
        ageTextElement.textContent = `I am an ${age} year old HS student with a personal interest in all things programming and technology. I started programming by myself in C# in 2021, and began taking the AP Computer Science Principles class in the school year of 2023. `;
      }
      else {
        ageTextElement.textContent = `I am a ${age} year old HS student with a personal interest in all things programming and technology. I started programming by myself in C# in 2021, and began taking the AP Computer Science Principles class in the school year of 2023. `;
    }
    }

    // Initial call to update the text
    updateAgeText();

    // Set up a timer to update the age every year
    setInterval(updateAgeText, 1000 * 60 * 60 * 24 * 365); // 1 year in milliseconds