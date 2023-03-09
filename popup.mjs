chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      const applyBtn = document.getElementById('applyBtn');
      const colorPicker = document.getElementById('colorPicker');

      applyBtn.addEventListener('click', () => {
        document.body.style.backgroundColor = colorPicker.value;
      });
    }
  });
});
