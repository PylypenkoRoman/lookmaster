import { Component, OnInit, Input } from '@angular/core';
import { MasterCard } from "./master-card";
import * as firebase from 'firebase';

@Component({
  selector: 'lm-master-card',
  templateUrl: './master-card.component.html',
  styleUrls: ['./master-card.component.styl']
})
export class MasterCardComponent implements OnInit {
  @Input() view: string;
  masterCard: MasterCard;
  masterCardId: string;
  constructor() { }

  ngOnInit() {
    this.masterCardId = "3000";
    // this.getMasterCard(this.masterCardId);
  }
  
  getMasterCard(workCardId: string){
    let dbRef = firebase.database().ref('workCards');
    dbRef.orderByChild('id')
      .equalTo(workCardId)
      .once('value')
      .then((snapshot)=>{
        let tmp = snapshot.val();
        let transform = Object.keys(tmp).map(key => tmp[key]);

        let masterId = transform[0].masterId
        let masterName = transform[0].userName
        let masterPortrait = transform[0].userPortrait
        let workCardsList = transform[0].workCardsList
        let masterCardId = transform[0].masterCarsId

        this.masterCard = new MasterCard(masterName, masterPortrait, masterId, workCardsList, masterCardId); 
      });
  };
};    