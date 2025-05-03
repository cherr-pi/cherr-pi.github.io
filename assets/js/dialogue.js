/* Double Quote Text */

document.addEventListener('DOMContentLoaded', function () {
  const paragraphs = document.querySelectorAll('.character-text p');

  paragraphs.forEach((p) => {
    let html = p.innerHTML;

    // double-quoted dialogue: "text" and “text”
    html = html.replace(
      /(?:["“”])([^"“”]+)(?:["“”])/g,
      '<span class="double-quoted">“$1”</span>'
    );

    // single-quoted dialogue: 'text' and ‘text’
    html = html.replace(
      /(?:['‘’])([^'‘’]+)(?:['‘’])/g,
      "<span class='single-quoted'>‘$1’</span>"
    );

    // bold text: **text**
    html = html.replace(/\*\*([^*]+)\*\*/g, "<span class='bold'>$1</span>");

    // italic text: *text*
    html = html.replace(/\*([^*]+)\*/g, "<span class='italic'>$1</span>");

    p.innerHTML = html;
  });
});
