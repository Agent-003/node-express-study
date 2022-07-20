const toCurrency = price => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}

document.querySelectorAll('.price').forEach(node => {
  node.textContent = toCurrency(node.textContent)
})

const $card = document.querySelector('#card')

if ($card) {
  $card.addEventListener('click', event => {
    if (event.target.classList.contains('js-remove')) {
      const id = event.target.dataset.id
      console.log(id)

      fetch('/card/remove/' + id, {
        method: 'delete'
      }).then(res => res.json())
        .then(card => {
          if (card.courses.length) {
            const html = card.courses.map(c => {
              return `
              <tr>
              <td>${c.title}</td>
              <td>${c.count}</td>
              <td>
                  <button class="btn btn-small btn-danger js-remove" data-id="${c.id}">Delete</button>
              </td>
            </tr>
              `
            }).join('');
            $card.querySelector('tbody').innerHTML = html
            $card.querySelector('.price').innerHTML = toCurrency(card.price)

          } else {
            card.innerHTML = '<p> Card is empty</p>'
          }
        })
    }
  })
}