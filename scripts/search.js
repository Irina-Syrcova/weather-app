export function search() {
  document.querySelector('.search__input').addEventListener('input', function() {
    console.log(this.value);
  });
}