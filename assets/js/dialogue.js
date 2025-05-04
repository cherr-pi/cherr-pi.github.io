/* Double Quote Text */

document.addEventListener('DOMContentLoaded', function () {
  const containers = document.querySelectorAll('.character-text');

  containers.forEach((container) => {
    let html = container.innerHTML;

    // double-quoted dialogue: "text"
    html = html.replace(
      /(["“”])([^"“”]+?)\1/g,
      '<span class="double-quoted">“$2”</span>'
    );

    // single-quoted dialogue (NOT contractions)
    html = html.replace(
      /(?<=\s|^)(['‘’])([^'‘’]+?)\1(?=\s|[.,!?;:]|$)/g,
      "<span class='single-quoted'>‘$2’</span>"
    );

    // bold
    html = html.replace(/\*\*([^*]+?)\*\*/g, "<span class='bold'>$1</span>");

    // italic
    html = html.replace(
      /(^|[^*])\*([^*]+?)\*(?!\*)/g,
      "$1<span class='italic'>$2</span>"
    );

    container.innerHTML = html;
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const containers = document.querySelectorAll('.character-text');

  containers.forEach((container) => {
    let html = container.innerHTML;

    html = html.replace(/\n{2,}/g, '</p><p>');

    html = html.replace(/([^\n])\n(?=[^\n])/g, '$1<br>');

    html = `<p>${html}</p>`;

    container.innerHTML = html;
  });
});
