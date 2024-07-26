document.querySelector('.btn').addEventListener('click', () => {
  const name = document.querySelector('.form .name').value;
  const title = document.querySelector('.form .title').value;
  const phone = document.querySelector('.form .phone').value;
  const email = document.querySelector('.form .email').value;

  document.querySelector('.card .name').textContent = name;
  document.querySelector('.card .title .value').textContent = title;
  document.querySelector('.card .phone .value').textContent = phone;
  document.querySelector('.card .email .value').textContent = email;

  document.querySelector('.card').classList.add('show');
});