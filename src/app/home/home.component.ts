import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../core/services/example.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
tickets:any = [];
order: string = 'name';
reverse: boolean = false;
loader: boolean = true;
  
  constructor(private ticketService: ExampleService) { }

  ngOnInit() {
  	this.ticketService.getTickets().subscribe(data => {
  		this.tickets = data;
      this.loader = false;
  	});
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

}
