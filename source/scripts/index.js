/* в этот файл добавляет скрипты*/
window.addEventListener('load', () => {
  const burger = document.querySelector('.js-burger');
  const navigation = document.querySelector('.js-navigation');

  burger.classList.remove('is-active');
  navigation.classList.remove('is-show');

  burger.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.toggle('is-active');
    navigation.classList.toggle('is-show');
  });
});
