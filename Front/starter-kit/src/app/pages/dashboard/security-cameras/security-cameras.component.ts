import {Component, OnDestroy, OnInit} from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { DataService } from '../../../service/data.service';
import { Camera } from '../../../@core/data/security-cameras';

@Component({
  selector: 'ngx-security-cameras',
  styleUrls: ['./security-cameras.component.scss'],
  templateUrl: './security-cameras.component.html',
})
export class SecurityCamerasComponent implements OnDestroy {

  private alive = true;
  cameras: Camera[];
  selectedCamera: Camera;
  isSingleView = false;
  
  /**
   * Konstruktor klasy SecurityCamerasComponent
   * @param  {DataService} privateservice Dane z naszej bazy danych przekazane przez DataService
   */
  constructor(private service: DataService) {
    this.service.getCamerasList()
	.pipe(takeWhile(() => this.alive))
	.subscribe((cameras: Camera[]) => {
      this.cameras = cameras['cameras'];
      this.selectedCamera = this.cameras[0];
    });
  }
  
  /**
   * Metoda wybierająca kamere
   * @param  {any} camera kamera
   */
  selectCamera(camera: any) {
    this.selectedCamera = camera;
    this.isSingleView = true;
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
