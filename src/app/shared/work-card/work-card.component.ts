import { Component, OnInit, Input } from '@angular/core';
import { WorkCard } from "./work-card";
import * as firebase from 'firebase';

@Component({
  selector: 'lm-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.styl']
})
export class WorkCardComponent implements OnInit {
  @Input() view: string;
  workCard: WorkCard;
  workCardId: string;
  constructor() { }

  ngOnInit() {
    this.workCardId = "3000";
    // this.getWorkCard(this.workCardId);
  }
  
  getWorkCard(workCardId: string){
    let dbRef = firebase.database().ref('workCards');
    dbRef.orderByChild('id')
      .equalTo(workCardId)
      .once('value')
      .then((snapshot)=>{
        let tmp = snapshot.val();
        let transform = Object.keys(tmp).map(key => tmp[key]);
        
        let userId = transform[0].userId
        let userName = transform[0].userName
        let userPortrait = transform[0].userPortrait

        let id = transform[0].id
        let img = transform[0].img
        let category = transform[0].category
        let tags = transform[0].tags

        this.workCard = new WorkCard(userId, userName, userPortrait, id, img, category, tags); 
      });
  };
}
