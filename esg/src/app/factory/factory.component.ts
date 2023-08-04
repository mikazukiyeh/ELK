import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { cities, city } from '../city';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent {
  cities: city[] = cities;
  selectedCity: city | null = null;

  constructor(private router: Router) { }

  navigateToHome(): void {
    this.router.navigateByUrl('/home', { skipLocationChange: true });
  }
}
