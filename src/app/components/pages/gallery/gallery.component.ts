import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  
  constructor(private sanitizer: DomSanitizer) {}
  
  selectedImage: string | null = null;
  selectedVideo: string | null = null;
  currentImageIndex: number = 0;
  
  galleryImages = [
    {
      id: 1,
      src: 'assets/img/person/photo-gallery4.svg',
      alt: 'Capilla Principal',
      category: 'imagenes',
      title: 'Capilla Principal',
      type: 'image'
    },
    {
      id: 2,
      src: 'assets/img/person/photo-gallery1.svg',
      alt: 'Salón de Velación',
      category: 'imagenes',
      title: 'Salón de Velación',
      type: 'image'
    },
    {
      id: 3,
      src: 'assets/img/person/photo-gallery2.svg',
      alt: 'Jardín de Descanso',
      category: 'imagenes',
      title: 'Jardín de Descanso',
      type: 'image'
    },
    {
      id: 4,
      src: 'assets/img/person/photo-gallery3.svg',
      alt: 'Área de Recepción',
      category: 'imagenes',
      title: 'Área de Recepción',
      type: 'image'
    },
    {
      id: 5,
      src: 'assets/img/person/photo-gallery5.svg',
      alt: 'Área de Recepción',
      category: 'imagenes',
      title: 'Área de Recepción',
      type: 'image'
    },
    {
      id: 6,
      src: 'assets/img/person/photo-gallery6.svg',
      alt: 'Área de Recepción',
      category: 'imagenes',
      title: 'Área de Recepción',
      type: 'image'
    },
    {
      id: 7,
      src: 'assets/img/video-bg.jpg',
      alt: 'Video Ceremonial',
      category: 'videos',
      title: 'Video Ceremonial',
      type: 'video',
      videoUrl: 'assets/videos/Video1.mp4',
      isLocal: true
    },
    {
      id: 8,
      src: 'assets/img/video-bg2.jpg',
      alt: 'Video Institucional',
      category: 'videos',
      title: 'Video Institucional',
      type: 'video',
      videoUrl: 'assets/videos/Video2.mp4',
      isLocal: true
    } 
  ];

  get filteredImages() {
    return this.galleryImages;
  }

  get imageItems() {
    return this.galleryImages.filter(item => item.type === 'image');
  }

  openModal(item: any) {
    if (item.type === 'video') {
      this.selectedVideo = item.videoUrl;
      this.selectedImage = null;
    } else {
      this.selectedImage = item.src;
      this.selectedVideo = null;
      this.currentImageIndex = this.imageItems.findIndex(img => img.id === item.id);
    }
  }

  closeModal() {
    this.selectedImage = null;
    this.selectedVideo = null;
  }

  previousImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
      this.selectedImage = this.imageItems[this.currentImageIndex].src;
    }
  }

  nextImage() {
    if (this.currentImageIndex < this.imageItems.length - 1) {
      this.currentImageIndex++;
      this.selectedImage = this.imageItems[this.currentImageIndex].src;
    }
  }

  getCurrentImageTitle(): string {
    return this.imageItems[this.currentImageIndex]?.title || '';
  }

  getCurrentVideoItem() {
    return this.galleryImages.find(item => item.videoUrl === this.selectedVideo);
  }

  getSafeVideoUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}