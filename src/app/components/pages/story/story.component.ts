import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  category: 'nacimiento' | 'familia' | 'trabajo' | 'logros' | 'fallecimiento';
  isMilestone: boolean;
}

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss'
})
export class StoryComponent {
  
  timelineEvents: TimelineEvent[] = [
    {
      id: 1,
      year: '1950',
      title: 'Nacimiento de Jaime Hernández Hernández',
      description: 'Jaime nació en una familia humilde y trabajadora. Desde pequeño mostró una gran curiosidad por el mundo y un corazón generoso que lo caracterizaría toda su vida.',
      image: 'assets/img/fotosRecuerdos/Recuerdo1.jpeg',
      imageAlt: 'Jaime en su juventud',
      category: 'nacimiento',
      isMilestone: true
    },
    {
      id: 2,
      year: '1965',
      title: 'Primeros años de estudio',
      description: 'Durante su adolescencia, Jaime demostró un gran interés por el aprendizaje y la ayuda a otros. Sus maestros lo recordaban como un estudiante dedicado y compasivo.',
      image: 'assets/img/fotosRecuerdos/Recuerdo2.jpeg',
      imageAlt: 'Jaime estudiando',
      category: 'logros',
      isMilestone: false
    },
    {
      id: 3,
      year: '1975',
      title: 'Formación de su familia',
      description: 'Jaime conoció al amor de su vida y juntos formaron una familia llena de amor y valores. Este fue uno de los momentos más felices de su vida.',
      image: 'assets/img/fotosRecuerdos/Recuerdo3.jpeg',
      imageAlt: 'Jaime con su familia',
      category: 'familia',
      isMilestone: true
    },
    {
      id: 4,
      year: '1980',
      title: 'Dedicación al trabajo',
      description: 'Con dedicación y esfuerzo, Jaime construyó una carrera profesional que le permitió brindar seguridad y bienestar a su familia.',
      image: 'assets/img/person/photo-gallery1.svg',
      imageAlt: 'Jaime en su trabajo',
      category: 'trabajo',
      isMilestone: false
    },
    {
      id: 5,
      year: '1995',
      title: 'Mentor y guía',
      description: 'Jaime se convirtió en un mentor para muchos jóvenes, compartiendo su sabiduría y experiencia con generosidad y paciencia.',
      image: 'assets/img/person/photo-gallery2.svg',
      imageAlt: 'Jaime como mentor',
      category: 'logros',
      isMilestone: true
    },
    {
      id: 6,
      year: '2010',
      title: 'Abuelo amoroso',
      description: 'El nacimiento de sus nietos llenó su vida de nueva alegría. Jaime se convirtió en el mejor abuelo, lleno de historias y amor incondicional.',
      image: 'assets/img/person/photo-gallery3.svg',
      imageAlt: 'Jaime con sus nietos',
      category: 'familia',
      isMilestone: false
    },
    {
      id: 7,
      year: '2020',
      title: 'Legado de amor',
      description: 'En sus últimos años, Jaime continuó siendo un pilar de fortaleza para su familia, enseñando con su ejemplo los valores del amor, la perseverancia y la fe.',
      image: 'assets/img/person/photo-gallery4.svg',
      imageAlt: 'Jaime en sus últimos años',
      category: 'logros',
      isMilestone: true
    },
    {
      id: 8,
      year: '2024',
      title: 'Descanso eterno',
      description: 'Jaime partió de este mundo dejando un legado de amor, sabiduría y bondad que permanecerá vivo en el corazón de todos los que lo conocieron.',
      image: 'assets/img/person/photo-gallery5.svg',
      imageAlt: 'Memoria de Jaime',
      category: 'fallecimiento',
      isMilestone: true
    }
  ];

  selectedEvent: TimelineEvent | null = null;

  openModal(event: TimelineEvent) {
    this.selectedEvent = event;
  }

  closeModal() {
    this.selectedEvent = null;
  }

  getCategoryIcon(category: string): string {
    switch (category) {
      case 'nacimiento': return 'la-star';
      case 'familia': return 'la-heart';
      case 'trabajo': return 'la-briefcase';
      case 'logros': return 'la-trophy';
      case 'fallecimiento': return 'la-cross';
      default: return 'la-calendar';
    }
  }

  getCategoryColor(category: string): string {
    switch (category) {
      case 'nacimiento': return '#4CAF50';
      case 'familia': return '#E91E63';
      case 'trabajo': return '#2196F3';
      case 'logros': return '#FF9800';
      case 'fallecimiento': return '#9C27B0';
      default: return '#607D8B';
    }
  }
}
