(() => {
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  const dialog = document.querySelector('#notice');
  const config = window.PASSFOLIO_CONFIG || {};
  document.querySelectorAll('[data-destination]').forEach(link => {
    const key = link.dataset.destination;
    const url = config[key];
    if (url && /^https:\/\//.test(url)) {
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      if (key === 'appStore') {
        const label = link.querySelector('small');
        if (label) label.textContent = '前往 App Store 下載';
      }
    } else {
      link.addEventListener('click', event => {
        event.preventDefault();
        const download = key === 'appStore';
        document.querySelector('#notice-title').textContent = download ? '下一段旅程，即將啟程。' : '我們想聽聽你的想法。';
        document.querySelector('#notice-text').textContent = download ? 'Passfolio iPhone 版本準備中。正式上架後，這裡將提供 App Store 下載連結。' : '意見回饋表單準備中，開放後將從這裡連結至 Google 表單。';
        dialog.showModal();
      });
    }
  });
  if (dialog) {
    dialog.querySelectorAll('button').forEach(button => button.addEventListener('click', () => dialog.close()));
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
  }
})();
