/*
  Simple script element to make markdown documents more
  readable in a browser with markdeep and using a custom css.
  http://casual-effects.com/markdeep

  Usage: Add this to the begging of the markdown document, in this order
  <script src="this.js"></script>
  <link rel="stylesheet" href="custom.css"></link>
  <meta charset="utf-8">
*/

web_md()

function web_md() {
  if (window.location.search == "?raw") document.documentElement.innerText = document.documentElement.innerHTML
  var markdeep_script = document.createElement("script")
  window.markdeepOptions = { mode: 'script' }
  markdeep_script.src = "https://morgan3d.github.io/markdeep/latest/markdeep.min.js"
  document.head.appendChild(markdeep_script)
  markdeep_script.onload = process_md
}

function process_md() {
  document.body.innerHTML = window.markdeep.format(document.body.textContent, false)
}
