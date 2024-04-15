import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input("my-title")
  title?: string;
  @Input("font-size")
  fontSize: string = 'text-2xl';
  @Input()
  color: string = 'text-sky-600';

  onClick() {
    const colors = ['red', 'green', 'blue', 'black', 'orange'];
    this.color = 
          `text-${colors[Math.floor(Math.random() * colors.length)]}-500`;
    console.log(this.color);
  }
}
