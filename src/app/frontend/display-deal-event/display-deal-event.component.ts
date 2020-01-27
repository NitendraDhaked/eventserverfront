import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {DealLoss } from 'src/app/models/dealloss.model';
import { ApiService } from 'src/app/services/api.service';
import { ApiResponse } from 'src/app/models/api.response';

@Component({
  selector: 'app-display-deal-event',
  templateUrl: './display-deal-event.component.html',
  styleUrls: ['./display-deal-event.component.scss']
})
export class DisplayDealEventComponent implements OnInit {

  eventDisplayId =0;
  resp : ApiResponse;
  DealLoss: DealLoss[];
  addForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      eventId: ['', Validators.required]
    });
  }

  onSubmit() {
      this.eventDisplayId = this.addForm.value.eventId;
      this.apiService.getDealLoss(this.addForm.value.eventId)
      .subscribe( data => {
          this.DealLoss = data.result;
      });
  }

}
