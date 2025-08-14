import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MensajeService } from 'src/app/services';

@Component({
    selector: 'app-app-feedback',
    templateUrl: './app-feedback.component.html',
    styleUrls: ['./app-feedback.component.scss']
})
export class AppFeedbackComponent implements OnInit, AfterViewInit {

    constructor(private servicioMensajes: MensajeService) { }

    ngOnInit(): void {
        this.servicioMensajes.obtenerMensajes().subscribe( data => {
            console.log(data);
            this.singleFeedbackItem = data.slice(0, 4).map((item: any) => ({
                mensaje: item.mensaje,
                nombre: item.nombre
            }));
            
            // Verificar si hay mensajes
            this.hasMessages = this.singleFeedbackItem.length > 0;
            
            // Reinicializar el carrusel después de cargar los datos solo si hay mensajes
            if (this.hasMessages) {
                setTimeout(() => {
                    this.initializeCarousel();
                }, 100);
            }
        })
    }

    ngAfterViewInit(): void {
        // Inicializar el carrusel cuando la vista esté lista solo si hay mensajes
        if (this.hasMessages) {
            this.initializeCarousel();
        }
    }

    private initializeCarousel(): void {
        // Verificar que jQuery y Owl Carousel estén disponibles
        if (typeof (window as any).$ === 'undefined') {
            console.error('jQuery no está disponible');
            return;
        }

        // Destruir el carrusel existente si existe
        const carousel = (window as any).$('.feedback-slides');
        if (carousel.length === 0) {
            console.error('Elemento .feedback-slides no encontrado');
            return;
        }

        if (carousel.hasClass('owl-loaded')) {
            carousel.trigger('destroy.owl.carousel');
        }
        
        // Inicializar el nuevo carrusel
        carousel.owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        });
    }

    sectionTitle: sectionTitleContent[] = [
        {
            title: 'Muro de recuerdos',
            paragraphText: 'Mira las palabras de quienes lo amaron.'
        }
    ]
    singleFeedbackItem: Content[] = [];
    hasMessages: boolean = false;

}

class sectionTitleContent {
    title : string;
    paragraphText : string;
}
class Content {
    mensaje : string;
    nombre : string;
}