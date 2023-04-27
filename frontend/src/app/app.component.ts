import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'frontend';

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService
    .getAll()
    .subscribe(data => {console.log(data)})
  }

  submitData(value: any) {
    let body = {
      name: value.name,
      age: value.age
    }
  }
}
