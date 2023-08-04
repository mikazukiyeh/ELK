import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { cities, city } from '../city';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent {
  cities: city[] = cities;
  selectedCity: city | null = null;
  sanitizedIframeUrl: SafeResourceUrl | null = null;

  constructor(private router: Router, private sanitizer: DomSanitizer) { }

  navigateToHome(): void {
    this.router.navigateByUrl('/home', { skipLocationChange: true });
  }

  updateSelectedCity(city: city): void {
    this.selectedCity = city;
    const encodedIframeUrl = encodeURIComponent(city.iframeUrl);
    this.sanitizedIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(encodedIframeUrl);
  }
}
