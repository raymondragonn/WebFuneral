import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface Mensaje {
  nombre: string;
  email: string;
  mensaje: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  private apiUrl = 'http://localhost/backMemorial/api/mensajes';
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  /**
   * Crear un nuevo mensaje
   * @param mensaje - Datos del mensaje a crear
   * @returns Observable con la respuesta de la API
   */
  crearMensaje(mensaje: Mensaje): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/crear.php`, mensaje, this.httpOptions)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  /**
   * Obtener todos los mensajes
   * @returns Observable con la lista de mensajes
   */
  obtenerMensajes(): Observable<Mensaje[]> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/leer.php`, this.httpOptions)
      .pipe(
        map(response => {
          if (response.success) {
            return response.data || [];
          }
          throw new Error(response.message);
        }),
        catchError(this.handleError)
      );
  }

  /**
   * Manejo de errores HTTP
   * @param error - Error recibido
   * @returns Observable con el error procesado
   */
  private handleError(error: any): Observable<never> {
    let errorMessage = 'Error desconocido';
    
    if (error.error instanceof ErrorEvent) {
      // Error del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del servidor
      if (error.error && error.error.message) {
        errorMessage = error.error.message;
      } else if (error.message) {
        errorMessage = error.message;
      } else {
        errorMessage = `Código de error: ${error.status}, mensaje: ${error.message}`;
      }
    }
    
    console.error('Error en MensajeService:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
