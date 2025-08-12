import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-banner',
  templateUrl: './app-banner.component.html',
  styleUrls: ['./app-banner.component.scss']
})
export class AppBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    mainBannerContent: Content[] = [
        {
            title: 'Marzo 1992 - Junio 2025',
            paragraph: '"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna." - Juan 3:16',
            button1: 'assets/img/store/1.png',
            button2: 'assets/img/store/2.png'
        }
    ]
    bannerImage: Image[] = [
        {
            img: 'assets/img/app-banner.png'
        }
    ]

}
class Content {
    title : string;
    paragraph : string;
    button1 : string;
    button2 : string;
}
class Image {
    img : string;
}