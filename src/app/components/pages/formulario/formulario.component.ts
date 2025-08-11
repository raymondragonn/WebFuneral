import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MensajeService, Mensaje } from '../../../services/mensaje.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  formulario = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mensaje: ['', Validators.required]
  });

  isLoading = false;
  showSuccess = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private mensajeService: MensajeService
  ) {
    // this.mensajeService.obtenerMensajes().subscribe( mensajes => {
    //   console.log(mensajes);
    // })

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
}