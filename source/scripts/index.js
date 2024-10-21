/* в этот файл добавляет скрипты*/
window.addEventListener('load', () => {
  const burger = document.querySelector('.js-burger');
  const navigation = document.querySelector('.js-navigation', '.main-nav--no-js');

  burger.classList.remove('is-active');
  navigation.classList.remove('is-show');
  navigation.classList.remove('main-nav--no-js');

  burger.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.toggle('is-active');
    navigation.classList.toggle('is-show');
  });
});
