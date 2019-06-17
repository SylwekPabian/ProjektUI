import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-not-found',
  styleUrls: ['./not-found.component.scss'],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {

  constructor(private menuService: NbMenuService) {
  }
  
  /**
   * Metoda przenosząca do strony domowej
   */
  goToHome() {
    this.menuService.navigateHome();
  }
}
