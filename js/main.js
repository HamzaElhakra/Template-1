const but = document.getElementById('icon');
const but2 = document.getElementById('icon2');
const links = document.querySelector('.links');
but.addEventListener('click', function() {
    links.classList.toggle('active');
    links.classList.remove('hidden');
});
but2.addEventListener("click", function() {
    links.classList.toggle('close');
    links.classList.remove('hidden');
});


