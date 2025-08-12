import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-app-feedback',
    templateUrl: './app-feedback.component.html',
    styleUrls: ['./app-feedback.component.scss']
})
export class AppFeedbackComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            title: 'Muro de recuerdos',
            paragraphText: 'Mira las palabras de quienes lo amaron.'
        }
    ]
    singleFeedbackItem: Content[] = [
        {
            feedbackText: 'Recuerdo cuando Jaime me enseñó a pescar en el río. Era paciente y siempre tenía una sonrisa en su rostro. Esos momentos de tranquilidad junto al agua los atesoro en mi corazón para siempre.',
            userName: 'María Elena'
        },
        {
            feedbackText: 'Jaime era el mejor cocinero que conocí. Sus tamales eran legendarios en toda la familia. Cada Navidad esperábamos con ansias sus deliciosos platillos y las historias que contaba mientras cocinaba.',
            userName: 'Carlos Mendoza'
        },
        {
            feedbackText: 'Mi abuelo Jaime me llevaba al parque todos los domingos. Me enseñó a jugar ajedrez y siempre me decía que la vida era como el juego: hay que pensar bien cada movimiento. Lo extraño mucho.',
            userName: 'Ana Sofía'
        },
        {
            feedbackText: 'Jaime era mi vecino por más de 20 años. Siempre estaba dispuesto a ayudar, ya fuera arreglando una llave que goteaba o simplemente compartiendo una taza de café. Su bondad no tenía límites.',
            userName: 'Roberto Jiménez'
        },
        {
            feedbackText: 'Mi papá Jaime era mi héroe. Trabajaba duro para darnos todo lo que necesitábamos. Recuerdo cuando me enseñó a andar en bicicleta, corriendo detrás de mí hasta que pude mantener el equilibrio.',
            userName: 'Luis Fernando'
        },
        {
            feedbackText: 'Jaime era el alma de nuestras reuniones familiares. Su risa contagiosa llenaba la casa de alegría. Siempre tenía un chiste nuevo para contarnos y nos hacía reír hasta llorar.',
            userName: 'Carmen Rosa'
        }
    ]

}
class sectionTitleContent {
    title : string;
    paragraphText : string;
}
class Content {
    feedbackText : string;
    userName : string;
}