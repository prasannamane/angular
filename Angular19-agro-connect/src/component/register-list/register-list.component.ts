import { Component, inject, OnInit } from '@angular/core';
import { RegisterServiceService } from '../../app/service/register-service.service';
import { FormArray, FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
//import { HttpClient } from '@angular/common/http';
//import { error } from 'console';
@Component({
  selector: 'app-register-list',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-list.component.html',
  styleUrl: './register-list.component.css'
})
export class RegisterListComponent implements OnInit{
  registerService: RegisterServiceService = inject(RegisterServiceService);
  data: any[] = [];
  formArray: FormArray<FormControl> = new FormArray<FormControl>([]); // Explicitly specify the type for initialization
  
  ngOnInit():void{
    this.registerService.getList().subscribe({
      next: (response) =>{ 
        console.log(response.data);
        this.formArray = new FormArray(
          response.data.map((item: any) => new FormControl(item))
        );
      },
      error: (error) => { console.log(error.error); }
    })
  }
}