'use strict';
{   
    
    const close = document.getElementById('close');
    const open = document.getElementById('open');
    const mask = document.getElementById('mask');
    const modal = document.getElementById('modal');

    open.addEventListener('click', ()=> {
        modal.classList.remove('hidden');
        mask.classList.remove('hidden');
    });
    
    close.addEventListener('click', ()=> {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
    });

    mask.addEventListener('click', ()=> {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
    });
   

}


