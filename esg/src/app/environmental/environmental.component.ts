import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-environmental',
  templateUrl: './environmental.component.html',
  styleUrls: ['./environmental.component.css']
})
export class EnvironmentalComponent {

  // 在構造函數中注入 Router
  constructor(private router: Router) {}

  // 回到首頁，使用 Angular 的路由導航
  navigateToHome(): void {
    this.router.navigateByUrl('/home'); 
  }

  selectedOption = 'hotel';

  onOptionChange() {
  
  }
}
