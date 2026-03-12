document.addEventListener('DOMContentLoaded', function () {
  function openModal(id) {
    var modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // Open modal on trigger click
  document.querySelectorAll('[data-modal]').forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      openModal(this.dataset.modal);
    });
  });

  // Close on X button
  document.querySelectorAll('.close').forEach(function (btn) {
    btn.addEventListener('click', function () {
      closeModal(this.closest('.modal'));
    });
  });

  // Close on backdrop click
  document.querySelectorAll('.modal').forEach(function (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === this) closeModal(this);
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeModal(document.querySelector('.modal.is-open'));
    }
  });
});
