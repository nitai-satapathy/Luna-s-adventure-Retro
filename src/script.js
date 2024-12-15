const counter = document.getElementById('counter');
    let visits = localStorage.getItem('visits') || 0;
    visits++;
    counter.textContent = visits;
    localStorage.setItem('visits', visits);