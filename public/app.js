document.querySelectorAll('.price').forEach(node => {
  node.textContent = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'USD'
  }).format(node.textContent)
})