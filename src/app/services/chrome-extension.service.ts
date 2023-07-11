import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ChromeExtensionService {

  constructor() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      // Access the active tab and perform actions
      const activeTab = tabs[0];
      console.log(activeTab);
    });
    chrome.runtime.connect();
    chrome.runtime.sendMessage({ type: 'sharedData', data: "data" });

    
  }
}
