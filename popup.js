document.getElementById('setSpeed').addEventListener('click', () => {
    const speed = parseFloat(document.getElementById('speed').value);
    if (!isNaN(speed)) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: (speed) => {
            const video = document.querySelector('video');
            if (video) video.playbackRate = speed;
          },
          args: [speed]
        });
      });
    }
  });
  
  document.getElementById('reset').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => {
          const video = document.querySelector('video');
          if (video) video.playbackRate = 1.0;
        }
      });
    });
  });
  
