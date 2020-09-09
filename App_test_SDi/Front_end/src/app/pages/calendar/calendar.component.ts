import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { CongeService } from 'src/app/_services/conge.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Conge } from 'src/app/models/conge-model';
declare var $: any;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  listconge = [];
 
  currentUser: any;
 
  calendarOptions: CalendarOptions;
  constructor(private congeservice: CongeService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(){
    this.currentUser = this.tokenStorageService.getUser();
    this.get_list_conge();
  }
  handleDateClick(arg) {
    $('#addcongdialog').modal('show');
    // const eventObject1 = ( <HTMLSelectElement> document.getElementById("addcongdialog") );
  }
  get_list_conge(){
    const user_id = this.currentUser.data.id_user;
    this.congeservice.getcongesbyuser(user_id).subscribe(data =>{
      console.log("data", data)
    
      this.listconge.push(data);
   
      setTimeout(() => {
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick.bind(this), // bind is important!
        events: [this.listconge],
        displayEventEnd: true

      }; }, 3000);
    });
  }
 
 
}
