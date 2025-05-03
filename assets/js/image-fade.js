/* log image */

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.character-image img').forEach((img) => {
    const show = () => img.classList.add('loaded');
    if (img.complete) {
      show();
    } else {
      img.addEventListener('load', show);
    }
  });
});
