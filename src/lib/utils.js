import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import moment from "moment";

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function bytesToMB(bytes) {
  const MB = 1048576;
  return bytes / MB;
}

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min).toString();
}

export function formateDate(date) {
  return moment(date).fromNow();
}

export async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}