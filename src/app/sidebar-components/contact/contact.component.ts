import { Component, OnInit } from '@angular/core';
import { sendSupport } from './support';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // model = new sendSupport('');
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {
  }

  ContactFormGroup = new FormGroup({
    problemText: new FormControl('', Validators.required),
  })

  // firstFormGroup = this.fb.group({
  //   secondCtrl: ['', Validators.required],
  // });

  sendSupport() {
    const sendProblem = this.ContactFormGroup.value.problemText;

    this.authService.sendSupport(sendProblem);
  }
}