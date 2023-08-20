function cardClickBtn(target){
    const card = target.parentNode.querySelector('.card')
    const productName= card.querySelector('.product-name').innerText

    // const productPrice= card.querySelector('.product-price').textContent
    const li= document.createElement('li')
    li.innerText=productName
    const selectedProduct=document.getElementById('selected-product')
    selectedProduct.appendChild(li)
}