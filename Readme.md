# World Digital Clock

A world-clock project with a Python/Tkinter desktop app for four regions and a separate, hostable web dashboard for searching cities and time zones worldwide.

## Overview

The desktop app shows live time updates for:

- India
- South Africa
- USA
- Australia

The web version supports a larger searchable city list, including additional Indian cities.

## Features

- Live digital clock updates in both versions
- Light and dark theme toggle in the desktop and web apps
- Spaced desktop clock cards for easier scanning
- Searchable city and time-zone selection in the web version
- Responsive web layout for phones, tablets, and desktops
- Fully self-contained front-end with no copyrighted media assets
- Easy to host on static web providers such as GitHub Pages, Netlify, or Vercel

## Files

```text
Digital-Clock-With-4-Countries/
+-- clock.py
+-- requirements.txt
+-- Readme.md
+-- Web-Version/
|   +-- index.html
|   +-- styles.css
|   +-- app.js
|   +-- README.md
```

## Web Version

### Run locally

Open the project folder and start a local static server:

```bash
cd Web-Version
py -m http.server 8003
```

Then open:

```text
http://localhost:8003
```

### Deploy online

This app can be hosted on any static hosting platform:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

Since it is a plain HTML/CSS/JS project, deployment is simple and does not require a backend.

## Python Desktop Version

Python 3.9 or later is required. On Windows, install the IANA time-zone database package used by `zoneinfo`:

```powershell
python3 -m pip install -r requirements.txt
```

If your Python installation does not include `pip`, bootstrap it once and retry:

```powershell
python3 -m ensurepip --upgrade
python3 -m pip install -r requirements.txt
```

Then run the desktop clock:

```powershell
python3 clock.py
```

## Standards Followed

- Modern UI design
- Accessibility-friendly contrast and semantic HTML
- No external copyrighted assets
- Mobile-friendly responsive layout
- Clean modular JavaScript and CSS

## License

This project is provided for learning and personal use. It does not include third-party copyrighted branding or media assets.
