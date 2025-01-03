import { Component, inject, OnInit } from '@angular/core';
import { RegisterServiceService } from '../../app/service/register-service.service';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';
@Component({
  selector: 'app-register-list',
  imports: [],
  templateUrl: './register-list.component.html',
  styleUrl: './register-list.component.css'
})
export class RegisterListComponent implements OnInit{
  registerService: RegisterServiceService = inject(RegisterServiceService);
  
  ngOnInit():void{
    this.registerService.getList().subscribe({
      next: (value) =>{ console.log(value); },
      error: (error) => { console.log(error.error); }
    })
  }
}