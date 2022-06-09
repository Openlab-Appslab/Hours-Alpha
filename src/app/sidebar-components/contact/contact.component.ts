import { Component, OnInit } from '@angular/core';
import { sendSupport } from './support';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string = '';
  problem: string = '';

  model = new sendSupport('', '');
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {
  }

  firstFormGroup = this.fb.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  });

  sendSupport() {
    this.authService.sendSupport(this.model.name, this.model.problem);
    console.log(this.model);
  }
}
