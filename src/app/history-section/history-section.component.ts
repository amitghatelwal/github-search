import { Component } from '@angular/core';

@Component({
  selector: 'app-history-section',
  templateUrl: './history-section.component.html',
  styleUrls: ['./history-section.component.scss']
})
export class HistorySectionComponent {
  historyItems: Array<any> = [];

  constructor() {}

  ngOnInit() {
    const githubSearchHistory: string = localStorage.getItem('githubSearchHistory') || '[]';
    this.historyItems = JSON.parse(githubSearchHistory)
    this.historyItems = this.historyItems.sort((history1: any, history2: any) => {
      console.log("in sort - ",  new Date(history1.timestamp).valueOf() - new Date(history2.timestamp).valueOf());
      return new Date(history2.timestamp).valueOf() - new Date(history1.timestamp).valueOf();
    });
    console.log('here is something - ', this.historyItems);
  }

  clearAllHistory() {
    console.log('heres is cleared history');
    localStorage.setItem('githubSearchHistory', '');
    this.historyItems = [];
  }

  // delete history
  deletePastSearch (historyId: number) {
    const githubSearchHistory: string = localStorage.getItem('githubSearchHistory') || '[]';
    this.historyItems = JSON.parse(githubSearchHistory);
    
    const index = this.historyItems.map((history: any) => { return history.historyId }).indexOf(historyId);
    console.log('here index in delete - ', index, historyId);
    // this.historyItems.filter(history => history.historyId != )
    if (index > -1) {
      this.historyItems.splice(index, 1);
    }
    localStorage.setItem('githubSearchHistory', JSON.stringify(this.historyItems));
  }
}
