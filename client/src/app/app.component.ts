import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Shop';
  products:any[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/products?pageSize=50').subscribe(
      (response: any) => {
        this.products = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
