import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase/app'
import { Router } from "@angular/router";
import { WorkCard} from "../work-card";

@Component({
  selector: 'lm-portfolio-photos',
  templateUrl: './portfolio-photos.component.html',
  styleUrls: ['./portfolio-photos.component.styl']
})
export class PortfolioPhotosComponent implements OnInit {
  fileList = [];
  user: any;
  workCard: WorkCard;
  masterId: string;
  workCardId: string;
  category: string;
  tegList:  string = "Маникюр, педткюр, мангал, паутинка, пластырь"
  imgTitle: string;
  imageSRC: string;

  simpleArray: number[] = [1, 2, 3];
  constructor() { }

  ngOnInit() {
    this.user = firebase.auth().currentUser;
    this.masterId = this.user.uid;
    this.category = localStorage.getItem('uploadFilesCategoryId');
    console.log(this.category);
  }
    
  filesLoad($event: any){
    let files = $event.target.files;
    for (var i = 0, f; f = files[i]; i++) {
      let myReader:FileReader = new FileReader();
      var fileName = f.name;
      myReader.readAsDataURL(f);
      myReader.onload = (e: any) => {
        var imageSRC = e.target.result
        this.fileList.push({
          fileName: fileName,
          imageSRC: imageSRC
        });
      }  
    }
    console.log(this.fileList);
  }

  createWorkCards(){
    this.workCard = new WorkCard (
      this.masterId,
      this.category,
      this.tegList,
      this.imgTitle,
      this.imageSRC.substring(23)
    );
  }

  createWorkCardsFromList(){
    console.log("list for creation" + this.fileList)
    for (let i = 0; i < this.fileList.length; i++) {
        console.log("i:" + i)
        this.imgTitle = this.fileList[i].fileName
        this.imageSRC = this.fileList[i].imageSRC
        console.log("fileList[i]:" + this.fileList[i].fileName)


        // this.createWorkCard(this.workCard, "this.imgTitle", "this.imageSRC")
    }
  }


  createWorkCard(workCard: WorkCard, imgTitle, imageSRC){
    return function(){
      console.log(imgTitle, imageSRC.sibling(40))
      console.log(this.imgTitle, this.imageSRC.sibling(40))
      let storageRef = firebase.storage().ref();
      storageRef.child(`workCards/${workCard.imgTitle}`).putString(workCard.img, 'base64')
        .then((snapshot) =>{
          let url = snapshot.metadata.downloadURLs[0];
          let dbRef = firebase.database().ref('workCards/');
          let newWorkCard = dbRef.push();
          newWorkCard.set({
            masterId: workCard.masterId,
            categoryId: workCard.category,
            workCardId: newWorkCard.key,
            imgTitle: workCard.imgTitle,
            img: url,
            tegList: workCard.imgTitle,
          });
        });
        console.log("workcard created")
    }
  };


  // cancel(){
  //   this.router.navigate(['/blog']);
  // }
}
