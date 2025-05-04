/* Double Quote Text */

document.addEventListener('DOMContentLoaded', function () {
  const containers = document.querySelectorAll('.character-text');

  containers.forEach((container) => {
    let html = container.innerHTML;

    // "큰따옴표"
    html = html.replace(
      /(["“”])([^"“”]+?)\1/g,
      '<span class="double-quoted">“$2”</span>'
    );

    // '작은따옴표'
    html = html.replace(
      /(?<=\s|^)(['‘’])([^'‘’]+?)\1(?=\s|[.,!?;:]|$)/g,
      "<span class='single-quoted'>‘$2’</span>"
    );

    // <strong> → .bold
    html = html.replace(
      /<strong>(.*?)<\/strong>/g,
      "<span class='bold'>$1</span>"
    );

    // <em> → .italic
    html = html.replace(/<em>(.*?)<\/em>/g, "<span class='italic'>$1</span>");

    container.innerHTML = html;
  });
});
