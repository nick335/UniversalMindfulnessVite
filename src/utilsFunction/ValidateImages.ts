
export function validateImages(images: FileList | null): boolean{
  if (!images) {
    // Handle the case where images is null or undefined
    return false;
  }
  const allowedTypes: string[] = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
  const maxFileSizeMB: number = 1.5;

  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    if (!allowedTypes.includes(image.type) || image.size > maxFileSizeMB * 1024 * 1024) {
        return false;
    }
  }
  return true;
}