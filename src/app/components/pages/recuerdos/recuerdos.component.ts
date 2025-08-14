import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MensajeService, Mensaje } from 'src/app/services';

@Component({
  selector: 'app-recuerdos',
  templateUrl: './recuerdos.component.html',
  styleUrl: './recuerdos.component.scss'
})
export class RecuerdosComponent implements OnInit {
  
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
    private mensajeService: MensajeService,
    private router: Router
  ) { }

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
      
      this.mensajeService.crearMensaje(mensaje).subscribe({
        next: (response) => {
          this.isLoading = false;
          if (response.success) {
            this.showSuccess = true;
            this.formulario.reset();
            console.log('Recuerdo enviado exitosamente:', response);
            
            // Redirigir después de mostrar el mensaje de éxito por 2 segundos
            setTimeout(() => {
              this.showSuccess = false;
              this.router.navigate(['/recuerdos']);
            }, 2000);
          } else {
            this.errorMessage = response.message || 'Error al enviar el recuerdo';
          }
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.message || 'Error de conexión. Inténtalo de nuevo.';
          console.error('Error al enviar recuerdo:', error);
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
