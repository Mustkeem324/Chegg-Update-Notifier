
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse){
    if(request.time==='1'){
    chrome.notifications.create({
      type: "image",
      iconUrl: "../images/icon-128.png",
      imageUrl: "../images/chegy.png",
      title: "Chegg Alert System",
      message: "HEY, YOU HAVE A QUESTION !!!\n\n",
      requireInteraction: true,
      priority:2,
    })

    chrome.storage.local.get("myVariable2", function(data) {
      const value = data.myVariable2;
      if(value){
        chrome.tts.speak(
          "Attention, you have a new question from Chegg! Please check it now. Attention, you have a new question from Chegg! Please check it now. Attention, you have a new question from Chegg! Please check it now. Attention, you have a new question from Chegg! Please check it now.",
          {
            'lang': 'en-UK',
            'voiceName': "Google UK English Male",
            'volume': 1.0,
            'pitch': 1
          }
        );
      }
    });

    chrome.notifications.onClicked.addListener(function (notificationId) {
        chrome.tabs.query({title:'QnA'}, function (tabs) {
            chrome.windows.update(tabs[0].windowId, { focused: true });
            chrome.tabs.update(tabs[0].id, {active: true });
        });
    });
   }
 },
)

//Listener for extension install/update
chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason === "update" || details.reason === 'install') {
    // Open the specified URL in a new tab
    chrome.tabs.create({ url: "https://nx.aba.vg/CUN/updates.html" });
  }
});


// Set uninstall URL
chrome.runtime.setUninstallURL('https://nx.aba.vg/CUN/remove.html');