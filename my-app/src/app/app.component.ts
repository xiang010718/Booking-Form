import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api'; // Import PrimeNGConfig for PrimeNG setup

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    calendarVal?: Date;
    formGroup!: FormGroup;// Add FormGroup property for age input

    constructor(private primengConfig: PrimeNGConfig, private fb: FormBuilder) {}

    ngOnInit(): void {
        this.primengConfig.ripple = true; // Initialize PrimeNGConfig for ripple effect

        // Initialize formGroup for age input
        this.formGroup = this.fb.group({
            age: ['', [Validators.required, Validators.min(0)]]
        });
    }

    get age() { return this.formGroup.get('age'); } // Getter function for age form control
}