/* Double Quote Text */

document.addEventListener('DOMContentLoaded', function () {
  const paragraphs = document.querySelectorAll('.character-text p');

  paragraphs.forEach((p) => {
    let html = p.innerHTML;

    // match “double quotes” (or regular ")
    html = html.replace(
      /(["“”])([^"“”]+?)\1/g,
      '<span class="double-quoted">“$2”</span>'
    );

    // match ‘single quotes’ (or regular ')
    html = html.replace(
      /(['‘’])([^'‘’]+?)\1/g,
      "<span class='single-quoted'>‘$2’</span>"
    );

    // bold text: **text**
    html = html.replace(/\*\*([^*]+?)\*\*/g, "<span class='bold'>$1</span>");

    // italic text: *text*
    html = html.replace(
      /(^|[^*])\*([^*]+?)\*(?!\*)/g,
      "$1<span class='italic'>$2</span>"
    );

    p.innerHTML = html;
  });
});
