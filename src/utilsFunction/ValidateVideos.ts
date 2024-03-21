export function validateVideos(videos: FileList | File | File[] | null): boolean {
  if (!videos) {
    // Handle the case where videos is null or undefined
    return false;
  }

  const allowedTypes: string[] = ['video/mp4', 'video/avi', 'video/mov'];
  const maxFileSizeMB: number = 100; // Maximum file size allowed in megabytes

  // Convert FileList to an array
  const videoArray = 'length' in videos ? Array.from(videos) : [videos];

  for (let i = 0; i < videoArray.length; i++) {
    const video = videoArray[i];

    if (!video || !allowedTypes.includes(video.type) || video.size > maxFileSizeMB * 1024 * 1024) {
      return false;
    }
  }

  return true;
}
