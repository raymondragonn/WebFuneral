import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-app-download',
    templateUrl: './app-download.component.html',
    styleUrls: ['./app-download.component.scss']
})
export class AppDownloadComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    
    appDownloadImage: Image[] = [
        {
            img: 'assets/img/person/photo-about.svg'
        }
    ]
    appDownloadContent: Content[] = [
        {
            title: 'Honrando la Memoria de Jaime Hernández Hernández',
            paragraph1: 'Jaime Hernández Hernández fue un hombre que tocó la vida de muchas personas con su bondad, sabiduría y dedicación. Su legado permanecerá en nuestros corazones para siempre.',
            paragraph2: 'Durante toda su vida, Jaime demostró un compromiso inquebrantable con su familia, amigos y comunidad. Su sonrisa cálida y palabras de aliento iluminaron los días de todos los que tuvieron el privilegio de conocerlo.',
            paragraph3: 'Su generosidad y espíritu de servicio marcaron la diferencia en la vida de quienes lo rodearon.',
            button1: 'assets/img/store/1.png',
            button2: 'assets/img/store/2.png'
        }
    ]

}
class Image {
    img : string;
}
class Content {
    title : string;
    paragraph1 : string;
    paragraph2 : string;
    paragraph3 : string;
    button1 : string;
    button2 : string;
}