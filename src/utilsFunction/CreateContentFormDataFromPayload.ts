import { postContentPayloadType } from "../types/api/content";

const createContentFormDataFromPayload = (payload: postContentPayloadType) => {
  const formData = new FormData();

  for (const key of Object.keys(payload) as (keyof postContentPayloadType)[]) {
    if (Object.prototype.hasOwnProperty.call(payload, key)) {
      if (key.startsWith('image') && payload[key as keyof postContentPayloadType] instanceof Blob) {
        formData.append(key, payload[key] as Blob);
      } else {
        formData.append(`${key}`, payload[key] as string);
      }
    }
  }

  return formData;
}

export default createContentFormDataFromPayload;
