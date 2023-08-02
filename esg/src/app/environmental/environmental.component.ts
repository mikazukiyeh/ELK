import { Component, OnInit,  HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-environmental',
  templateUrl: './environmental.component.html',
  styleUrls: ['./environmental.component.css']
})
export class EnvironmentalComponent {

  currentIndex = 0;
  totalSlides = 2; // 總圖片數量
  isMouseOver = false;
  interval: any;
  selectedOption = 'hotel'; 

  constructor(private router: Router) { }

  onMouseEnter() {
    this.isMouseOver = true;
  }

  onMouseLeave() {
    this.isMouseOver = false;
  }

  onClickSlide(event: MouseEvent) {
    const slideWidth = (event.target as HTMLElement).offsetWidth;
    const clickX = event.clientX;

    if (this.isMouseOver) {
      if (clickX < slideWidth / 2 && this.currentIndex > 0) {
        this.currentIndex -= 1; // 向左滑動
      } else if (clickX >= slideWidth / 2 && this.currentIndex < this.totalSlides - 1) {
        this.currentIndex += 1; // 向右滑動
      }
    }
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      if (!this.isMouseOver && this.currentIndex < this.totalSlides - 1) {
        this.currentIndex += 1;
      }
    }, 6000); // 每 6 秒切換一張圖片
  }

  stopAutoSlide() {
    clearInterval(this.interval);
  }

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  // 回到首頁，使用 Angular 的路由導航
  navigateToHome(): void {
    this.router.navigateByUrl('/home');
  }

  onOptionChange() {
    // 在這裡處理選項變更的相應操作
  }
}
