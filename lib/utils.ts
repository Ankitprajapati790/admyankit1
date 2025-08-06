import { type ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and merges Tailwind classes safely.
 * @param inputs List of class values (string | object | array)
 * @returns Merged string of class names
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}
