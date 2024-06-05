"use strict";
chrome.contextMenus.removeAll(function() {
  chrome.contextMenus.create({
    "title": "Поиск в логах",
    "contexts": ["selection"],
    "id": "searchLog"
  });
});
function events(info, tab) {
  if (info.menuItemId == "searchLog") {
    if (/^[a-z0-9_.]+$/i.test(info.selectionText)) {
      chrome.storage.local.get(null, (storage) => {
        if (storage.settings) {
          let settings = JSON.parse(storage.settings);
          let server = "";
          if (settings.isSearchOnOneServer)  {
            server = [1,2,3,4,5,8,9,10,12,15,19,20,21,22,23,24,25,26,27,28,30,32,29,31];
            server = "&server="+server[settings.server];
          }
          chrome.tabs.create({"url":`http://ulog.union-u.net/search.php?searchtext=${info.selectionText}${server}`});
        }
      })
    }
  }
}
chrome.storage.local.get("settings", (settings) => {
  settings = JSON.parse(settings.settings);
  if (settings.version && settings.version != chrome.runtime.getManifest()["version"]) {
    settings.version = chrome.runtime.getManifest()["version"];
    chrome.storage.local.set({"settings": JSON.stringify(settings)});
    if (!/\d+\.\d+\.\d+/.test(settings.version))
      chrome.tabs.create({"url": `https://seraphtech.site/update/`});
  }
})
