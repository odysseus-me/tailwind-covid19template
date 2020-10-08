const bg = document.getElementById('background');
const btnBG = document.getElementById('btn-bg');

btnBG.addEventListener('click', function(e){
    e.preventDefault();
    if(btnBG.classList.toggle('bg-gray-100')){
        bg.classList.add('bg-gray-800');
        bg.classList.remove('bg-gray-100');
        
        btnBG.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>'

    } else {
        bg.classList.add('bg-gray-100');
        bg.classList.remove('bg-gray-800');

        btnBG.innerHTML = '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>'
    }

    btnBG.classList.toggle('text-gray-900');
})