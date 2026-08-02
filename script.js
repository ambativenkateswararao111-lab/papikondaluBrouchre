document.getElementById('year').textContent = new Date().getFullYear();

const downloadBtn = document.getElementById('downloadBtn');
downloadBtn.addEventListener('click', () => {
  window.print();
});
