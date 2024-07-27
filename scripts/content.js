setTimeout(function(){
  const target = document.querySelector('div');

  if (target && target.textContent.includes("Unfortunately, no Qs are available in your queue at the moment")) {
      const header = document.querySelector("h4");

      const firstLine = document.createElement('p');
      const lineOne = document.createTextNode("Chegg Question Notifier is running in the background. Sit back and relax, you will receive a notification when there's a question. *** Do not close this tab ***");
      firstLine.appendChild(lineOne);
      firstLine.setAttribute("style", "color:#007bff; font-weight: bold; font-family:Arial, sans-serif; font-size:18px; text-align:center; background-color:#f8f9fa; padding:10px; border-radius:5px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);");

      const space = document.createElement('p');
      const emptySpace = document.createTextNode(".");
      space.appendChild(emptySpace);
      space.setAttribute("style", "opacity:0");

      const space2 = document.createElement('p');
      const emptySpace2 = document.createTextNode(".");
      space2.appendChild(emptySpace2);
      space2.setAttribute("style", "opacity:0");

      const lastLine = document.createElement('p');
      const content = document.createTextNode("This message is an indication that the extension is On. Remember to refresh if you don't see this message.");
      lastLine.appendChild(content);
      lastLine.setAttribute("style", "color:#007bff; font-weight: bold; font-family:Arial, sans-serif; font-size:18px; text-align:center; background-color:#f8f9fa; padding:10px; border-radius:5px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);");

      const dotLine = document.createElement('p');
      const dots = document.createTextNode("--------------------------------------------------------");
      dotLine.appendChild(dots);
      dotLine.setAttribute("style", "font-family:Arial, sans-serif; text-align:center; color:#28a745; font-size:20px; margin-top:20px; margin-bottom:20px;");

      const tele = document.createElement('p');
      const teleContent = document.createTextNode("Be a part of our diverse Chegg community on Telegram that has experts from various subjects.");
      tele.appendChild(teleContent);
      tele.setAttribute("style", "text-align:center; color:#28a745; font-family:Arial, sans-serif; font-size:18px; background-color:#f8f9fa; padding:10px; border-radius:5px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);");

      const link = document.createElement('a');
      const linkContent = document.createTextNode("Click here to join");
      link.appendChild(linkContent);
      link.setAttribute("style", "display:block; margin:auto; text-align:center; font-weight: bold; letter-spacing: 1px; font-family:Arial, sans-serif; font-size:18px; color:#28a745; text-decoration:none; border:2px solid #28a745; padding:10px 20px; border-radius:5px; background-color:#eaf0f1; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); transition: background-color 0.3s;");
      link.href = "https://t.me/cheggnx";
      link.target = "_blank";

      link.addEventListener('mouseover', function() {
          link.style.backgroundColor = '#d4edda';
      });

      link.addEventListener('mouseout', function() {
          link.style.backgroundColor = '#eaf0f1';
      });

      const dotLine2 = document.createElement('p');
      const dots2 = document.createTextNode("--------------------------------------------------------");
      dotLine2.appendChild(dots2);
      dotLine2.setAttribute("style", "font-family:Arial, sans-serif; text-align:center; color:#28a745; font-size:20px; margin-top:20px; margin-bottom:20px;");

      header.appendChild(space);
      header.appendChild(firstLine);
      header.appendChild(lastLine);
      header.appendChild(space2);
      header.appendChild(dotLine);
      header.appendChild(tele);
      header.appendChild(link);
      header.appendChild(dotLine2);

      chrome.storage.local.get("timeValue", function(data){
          const value = data.timeValue;
          if (value) {
              const x = value * 1000;
              setTimeout(() => {
                  window.location.reload();
              }, x);
          } else {
              setTimeout(() => {
                  window.location.reload();
              }, 60000);
          }
      });
  } else {
      if (target && (target.textContent.includes('Student question') || target.textContent.includes('Legacy Solution'))) {
          chrome.runtime.sendMessage({ time: "1" });
          const btn = document.querySelector('[data-test-id="answerButton"]');

          chrome.storage.local.get("myVariable", function(data) {
              const value = data.myVariable;
              if (value && btn) {
                  btn.click();
              }
          });
      }
  }
}, 2700);

setTimeout(function(){
  const target = document.querySelector('div');
  if (target && !target.textContent.includes("Chegg Question Notifier") && !target.textContent.includes('Student question') && !target.textContent.includes('Legacy Solution')) {
      window.location.reload();
  }
}, 10000);
