import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo2';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>('http://localhost:4200/assets/a.json')
      .pipe(
        map((data) => data.data)
      );
  }
}
