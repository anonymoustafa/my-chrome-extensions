function logging(){
    console.log("log!");
}

document.getElementById('mySlider').addEventListener('input', function(event) {
    console.log('Slider value:', event.target.value);
  });



function onOffLable(){
    var slider = document.getElementById('mySlider');
    var label = document.getElementById('mySliderLabel');
    
    switch(slider.value) {
      case '0':
        label.innerHTML = 'Off';
        break;
      case '1':
        label.innerHTML = 'On';
        break;
    }
}

chrome.tabs.onUpdated.addL