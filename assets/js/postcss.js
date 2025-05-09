// dialogue-general.js
document.addEventListener('DOMContentLoaded', function () {
  const containers = document.querySelectorAll('.post-content');

  containers.forEach((container) => {
    let html = container.innerHTML;

    // bold
    html = html.replace(/\*\*([^*]+?)\*\*/g, "<span class='bold'>$1</span>");

    // italic
    html = html.replace(
      /(^|[^*])\*([^*]+?)\*(?!\*)/g,
      "$1<span class='italic'>$2</span>"
    );

    // quotes (optional — include if desired)
    html = html.replace(
      /(["“”])([^"“”]+?)\1/g,
      '<span class="double-quoted">“$2”</span>'
    );
    html = html.replace(
      /(?<=\s|^)(['‘’])([^'‘’]+?)\1(?=\s|[.,!?;:]|$)/g,
      "<span class='single-quoted'>‘$2’</span>"
    );

    container.innerHTML = html;
  });
});
