import { products } from "./index1.js"
const parentProd = document.getElementById('prod')
console.log(parentProd);

products.forEach((product) => {
    
    const html = `
    <div class="col-md-6">
						<div class="card mb-4" data-id="01">
							<img class="product-img" src="img/phone/images-1.jpg" alt="">
							<div class="card-body text-center">
								<h4 class="item-title">Iphone 14</h4>
						

								<div class="details-wrapper">
									<div class="items counter-wrapper">
										<div class="items__control" data-action="minus">-</div>
										<div class="items__current" data-counter>1</div>
										<div class="items__control" data-action="plus">+</div>
									</div>

									<div class="price">
										<div class="price__currency">450 $</div>
									</div>
								</div>

								<button data-cart type="button" class="btn btn-block btn-outline-warning">+ buy </button>

							</div>
						</div>
					</div>
    `

    parentProd.insertAdjacentHTML('beforeend', html)
})


const cartWrapper = document.querySelector('.cart-wrapper')
// click to window
window.addEventListener('click', (e) => {
    // Plus Count
    if (e.target.dataset.action === 'plus') {
        const wrapper = e.target.closest('.counter-wrapper')
        const counter = wrapper.querySelector('[data-counter]')
        counter.textContent = ++counter.textContent
    }

    // Minus Count
    if (e.target.dataset.action === 'minus') {
        const wrapper = e.target.closest('.counter-wrapper')
        const counter = wrapper.querySelector('[data-counter]')
        if (parseInt(counter.textContent) > 1) {
            counter.textContent = --counter.textContent
        }
    }

    if (e.target.hasAttribute('data-cart')) {
        const card = e.target.closest('.card')


        const cardItem = {
            id: card.dataset.id,
            title: card.querySelector('.item-title').textContent,
            imgUrl: card.querySelector('.product-img').getAttribute('src'),
            price: parseInt(card.querySelector('.price__currency').textContent),
            count: card.querySelector('[data-counter]').textContent
        }


        const uniqeId = cartWrapper.querySelector(`[data-id="${cardItem.id}"]`)
        let isEmpty = document.getElementById('empty')
        if (uniqeId) {
            const counter = uniqeId.querySelector('[data-counter]')
        
            counter.textContent = +counter.textContent + +cardItem.count
           
           
            isEmpty.classList.add('hiden')
            
            

        } else {
            isEmpty.classList.add('hiden')
            const html = `
        	<div class="cart-item" data-id="${cardItem.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${cardItem.imgUrl}" alt="">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${cardItem.title}</div>
										

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${cardItem.count}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${cardItem.price}$</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								</div>
							</div>
        `

            cartWrapper.insertAdjacentHTML('beforeend', html)

        }


    }

})