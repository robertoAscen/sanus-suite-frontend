// angular import
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // public props
  isDarkTheme = new ReplaySubject<string>(1);
}
