var table = document.getElementById('data-body');

table.addEventListener('click', function(event) {
  var target = event.target;

  if (target.tagName === 'TD' && !target.hasAttribute('data-clicked')) {
    target.setAttribute('data-clicked', 'yes');
    target.setAttribute('data-text', target.innerHTML);

    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.value = target.innerHTML;
    input.style.cssText = `
      border: 0;
      font-family: inherit;
      font-size: inherit;
      text-align: inherit;
      background-color: Orange;
    `;

    input.addEventListener('blur', function() {
      var td = input.parentElement;
      var orig_text = td.getAttribute('data-text');
      var current_text = this.value;

      if (orig_text !== current_text) {
        // need to add regex and database call here
        // must be a single database call as multiple will affect performance when opening and closing connection
        td.innerHTML = current_text;
        console.log(orig_text + ' now changed to ' + current_text);
      } else {
        td.innerHTML = current_text;
        console.log("Saving without changes");
      }

      td.removeAttribute('data-clicked');
      td.removeAttribute('data-text');
    });

    target.innerHTML = '';
    target.style.padding = '0';
    target.appendChild(input);
    input.select();
  }
});

console.log(table.getElementsByTagName('td'));