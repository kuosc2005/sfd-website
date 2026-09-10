import data2025 from './2025.json';
import data2026 from './2026.json';
import galleryData from './gallery.json';

export interface SFDEvent {
  name: string;
  date: string;
  time: string;
  venue: string;
}

export interface Speaker {
  name: string;
  affiliation: string;
  photo: string;
}

export interface ScheduleItem {
  time: string;
  topic: string;
  speaker: string;
}

export interface GalleryYear {
  year: number;
  path: string;
  images: string[];
}

export interface SFDConfig {
  year: number;
  title: string;
  shortTitle: string;
  event: {
    date: string;
    dateISO: string;
    venue: string;
    venueFull: string;
  };
  registerUrl: string;
  events: SFDEvent[];
  speakers: Speaker[];
  schedule: ScheduleItem[];
}

export interface GalleryConfig {
  years: GalleryYear[];
}

const yearDataMap: Record<number, SFDConfig> = {
  2025: data2025 as SFDConfig,
  2026: data2026 as SFDConfig,
};

// let currentYear = new Date().getFullYear();
let currentYear = 2026 ;
export const sfd: SFDConfig = yearDataMap[currentYear] || data2026 as SFDConfig;
export const gallery: GalleryConfig = galleryData as GalleryConfig;
