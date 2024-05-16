import { HttpClient, } from '@angular/common/http';
import { Component, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  constructor(private http: HttpClient) { }

  submit(data: any) {
    data.preventDefault();

    let body = {
      "firstname": data.firstName,
    }
    this.http.post<any>('https://student-api.mycodelibraries.com/api/student/add', body,)
      .subscribe(response => {
        console.log('added data');
        this.resetform();
      },
      );
  }
  resetform() {
    // this.data.resetForm(); 
  }


}

