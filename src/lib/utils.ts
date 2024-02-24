import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function cleanUpImageUrl(url) {
  url = url.replace(/\[|\]|"/g, "");
  url = url.startsWith("http") ? url : "";

  // url = url.startsWith("[") ? JSON.parse(url) : ""

  return url;
}


export function generateRandomCode() {
  let code = '';
  for (let i = 0; i < 4; i++) {
      code += Math.floor(Math.random() * 10000).toString().padStart(4, '0');
      if (i < 3) {
          code += '.';
      }
  }
  return code;
}


export function generateRandomString() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
  }
  return randomString;
}


export function truncate(str, maxLength) {
  if (str.length <= maxLength) {
      return str;
  } else {
      return str.substring(0, maxLength - 3) + '...';
  }
}