console.log(document.getElementById('text'));
console.log(document.getElementById('btn'));

const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
});