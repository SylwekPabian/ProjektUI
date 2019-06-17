import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Camera } from '../@core/data/security-cameras';
import { Electricity } from '../@core/data/electricity';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  private url = 'https://smarthomeui.herokuapp.com/';

  constructor(private http: HttpClient) {
  }
  /**
   * Metoda pobierająca z serwera liste kamer
   * @returns Observable lista kamer
   */
  getCamerasList(): Observable<Camera[]> {
    return this.http.get<Camera[]>(this.url + 'camera/getCamerasList');
  }

  /**
   * Metoda pobierająca z serwera jedną kamerę
   * @param  {} id id kamery
   * @returns Observable informacje o kamerze
   */
  getCameraById(id): Observable<Camera> {
    return this.http.get<Camera>(this.url + 'getCamera?id=' + id);
  }
  
  /**
   * Metoda pobierająca z serwera informacje o zużyciu energii
   * @returns Observable informacje o zużyciu energii
   */
  getEnergyData(): Observable<Electricity[]> {
    return this.http.get<Electricity[]>(this.url + 'energy/info');
  }

  /**
   * Metoda pobierająca z serwera listę pokoi
   */
  getRoomData() {
    return this.http.get(this.url + 'room/list');
  }

  /**
   * Metoda pobierająca z serwera informację o jednym pokoju
   * @param  {} id id pokoju
   */
  getRoomById(id) {
    return this.http.get(this.url + 'room/info?id=' + id);
  }

  /**
   * Metoda wysyłająca na serwer informację o dodanym pokoju
   * @param  {} data dane o pokoju
   */
  changeRoomProperties(data) {
    return this.http.post(`${this.url}/room/changeproperties`, { data: data });
  }
}
