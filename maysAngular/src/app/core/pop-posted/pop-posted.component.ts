import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../guard/auth-service/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PopService} from '../pop/pop.service';

@Component({
  selector: 'app-pop-posted',
  templateUrl: './pop-posted.component.html',
  styleUrls: ['./pop-posted.component.scss']
})
export class PopPostedComponent implements OnInit {
  popPosted: FormGroup;
  connected: boolean;

  constructor(private popService: PopService, private auth: AuthService, private fb: FormBuilder) {
    this.popPosted = fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
      file: [null],
      isSpoiler: [null]
    });


  }

  ngOnInit(): void {
    if (this.auth.currentUser$ != null) {
      this.connected = true;
      console.log(this.connected);
      console.log(this.auth.currentUser$);
    }
  }

  popPost(): void {
    const user = this.auth.isAuthenticated;
    console.log(user);

    if (user) {
      this.popService.postPop(this.popPosted.value).subscribe((data) => {
        console.log(data);
        console.log(this.popPosted);
      });
    }
  }
}
