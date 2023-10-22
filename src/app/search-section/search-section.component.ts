import { Component } from '@angular/core';
import { Octokit } from 'octokit';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.scss']
})

export class SearchSectionComponent {
  octokit = new Octokit({ 
   auth: ''
  });
  userData: any = null;
  isLoading: boolean = false;
  
  constructor() {}

  async findUser(username: string) {
    if (!username) {
      return;
    }
    const searchData: any = { username, timestamp: new Date(), historyId: new Date().valueOf() };
    try {
      this.isLoading = true;
      this.userData = null;
      const data = await this.octokit.request(`GET /users/${username}`, {
        username,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      }); 
      searchData["searchStatus"] = 'found';
      searchData["profileUrl"] = data.data.html_url;
      
      this.userData = data.data;
      this.userData['searchStatus'] = 'found';
      this.rewriteHistory(searchData);
      this.isLoading = false;
    } catch (err: any) {
      this.isLoading = false;
      console.log('error here - ', err, err.errMsg, err.message, err.code);
      if (err.message == 'Not Found' || err.code == 404) {
        searchData['searchStatus'] = 'notFound';
        this.userData = { searchStatus: 'notFound' };
      } else {
        searchData["searchStatus"] = 'failed';
        this.userData = { searchStatus: 'failed' };
      }
      this.rewriteHistory(searchData);
    }
  }

  rewriteHistory(searchData: any) {
    const githubSearchHistory: string = localStorage.getItem('githubSearchHistory') || '[]';
    const historyItems = JSON.parse(githubSearchHistory);
    historyItems.push(searchData);
    localStorage.setItem('githubSearchHistory', JSON.stringify(historyItems));
  }  
}

