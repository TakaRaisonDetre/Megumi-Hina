import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import * as hopscotch from 'hopscotch';

@Component({
  selector: 'app-app-tour',
  templateUrl: './app-tour.component.html',
  styleUrls: ['./app-tour.component.css']
})
export class AppTourComponent implements OnInit, OnDestroy {

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {}
  ngOnDestroy() {
    hopscotch.endTour(true);
  }
  /*
  ***** Tour Steps ****
  * You can supply tourSteps directly in hopscotch.startTour instead of 
  * returning value by invoking tourSteps method,
  * but DOM query methods(querySelector, getElementsByTagName etc) will not work
  */
  tourSteps(): any {
    let self = this;
    return {
      id: 'demo-tour',
      showPrevButton: true,
      onEnd: function() {
        self.snackBar.open('User tour ended!', 'close', { duration: 3000 });
      },
      onClose: function() {
        self.snackBar.open('You just closed User Tour!', 'close', { duration: 3000 });
      },
      steps: [
        {
          title: 'Step one',
          content: 'This is step description.',
          target: 'areaOne', // Element ID
          placement: 'left',
          xOffset: 10
        },
        {
          title: 'Define your steps',
          content: 'This is step description.',
          target: document.querySelector('#areaOne code'),
          placement: 'left',
          xOffset: 0,
          yOffset: -10
        },
        {
          title: 'Invoke startTour function',
          content: 'This is step description.',
          target: document.querySelector('#areaTwo code'), // Element ID
          placement: 'left',
          xOffset: 15,
          yOffset: -10
        }
      ]
    }
  }
  startTour() {
    // Destroy running tour
    hopscotch.endTour(true);
    // Initialize new tour 
    hopscotch.startTour(this.tourSteps());
  }
}
