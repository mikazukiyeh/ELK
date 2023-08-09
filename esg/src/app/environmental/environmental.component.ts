import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-environmental',
  templateUrl: './environmental.component.html',
  styleUrls: ['./environmental.component.css']
})
export class EnvironmentalComponent implements OnInit {

  currentIndex = 0;
  totalSlides = 2; // 總圖片數量
  selectedOption = 'hotel';

  constructor(private router: Router) { }

  ngOnInit() {
    // 自動輪播切換
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    }, 8000); // 每 6 秒切換一張圖片
  }

  // 回到首頁，使用 Angular 的路由導航
  navigateToHome(): void {
    this.router.navigateByUrl('/home'); 
  }

  onOptionChange() {
    // 在這裡處理選項變更的相應操作
  }
}