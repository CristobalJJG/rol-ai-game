import { Component, OnInit } from '@angular/core';
import { IaService } from './services/ia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rol-ai-game';
  constructor(private ai: IaService) {
  }

  async ngOnInit() {
    //await this.ai.getResponse();
  }
}
