import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as TutorialActions from '../../../app/actions/tutorial.actions';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addTutorial(name: string, url: string): void {
     this.store.dispatch(new TutorialActions.AddTutorial({name, url}));
  }

}
