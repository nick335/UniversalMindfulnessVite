export function validateImages(images: FileList | File | File[] | null): boolean {
  if (!images) {
    // Handle the case where images is null or undefined
    return false;
  }

  const allowedTypes: string[] = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/svg'];
  const maxFileSizeMB: number = 5;

  // Convert FileList to an array
  const imageArray = 'length' in images ? Array.from(images) : [images];

  for (let i = 0; i < imageArray.length; i++) {
    const image = imageArray[i];

    if (!image || !allowedTypes.includes(image.type) || image.size > maxFileSizeMB * 1024 * 1024) {
      return false;
    }
  }

  return true;
}
