function updateTime() {
  const timeEl = document.querySelector('[data-testid="test-user-time"]');
  timeEl.textContent = Date.now();
}

// initial render
updateTime();

// optional live update every 1 second
setInterval(updateTime, 1000);
