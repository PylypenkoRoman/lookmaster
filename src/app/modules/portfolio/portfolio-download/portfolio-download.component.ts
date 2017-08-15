import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lm-portfolio-download',
  templateUrl: './portfolio-download.component.html',
  styleUrls: ['./portfolio-download.component.styl']
})
export class PortfolioDownloadComponent implements OnInit {
  imgTitle: string;
  imageSRC: string;
  constructor() { }

  ngOnInit() {
  }

 
//Initialize Firebase


// //function to save file
// previewFile(){
// var storage = firebase.storage();


// var file = this.files[0];
//   console.log(file);

// var storageRef = firebase.storage().ref();

// //dynamically set reference to the file name
// var thisRef = storageRef.child(file.name);

// //put request upload file to firebase storage
// thisRef.put(file).then(function(snapshot) {
//   console.log('Uploaded a blob or file!');
// });

// //get request to get URL for uploaded file
// thisRef.getDownloadURL().then(function(url) {
// console.log(url);
// })

// }
  // firebase.storage().ref().constructor.prototype.putFiles = function(files) {
  //   var ref = this;
  //   const filesArray = [...files];
  //   return Promise.all(filesArray .map(function(file) {
  //   return ref.child(file.name).put(file);
  //   }));
  // }

  // // use it!
  // firebase.storage().ref().putFiles(files).then(function(metadatas) {
  //   // Get an array of file metadata
  // }).catch(function(error) {
  //   // If any task fails, handle this
  // });

}
