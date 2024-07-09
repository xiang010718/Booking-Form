
import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import {FormsModule} from '@angular/forms'; 
import { BrowserAnimationsModule }  
    from '@angular/platform-browser/animations'; 
import { AppComponent }   from './app.component'; 
import {InputTextModule} from 'primeng/inputtext'; 
import {ButtonModule} from 'primeng/button'; 
import {CheckboxModule} from 'primeng/checkbox'; 
import {RadioButtonModule} from 'primeng/radiobutton'; 
import {RippleModule} from 'primeng/ripple'; 
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
  
@NgModule({ 
    imports: [ 
        BrowserModule, 
        BrowserAnimationsModule, 
        InputTextModule, 
        CheckboxModule, 
        ButtonModule, 
        RadioButtonModule, 
        RippleModule, 
        FormsModule,
        CalendarModule,
        InputNumberModule
    ], 
    declarations: [ AppComponent ], 
    bootstrap:    [ AppComponent ] 
}) 
  
export class AppModule { }
