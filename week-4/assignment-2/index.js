const productsContainer = document.getElementById('products')

function ajax(src, callback) {
  let products = []

  fetch(src)
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with getting data (${res.status})`)
      return res.json()
    })
    .then((data) => {
      products = data
      callback(products)
    })
    .catch((err) => console.error(err.message))
}

function render(data) {
  const productList = document.createElement('ol')

  if (!data) return

  data.forEach((product) => {
    let productItem = document.createElement('li')
    productItem.textContent = `${product.name}: ${product.description} ( NT$${product.price} )`
    productItem.classList.add('product-item')

    productList.appendChild(productItem)
  })

  productsContainer.appendChild(productList)
}

// Get product information in JSON format and render data in the page
ajax(
  'https://appworks-school.github.io/Remote-Aassigiment-Data/products',
  function (response) {
    render(response)
  }
)
