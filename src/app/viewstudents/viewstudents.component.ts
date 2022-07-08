import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudents',
  templateUrl: './viewstudents.component.html',
  styleUrls: ['./viewstudents.component.css']
})
export class ViewstudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data=[
    {"name":"esha","age":19,"photo":"https://media.gettyimages.com/vectors/human-face-avatar-icon-profile-for-social-network-woman-vector-vector-id1227618778?s=2048x2048"},
    {"name":"devika","age":20,"photo":"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX37232442.jpg"},
    {"name":"pavi","age":21,"photo":"https://cdn1.vectorstock.com/i/1000x1000/78/80/young-woman-head-avatar-cartoon-face-character-vector-21787880.jpg"},
    {"name":"angel","age":21,"photo":"https://i.pinimg.com/originals/04/d2/eb/04d2ebc3d32c960b334bee87a9f3a8a5.jpg"},
    {"name":"thanu","age":7,"photo":"https://i.pinimg.com/474x/db/66/04/db6604be2ce15a39e9aec17a2995f103.jpg"},
    {"name":"lalu","age":9,"photo":"https://image.shutterstock.com/image-vector/young-man-face-cartoon-260nw-1224888760.jpg"}
]


}
