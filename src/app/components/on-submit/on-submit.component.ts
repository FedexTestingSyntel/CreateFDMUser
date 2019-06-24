import { Component, OnInit } from '@angular/core';
import { LevelUpdateService } from '../../service/level-update.service';

@Component({
  selector: 'app-on-submit',
  templateUrl: './on-submit.component.html',
  styleUrls: ['./on-submit.component.css']
})

export class OnSubmitComponent implements OnInit {

  constructor(private levelUpdateService: LevelUpdateService) { }

  ngOnInit() {
  }

}
