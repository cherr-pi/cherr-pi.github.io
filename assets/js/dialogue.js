/* Double Quote Text */

document.addEventListener('DOMContentLoaded', function () {
  const paragraphs = document.querySelectorAll('.character-text p');

  paragraphs.forEach((p) => {
    let html = p.innerHTML;

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

    p.innerHTML = html;
  });
});
