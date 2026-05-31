import { Component, OnDestroy, signal } from '@angular/core';

interface PhotoPreview {
  file: File;
  url: string;
  name: string;
}

@Component({
  selector: 'app-estimate',
  standalone: true,
  templateUrl: './estimate.html',
  styleUrl: './estimate.scss',
})
export class Estimate implements OnDestroy {
  showModal = signal(false);
  isDragging = signal(false);
  photos = signal<PhotoPreview[]>([]);

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging.set(true);
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging.set(false);
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging.set(false);
    const files = event.dataTransfer?.files;
    if (files) {
      this.addFiles(Array.from(files));
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.addFiles(Array.from(input.files));
      input.value = '';
    }
  }

  addFiles(files: File[]) {
    const imageFiles = files.filter((f) => f.type.startsWith('image/'));
    const previews = imageFiles.map((file) => ({
      file,
      url: URL.createObjectURL(file),
      name: file.name,
    }));
    this.photos.update((prev) => [...prev, ...previews]);
  }

  removePhoto(index: number) {
    this.photos.update((prev) => {
      URL.revokeObjectURL(prev[index].url);
      return prev.filter((_, i) => i !== index);
    });
  }

  handleEstimate(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    this.showModal.set(true);
    this.clearPhotos();
    form.reset();
  }

  closeModal() {
    this.showModal.set(false);
  }

  private clearPhotos() {
    this.photos().forEach((p) => URL.revokeObjectURL(p.url));
    this.photos.set([]);
  }

  ngOnDestroy() {
    this.clearPhotos();
  }
}
