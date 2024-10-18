// click to window
window.addEventListener('click', (e) => {
    // Plus Count
    if(e.target.dataset.action === 'plus'){
       const wrapper = e.target.closest('.counter-wrapper')
       const counter = wrapper.querySelector('[data-counter]')
       counter.textContent = ++counter.textContent  
    }

    // Minus Count
    if(e.target.dataset.action === 'minus'){
        const wrapper = e.target.closest('.counter-wrapper')
        const counter = wrapper.querySelector('[data-counter]')
        if(parseInt(counter.textContent) > 1){
            counter.textContent = --counter.textContent
        }  
     }

    
})