# SFD Website - Project Context

## Overview

Annual website for Software Freedom Day (SFD) organized by KUOSC (Kathmandu University Open Source Community). Built with Astro.

## Adding a New Year

### 1. Create year data file

Create `src/data/YYYY.json` (e.g., `2027.json`):

```json
{
  "year": 2027,
  "title": "Software Freedom Day 2027",
  "shortTitle": "SFD 2027",
  
  "event": {
    "date": "September 18, 2027",
    "dateISO": "2027-09-18",
    "venue": "Kathmandu University",
    "venueFull": "Kathmandu University, KU CIKU Hall"
  },

  "registerUrl": "https://luma.com/your-event-link",

  "events": [
    {
      "name": "SFD Eve",
      "date": "September 17, 2027",
      "time": "5:00 PM onwards",
      "venue": "KU Fountain"
    },
    {
      "name": "SFD Main Event",
      "date": "September 18, 2027",
      "time": "11:00 AM - 4:00 PM",
      "venue": "KU CIKU Hall"
    }
  ],

  "speakers": [
    {
      "name": "Speaker Name",
      "affiliation": "Organization/Role",
      "photo": "/speaker-name.webp"
    }
  ],

  "schedule": [
    {
      "time": "11:10 - 11:15",
      "topic": "Topic Title",
      "speaker": "Speaker Name"
    }
  ]
}
```

### 2. Register the year in index.ts

Add import and mapping in `src/data/index.ts`:

```typescript
import data2027 from './2027.json';

const yearDataMap: Record<number, SFDConfig> = {
  2025: data2025 as SFDConfig,
  2026: data2026 as SFDConfig,
  2027: data2027 as SFDConfig,  // Add here
};
```

### 3. Add speaker photos

Place speaker photos in `public/` directory. Use `.webp` format, named like `firstname.webp`.

## Gallery

Edit `src/data/gallery.json` to add past years:

```json
{
  "years": [
    {
      "year": 2023,
      "path": "/2023",
      "images": ["photo1.webp", "photo2.webp"]
    },
    {
      "year": 2027,
      "path": "/2027",
      "images": []
    }
  ]
}
```

Create matching directory in `public/YYYY/` and add images there.

## Project Structure

```
src/
├── data/
│   ├── 2025.json        # Year data (archive)
│   ├── 2026.json        # Year data (current)
│   ├── gallery.json     # Gallery references
│   └── index.ts         # Types + auto year detection
├── pages/
│   ├── index.astro      # Main page
│   └── gallery.astro    # Gallery page
├── components/
│   └── nav.astro        # Navigation (supports solid prop)
└── styles/
    ├── _hero.scss       # Header styles (home, gallery)
    └── _nav.scss        # Nav styles (includes .solid variant)
```

## Data Fields Reference

| Field | Description |
|-------|-------------|
| `year` | Four-digit year |
| `title` | Full title (e.g., "Software Freedom Day 2026") |
| `shortTitle` | Abbreviated (e.g., "SFD 2026") |
| `event.date` | Human-readable date |
| `event.dateISO` | ISO format for countdown timer |
| `event.venue` | Short venue name |
| `event.venueFull` | Full venue address |
| `registerUrl` | Registration link |
| `events` | Array of sub-events (eve, main, etc.) |
| `speakers` | Array with name, affiliation, photo path |
| `schedule` | Array with time, topic, speaker |

## Notes

- Current year is auto-detected via `new Date().getFullYear()`
- Countdown uses `dateISO` field
- Speaker photos should be `.webp` format in `public/`
- Gallery images go in `public/YYYY/` directories
