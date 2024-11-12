// Funktion som togglar klassen 'active' på beskrivningen
function toggle(e) {
    // Toggle på nästa syskon (beskrivningen) av den klickade titeln
    e.target.nextElementSibling.classList.toggle('active');
}

// Välj alla titlar och lägg till en click-event för var och en
const titles = document.querySelectorAll('.title');
titles.forEach(title => title.addEventListener('click', toggle));
    
