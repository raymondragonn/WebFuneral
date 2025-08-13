import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MensajeService, Mensaje} from 'src/app/services';

@Component({
    selector: 'app-app-contact',
    templateUrl: './app-contact.component.html',
    styleUrls: ['./app-contact.component.scss']
})
export class AppContactComponent implements OnInit {
    formulario = this.fb.group({
        nombre: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        mensaje: ['', Validators.required]
    });
    
    isLoading = false;
    showSuccess = false;
    errorMessage = '';

    constructor(private fb: FormBuilder,private mensajeService: MensajeService) { }

    ngOnInit(): void {
    }

    onSubmit() {
        if (this.formulario.valid) {
          this.isLoading = true;
          this.errorMessage = '';
          this.showSuccess = false;
    
          const mensaje: Mensaje = {
            nombre: this.formulario.value.nombre!,
            email: this.formulario.value.email!,
            mensaje: this.formulario.value.mensaje!
          };
          console.log(mensaje);
          this.mensajeService.crearMensaje(mensaje).subscribe({
            next: (response) => {
              this.isLoading = false;
              if (response.success) {
                this.showSuccess = true;
                this.formulario.reset();
                console.log('Mensaje enviado exitosamente:', response);
                
                // Ocultar mensaje de éxito después de 5 segundos
                setTimeout(() => {
                  this.showSuccess = false;
                }, 5000);
              } else {
                this.errorMessage = response.message || 'Error al enviar el mensaje';
              }
            },
            error: (error) => {
              this.isLoading = false;
              this.errorMessage = error.message || 'Error de conexión. Inténtalo de nuevo.';
              console.error('Error al enviar mensaje:', error);
            }
          });
        } else {
          console.log('Formulario no válido');
          this.markFormGroupTouched();
        }
      }
    
      /**
       * Marca todos los campos del formulario como tocados para mostrar errores
       */
      private markFormGroupTouched() {
        Object.keys(this.formulario.controls).forEach(field => {
          const control = this.formulario.get(field);
          control?.markAsTouched({ onlySelf: true });
        });
      }
    
      /**
       * Limpia los mensajes de estado
       */
      clearMessages() {
        this.errorMessage = '';
        this.showSuccess = false;
      }

    sectionTitle: sectionTitleContent[] = [
        {
            title: 'Escribe tu recuerdo',
            paragraphText: 'Escribe tu recuerdo y lo compartiremos con los demás.'
        }
    ]
    contactImage: Image[] = [
        {
            img: 'assets/img/app-contact.png'
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