import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})

export class CarouselComponent implements OnInit{
  Slides:Slide[]=[
    {imageUrl:'https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww',altText:'image 12'},
    {imageUrl:'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww',altText:'image 12'},
    {imageUrl:'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww',altText:'image 12'},
    {imageUrl:'https://images.unsplash.com/photo-1641154748135-8032a61a3f80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D',altText:'image 12'},
  ];
  currentSlideIndex =0;
  ngOnInit() {
    this.startAutoSlide();
  }
  startAutoSlide() {
    setInterval(()=>{
      this.nextSlide();
    }, 4000)
  }
  
  prevSlide(){
    console.log(this.currentSlideIndex);
    this.currentSlideIndex = (this.currentSlideIndex - 1 +this.Slides.length) % this.Slides.length
  }
  
  nextSlide(){
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.Slides.length;
  }
}



interface Slide {
  imageUrl: string;
  altText: string;
}
