document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.process__step').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.process-card').forEach(function(card) {
        card.classList.remove('process__card_active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('process__card_active')
    })
  })
})
