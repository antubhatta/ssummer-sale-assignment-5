function cardClickBtn(target){
    const card = target.parentNode.querySelector('.card')
    const productName= card.querySelector('.product-name').innerText

    const li= document.createElement('li')
    li.innerText=productName
    const selectedProduct=document.getElementById('selected-product')
    selectedProduct.appendChild(li)

    const productPrice= card.querySelector('.product-price').textContent.split(' ')[0]
    const itemPrice=parseFloat(productPrice)
    
    const totalPrice= document.getElementById('total-price')
    const totalPriceString=totalPrice.innerText
    const previousTotalPrice=parseFloat(totalPriceString)
    
    const currentTotalPrice= itemPrice+previousTotalPrice
    totalPrice.innerText=currentTotalPrice.toFixed(2)
}