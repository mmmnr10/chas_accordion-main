// Vi hämtar body-elementet så vi kan lägga till våra nya element där
const bodyEl = document.querySelector('body');

// Funktion som togglar (växlar) klassen 'active' på beskrivningen
function toggle(e) {
  const description = e.target.nextElementSibling; // Hitta nästa syskon till den klickade titeln
  description.classList.toggle('active'); // Växla på 'active'-klassen
}

// Funktion som hämtar data från API:n
async function getPosts() {
  // Hämta data från API:n
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json(); // Omvandla svaret till JSON

  // Loop genom alla poster (varje post innehåller en titel och en beskrivning)
  data.forEach(post => {
    // Skapa en sektion (div) för varje post
    const section = document.createElement('div');
    section.classList.add('section');

    // Skapa en div för beskrivningen
    const description = document.createElement('div');
    description.classList.add('description'); 
    description.textContent = post.body; 

    // Lägg till texten från titeln på sektionen
    section.textContent = post.title;

    // Lägg till eventlyssnare på sektionen (titeln), som toggle-funktionen
    section.addEventListener('click', toggle);

    // Lägg till sektionen (titeln) till body
    bodyEl.appendChild(section);

    // Lägg till beskrivningen (body) till body, men döljer den först
    bodyEl.appendChild(description);
  });
}

// Kör funktionen som hämtar och visar posts
getPosts();
