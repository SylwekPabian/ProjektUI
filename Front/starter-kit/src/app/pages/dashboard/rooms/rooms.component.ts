import { Component, HostBinding, OnDestroy } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';

@Component({
  selector: 'ngx-rooms',
  styleUrls: ['./rooms.component.scss'],
  template: `
    <nb-card [size]="breakpoint.width >= breakpoints.sm ? 'large' : 'medium'">
      <i (click)="collapse()" class="nb-arrow-down collapse" [hidden]="isCollapsed()"></i>
      <ngx-room-selector (select)="select($event)"></ngx-room-selector>
    </nb-card>
  `,
})
export class RoomsComponent implements OnDestroy {

  @HostBinding('class.expanded')
  private expanded: boolean;
  private selected: number;

  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  themeSubscription: any;

  constructor(private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService) {

    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeSubscription = this.themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }
  
  /**
   * Metoda wybierająca pokój
   * @param  {} roomNumber numer pokoju
   */
  select(roomNumber) {
    if (this.isSelected(roomNumber)) {
      this.expand();
    } else {
      this.collapse();
    }

    this.selected = roomNumber;
  }

  /**
   * Metoda rozszerzająca
   */
  expand() {
    this.expanded = true;
  }

  collapse() {
    this.expanded = false;
  }

  isCollapsed() {
    return !this.expanded;
  }

  /**
   * Metoda sprawdzająca czy pokój jest wybrany
   * @param  {} roomNumber numer pokoju
   * @returns boolean true jak wybrany; false jak nie wybrany
   */
  private isSelected(roomNumber): boolean {
    return this.selected === roomNumber;
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
