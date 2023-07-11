import { Component } from '@angular/core';
import { ChromeExtensionService } from './services/chrome-extension.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chrome Extension';
  constructor(private chromeService: ChromeExtensionService){
    console.log(chromeService)
  }
}
