import { Component, isStandalone } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: false
})
export class DashboardComponent {
    cards = [
        { title: 'Card 1', content: 'Content for card 1' },
        { title: 'Card 2', content: 'Content for card 2' },
        { title: 'Card 3', content: 'Content for card 3' },
    ];
}