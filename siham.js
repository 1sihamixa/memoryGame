
/*start Zoom*/
document.addEventListener('DOMContentLoaded', function() {
  var windows = document.querySelectorAll('.window');
  var clickedWindows = new Array(windows.length).fill(false);
  var lastClickedIndex = -1;

  windows.forEach(function(window, index) {
    window.addEventListener('click', function() {
      if (!clickedWindows[index]) {
        if (lastClickedIndex !== -1 && lastClickedIndex !== index) {
          closeWindow(lastClickedIndex);
        }
        openWindow(index);
        clickedWindows[index] = true;
        lastClickedIndex = index;

        setTimeout(function() {
          closeWindow(index);
          clickedWindows[index] = false;
          lastClickedIndex = -1;
        }, 3000);
      } else {
        closeWindow(index);
        clickedWindows[index] = false;
        lastClickedIndex = -1;
      }
    });
  });

  function openWindow(index) {
    var windowDoors = document.querySelectorAll('.window');
    windowDoors[index].classList.add('zoomed'); 
  }

  function closeWindow(index) {
    var windowDoors = document.querySelectorAll('.window');
    windowDoors[index].classList.remove('zoomed');
  }
});

/*end Zoom*/

/*start Image matching*/

document.addEventListener('DOMContentLoaded', function() {
  var windows = document.querySelectorAll('.window');
  var clickedWindows = new Array(windows.length).fill(false);
  var lastClickedIndex = -1;
  var matchedWindows = [];

  windows.forEach(function(window, index) {
    window.addEventListener('click', function() {
      if (!clickedWindows[index]) {
        if (lastClickedIndex !== -1 && lastClickedIndex !== index) {
          closeWindow(lastClickedIndex);
        }
        openWindow(index);
        clickedWindows[index] = true;
        lastClickedIndex = index;
        checkMatchedWindows(index); 
      } else {
        closeWindow(index);
        clickedWindows[index] = false;
        lastClickedIndex = -1;
      }
      
    });
  });

  function checkMatchedWindows(index) {
    if (index !== undefined) {
      matchedWindows.push(index);
     
      if (matchedWindows.length === 2) {
        var firstWindowIndex = matchedWindows[0];
        var secondWindowIndex = matchedWindows[1];
        var firstWindowImage = document.querySelectorAll('.window')[firstWindowIndex].style.backgroundImage;
        var secondWindowImage = document.querySelectorAll('.window')[secondWindowIndex].style.backgroundImage;
        
        if (firstWindowImage === secondWindowImage) {
          openWindow(firstWindowIndex);
          openWindow(secondWindowIndex);
        }
        
        matchedWindows = [];
      }

    }
  }

  function openWindow(index) {
    var windowDoors = document.querySelectorAll('.window-door');
    windowDoors[index].style.display = 'block';
  }

  function closeWindow(index) {
    var windowDoors = document.querySelectorAll('.window-door');
    windowDoors[index].style.display = 'none';
  }
});


/*end Image matching*/