import { Component, OnInit } from '@angular/core';
import { LevelUpdateService } from '../../service/level-update.service';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})

export class LevelsComponent implements OnInit {

  levelsLevel;
  blnLevelTwo;
  blnLevelThree;
  blnLevelSix;

  constructor(private levelUpdateService: LevelUpdateService) { }

  ngOnInit() {
    this.blnLevelTwo = 0;
    this.blnLevelThree = 1;
    this.blnLevelSix = 0;
    this.levelsLevel = 'L3';
    this.levelUpdateService.setLevel(this.levelsLevel);
  }

  myCntrl($scope) {
    $scope.level = 2;
  }

  // onSubmit() {

  // }

}
