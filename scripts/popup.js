
document.addEventListener("DOMContentLoaded", function () {
    getCheck();
    //for first Toggle
    const toggleCheckbox = document.getElementById("toggleCheckbox");
    toggleCheckbox.addEventListener("change", function () {
      const isChecked = toggleCheckbox.checked;
      //storing value in local storage
      chrome.storage.local.set({ myVariable: isChecked });
      // chrome.runtime.sendMessage({ action: "toggleCheckbox", value: isChecked });
    });
    
    //for second Toggle
    const toggleCheckbox2 = document.getElementById("toggleCheckbox2");
    toggleCheckbox2.addEventListener("change", function () {
      const isChecked = toggleCheckbox2.checked;
      //storing value in local storage
      chrome.storage.local.set({ myVariable2: isChecked });
      // chrome.runtime.sendMessage({ action: "toggleCheckbox", value: isChecked });
    });

    const timeInterval = document.getElementById("timeInterval");
        timeInterval.addEventListener("change", function () {
        const timeIntervalValue = timeInterval.value;
        if(timeIntervalValue && timeIntervalValue>=10)
            chrome.storage.local.set({ timeValue: timeIntervalValue });
        else if(timeIntervalValue && timeIntervalValue<10)
            chrome.storage.local.set({ timeValue: 10 });
        else
            chrome.storage.local.set({ timeValue: 60 });
    });

  });

  function getCheck(){
    chrome.storage.local.get(["myVariable", "myVariable2"], function(data) {
        const value = data.myVariable;
        const value2 = data.myVariable2;
        if(value){
            document.getElementById('toggleCheckbox').checked=true;
        }
        else {
            document.getElementById('toggleCheckbox').checked=false;
        }

        if(value2){
            document.getElementById('toggleCheckbox2').checked=true;
        }
        else{
            chrome.tts.stop();
            document.getElementById('toggleCheckbox2').checked=false;
        }
      });
    chrome.storage.local.get("timeValue", function(data) {
        const value = data.timeValue;
        if(value){
            document.getElementById('timeInterval').value=value;
        }
        else {
            document.getElementById('timeInterval').value=60;
        }
    });

  }