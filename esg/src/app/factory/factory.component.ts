import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { cities, city } from '../city';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})


export class FactoryComponent {
  cities = cities;
  selectedCity: city | null = null;
  srcUrl: any;

  @Input() city: string = '';
  @Input() iframeUrl: string = '';
 

  constructor(private router: Router, private sanitizer:DomSanitizer ) { }

  navigateToHome(): void {
    this.router.navigateByUrl('/home', { skipLocationChange: true });
  }

  setSelectedCity(city: city | null): void {
    this.selectedCity = city;
    this.srcUrl = city ? this.sanitizer.bypassSecurityTrustResourceUrl(city.iframeUrl) : null;
  }

  // ngOnInit(){
  //   this.srcUrl = this.sanitizer. bypassSecurityTrustResourceUrl(this.iframeUrl)
  // }
}
