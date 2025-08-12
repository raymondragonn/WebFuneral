import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-app-screenshots',
    templateUrl: './app-screenshots.component.html',
    styleUrls: ['./app-screenshots.component.scss']
})
export class AppScreenshotsComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    goToGallery(): void {
        this.router.navigate(['/galeria']);
    }

    sectionTitle: sectionTitleContent[] = [
        {
            title: 'Momentos especiales',
            paragraphText: 'Recuerdos y momentos especiales que vivirán siempre en nuestra memoria.'
        }
    ]
    screenshotImage: Image[] = [
        {
            img: 'assets/img/person/photo-gallery4.svg'
        },
        {
            img: 'assets/img/person/photo-gallery1.svg'
        },
        {
            img: 'assets/img/person/photo-gallery2.svg'
        },
        {
            img: 'assets/img/person/photo-gallery3.svg'
        },
        {
            img: 'assets/img/person/photo-gallery5.svg'
        },
        {
            img: 'assets/img/person/photo-gallery6.svg'
        }
    ]

}
class sectionTitleContent {
    title : string;
    paragraphText : string;
}
class Image {
    img : string;
}