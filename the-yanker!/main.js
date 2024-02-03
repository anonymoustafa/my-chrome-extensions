document.addEventListener('mouseup', function() {
    var selectedText = window.getSelection().toString();
    if (selectedText) {
      navigator.clipboard.writeText(selectedText)
        .then(function() {
          console.log('Text copied to clipboard');
        })
        .catch(function(err) {
          console.error('Could not copy text: ', err);
        });
    }
  });