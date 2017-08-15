import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lm-portfolio-photos',
  templateUrl: './portfolio-photos.component.html',
  styleUrls: ['./portfolio-photos.component.styl']
})
export class PortfolioPhotosComponent implements OnInit {
  fileList = []
  constructor() { }

  ngOnInit() {
    
  }
    
  filesLoad($event: any){
    let files = $event.target.files;
    for (var i = 0, f; f = files[i]; i++) {
      let myReader:FileReader = new FileReader();
      var fileName = f.name;
      myReader.onload = (e: any) => {
        var imageSRC = e.target.result
        this.fileList.push({
          fileName: fileName,
          imageSRC: imageSRC
        });
      }  
      myReader.readAsDataURL(f);
    }
    console.log(this.fileList)
  }

  // createPost(){
  //   this.post = new Blog (
  //     this.postTitle,
  //     this.content,
  //     this.imgTitle,
  //     this.imageSRC.substring(23)
  //   );
  // }

  // cancel(){
  //   this.router.navigate(['/blog']);
  // }
}
