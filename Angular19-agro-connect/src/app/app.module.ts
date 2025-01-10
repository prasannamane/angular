import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Add this import
import { AppComponent } from './app.component';
import { RegisterListComponent } from '../component/register-list/register-list.component';
import { RegisterServiceService } from './service/register-service.service'; // Service
import { ReactiveFormsModule } from '@angular/forms'; // For Reactive Forms

@NgModule({
  declarations: [
    AppComponent,
    RegisterListComponent, // Declare RegisterListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule, // Import CommonModule for directives like *ngFor
    ReactiveFormsModule, // Add ReactiveFormsModule to handle FormArray
  ],
  providers: [RegisterServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
