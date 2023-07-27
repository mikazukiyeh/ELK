import { Component, ViewChild } from '@angular/core';
import { IMAGES } from '../image'; // 假設 image.ts 與 other.component.ts 在同一個資料夾中
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  images = IMAGES;
  @ViewChild(MatDrawer) drawer!: MatDrawer;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    // 監聽視窗的滾動事件
    window.addEventListener("scroll", () => {
      console.log("Scroll event triggered!"); // 檢查滾動事件是否被觸發
  
      const header = document.querySelector("header")!; // 使用非空斷言運算子
      const headerHeight = header.offsetHeight;
      const scrollY = window.scrollY || window.pageYOffset;
      const showThreshold = headerHeight / 2;
  
      // 判斷滑動位置是否大於等於header一半的高度
      if (scrollY >= showThreshold) {
        header.classList.add("show-nav");
        console.log("Show navigation bar!"); // 檢查導覽列是否顯示
      } else {
        header.classList.remove("show-nav");
        console.log("Hide navigation bar!"); // 檢查導覽列是否隱藏
      }
    });
  }
}
