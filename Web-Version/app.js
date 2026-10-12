const defaultTimezones = [
  { label: 'Bengaluru', tz: 'Asia/Kolkata' },
  { label: 'Chennai', tz: 'Asia/Kolkata' },
  { label: 'Hyderabad', tz: 'Asia/Kolkata' },
  { label: 'Kolkata', tz: 'Asia/Kolkata' },
  { label: 'Mumbai', tz: 'Asia/Kolkata' },
  { label: 'London', tz: 'Europe/London' },
  { label: 'Paris', tz: 'Europe/Paris' },
  { label: 'Beijing', tz: 'Asia/Shanghai' },
  { label: 'Tokyo', tz: 'Asia/Tokyo' },
  { label: 'Los Angeles', tz: 'America/Los_Angeles' },
];

const availableTimezones = [
  { label: 'Ahmedabad', tz: 'Asia/Kolkata' },
  { label: 'Amsterdam', tz: 'Europe/Amsterdam' },
  { label: 'Athens', tz: 'Europe/Athens' },
  { label: 'Baghdad', tz: 'Asia/Baghdad' },
  { label: 'Bangkok', tz: 'Asia/Bangkok' },
  { label: 'Barcelona', tz: 'Europe/Madrid' },
  { label: 'Beijing', tz: 'Asia/Shanghai' },
  { label: 'Bengaluru', tz: 'Asia/Kolkata' },
  { label: 'Berlin', tz: 'Europe/Berlin' },
  { label: 'Bhubaneswar', tz: 'Asia/Kolkata' },
  { label: 'Bogotá', tz: 'America/Bogota' },
  { label: 'Boston', tz: 'America/New_York' },
  { label: 'Brussels', tz: 'Europe/Brussels' },
  { label: 'Buenos Aires', tz: 'America/Argentina/Buenos_Aires' },
  { label: 'Cairo', tz: 'Africa/Cairo' },
  { label: 'Chicago', tz: 'America/Chicago' },
  { label: 'Chennai', tz: 'Asia/Kolkata' },
  { label: 'Delhi', tz: 'Asia/Kolkata' },
  { label: 'Dhaka', tz: 'Asia/Dhaka' },
  { label: 'Dubai', tz: 'Asia/Dubai' },
  { label: 'Dublin', tz: 'Europe/Dublin' },
  { label: 'Guangzhou', tz: 'Asia/Guangzhou' },
  { label: 'Guwahati', tz: 'Asia/Kolkata' },
  { label: 'Helsinki', tz: 'Europe/Helsinki' },
  { label: 'Hong Kong', tz: 'Asia/Hong_Kong' },
  { label: 'Honolulu', tz: 'Pacific/Honolulu' },
  { label: 'Hyderabad', tz: 'Asia/Kolkata' },
  { label: 'Istanbul', tz: 'Europe/Istanbul' },
  { label: 'Jakarta', tz: 'Asia/Jakarta' },
  { label: 'Jaipur', tz: 'Asia/Kolkata' },
  { label: 'Karachi', tz: 'Asia/Karachi' },
  { label: 'Kinsasha', tz: 'Africa/Kinshasa' },
  { label: 'Kuala Lumpur', tz: 'Asia/Kuala_Lumpur' },
  { label: 'Kochi', tz: 'Asia/Kolkata' },
  { label: 'Kolkata', tz: 'Asia/Kolkata' },
  { label: 'Lagos', tz: 'Africa/Lagos' },
  { label: 'Las Vegas', tz: 'America/Los_Angeles' },
  { label: 'Lima', tz: 'America/Lima' },
  { label: 'London', tz: 'Europe/London' },
  { label: 'Los Angeles', tz: 'America/Los_Angeles' },
  { label: 'Lucknow', tz: 'Asia/Kolkata' },
  { label: 'Manila', tz: 'Asia/Manila' },
  { label: 'Mexico City', tz: 'America/Mexico_City' },
  { label: 'Milan', tz: 'Europe/Rome' },
  { label: 'Moscow', tz: 'Europe/Moscow' },
  { label: 'Mumbai', tz: 'Asia/Kolkata' },
  { label: 'New York', tz: 'America/New_York' },
  { label: 'Osaka', tz: 'Asia/Tokyo' },
  { label: 'Paris', tz: 'Europe/Paris' },
  { label: 'Prague', tz: 'Europe/Prague' },
  { label: 'Pune', tz: 'Asia/Kolkata' },
  { label: 'Rio de Janeiro', tz: 'America/Sao_Paulo' },
  { label: 'Rome', tz: 'Europe/Rome' },
  { label: 'Saint Petersburg', tz: 'Europe/Moscow' },
  { label: 'San Francisco', tz: 'America/Los_Angeles' },
  { label: 'Santiago', tz: 'America/Santiago' },
  { label: 'Seoul', tz: 'Asia/Seoul' },
  { label: 'Shanghai', tz: 'Asia/Shanghai' },
  { label: 'Shenzhen', tz: 'Asia/Shanghai' },
  { label: 'Stockholm', tz: 'Europe/Stockholm' },
  { label: 'Sydney', tz: 'Australia/Sydney' },
  { label: 'São Paulo', tz: 'America/Sao_Paulo' },
  { label: 'Taipei', tz: 'Asia/Taipei' },
  { label: 'Tehran', tz: 'Asia/Tehran' },
  { label: 'Thiruvananthapuram', tz: 'Asia/Kolkata' },
  { label: 'Tokyo', tz: 'Asia/Tokyo' },
  { label: 'Toronto', tz: 'America/Toronto' },
  { label: 'Visakhapatnam', tz: 'Asia/Kolkata' },
  { label: 'Vienna', tz: 'Europe/Vienna' },
  { label: 'Yangon', tz: 'Asia/Yangon' },
];

const state = {
  selected: [...defaultTimezones],
  activeZone: defaultTimezones[0].tz,
  activeLabel: defaultTimezones[0].label,
};

const favoriteCities = document.getElementById('favoriteCities');
const cityGrid = document.getElementById('cityGrid');
const searchForm = document.getElementById('timezoneSearchForm');
const searchInput = document.getElementById('timezoneSearch');
const datalist = document.getElementById('timezoneOptions');
const themeToggle = document.getElementById('themeToggle');
const brandName = document.getElementById('brandName');
const mainTime = document.getElementById('mainTime');
const mainDate = document.getElementById('mainDate');
const mainLocation = document.getElementById('mainLocation');
const mainOffset = document.getElementById('mainOffset');
const widgetWeekday = document.getElementById('widgetWeekday');
const widgetDate = document.getElementById('widgetDate');
const widgetTime = document.getElementById('widgetTime');
const widgetMinuteRing = document.getElementById('widgetMinuteRing');
const widgetSecondRing = document.getElementById('widgetSecondRing');
const widgetSecondDot = document.getElementById('widgetSecondDot');
const langButtons = document.querySelectorAll('.lang-btn');
const zoneButtons = document.querySelectorAll('.zone-tag');

const translations = {
  en: {
    brand: 'TIME.IS',
    exactNow: 'Local time · {city}',
    syncMessage: 'Device time · live at {time}',
    accuracyPrefix: 'Local time in',
    accuracySuffix: 'now:',
    about: 'About',
    contact: 'Contact',
    footerTitle: 'TIME.IS — exact time for any time zone',
    languageText: 'Time.is displays exact, official atomic clock time for any time zone in 58 languages, including English, Hindi, Bengali, Tamil, Telugu, Marathi, Kannada, and Gujarati.'
  },
  hi: {
    brand: 'समयदर्शी',
    exactNow: 'स्थानीय समय · {city}',
    syncMessage: 'डिवाइस का समय · अभी {time}',
    accuracyPrefix: 'स्थानीय समय',
    accuracySuffix: 'इस समय में:',
    about: 'हमारे बारे में',
    contact: 'संपर्क',
    footerTitle: 'समयदर्शी — किसी भी समय क्षेत्र का सटीक समय',
    languageText: 'समयदर्शी 58 भाषाओं में सटीक और आधिकारिक परमाणु समय दिखाता है, जिनमें हिंदी, बंगाली, तमिल, तेलुगु, मराठी, कन्नड़ और गुजराती शामिल हैं।'
  },
  kn: {
    brand: 'ಸಮಯದರ್ಶಿ',
    exactNow: 'ಸ್ಥಳೀಯ ಸಮಯ · {city}',
    syncMessage: 'ಸಾಧನದ ಸಮಯ · ಈಗ {time}',
    accuracyPrefix: 'ಸ್ಥಳೀಯ ಸಮಯ',
    accuracySuffix: 'ಈಗ:',
    about: 'ಬಗ್ಗೆ',
    contact: 'ಸಂಪರ್ಕ',
    footerTitle: 'ಸಮಯದರ್ಶಿ — ಯಾವುದೇ ಸಮಯ ವಲಯಕ್ಕೆ ನಿಖರ ಸಮಯ',
    languageText: 'ಸಮಯದರ್ಶಿ 58 ಭಾಷೆಗಳಲ್ಲಿ ನಿಖರ ಮತ್ತು ಅಧಿಕೃತ ಪರಮಾಣು ಸಮಯವನ್ನು ತೋರಿಸುತ್ತದೆ, ಅವುಗಳಲ್ಲಿ English, Hindi, Bengali, Tamil, Telugu, Marathi, Kannada ಮತ್ತು Gujarati ಸೇರಿವೆ.'
  },
  ta: {
    brand: 'நேரக்காட்சி',
    exactNow: 'உள்ளூர் நேரம் · {city}',
    syncMessage: 'சாதன நேரம் · இப்போது {time}',
    accuracyPrefix: 'உள்ளூர் நேரம்',
    accuracySuffix: 'இப்போது:',
    about: 'பற்றி',
    contact: 'தொடர்பு',
    footerTitle: 'நேரக்காட்சி — எந்த நேர மண்டலத்திற்கும் துல்லிய நேரம்',
    languageText: 'நேரக்காட்சி 58 மொழிகளில் துல்லியமான அதிகாரப்பூர்வ அணு நேரத்தை காட்டுகிறது, இதில் தமிழ், ஹிந்தி, பெங்காலி, தெலுங்கு, மராத்தி, கன்னடம் மற்றும் குஜராத்தி அடங்கும்.'
  },
  te: {
    brand: 'సమయదర్శిని',
    exactNow: 'స్థానిక సమయం · {city}',
    syncMessage: 'పరికర సమయం · ప్రస్తుతం {time}',
    accuracyPrefix: 'స్థానిక సమయం',
    accuracySuffix: 'ఇప్పుడు:',
    about: 'మా గురించి',
    contact: 'సంప్రదింపులు',
    footerTitle: 'సమయదర్శిని — ఏ సమయంలోనైనా ఖచ్చితమైన సమయం',
    languageText: 'సమయదర్శిని 58 భాషలలో ఖచ్చితమైన అధికారిక అణు సమయాన్ని చూపుతుంది, వాటిలో హిందీ, బెంగాలీ, తమిళం, తెలుగు, మరాఠీ, కన్నడ మరియు గుజరాతీ ఉన్నాయి.'
  },
  bn: {
    brand: 'সময়দর্শী',
    exactNow: 'স্থানীয় সময় · {city}',
    syncMessage: 'ডিভাইসের সময় · এখন {time}',
    accuracyPrefix: 'স্থানীয় সময়',
    accuracySuffix: 'এখন:',
    about: 'সম্পর্কে',
    contact: 'যোগাযোগ',
    footerTitle: 'সময়দর্শী — যে কোনো সময় অঞ্চলের সঠিক সময়',
    languageText: 'সময়দর্শী 58 ভাষায় সঠিক ও অফিসিয়াল পারমাণবিক সময় দেখায়, যার মধ্যে বাংলা, হিন্দি, তামিল, তেলুগু, মারাঠি, কন্নড় ও গুজরাটি অন্তর্ভুক্ত।'
  },
  mr: {
    brand: 'वेळदर्शक',
    exactNow: 'स्थानिक वेळ · {city}',
    syncMessage: 'डिव्हाइस वेळ · आत्ता {time}',
    accuracyPrefix: 'स्थानिक वेळ',
    accuracySuffix: 'आता:',
    about: 'आमच्याविषयी',
    contact: 'संपर्क',
    footerTitle: 'वेळदर्शक — कोणत्याही वेळ क्षेत्रासाठी अचूक वेळ',
    languageText: 'वेळदर्शक 58 भाषांमध्ये अचूक आणि अधिकृत अणु वेळ दाखवतो, ज्यात हिंदी, बंगाली, तामिळ, तेलुगू, मराठी, कन्नड आणि गुजराती समाविष्ट आहेत.'
  },
  gu: {
    brand: 'સમયદર્શક',
    exactNow: 'સ્થાનિક સમય · {city}',
    syncMessage: 'ઉપકરણનો સમય · અત્યારે {time}',
    accuracyPrefix: 'સ્થાનિક સમય',
    accuracySuffix: 'હવે:',
    about: 'અમારા વિશે',
    contact: 'સંપર્ક',
    footerTitle: 'સમಯદર્શક — કોઈપણ સમય ક્ષેત્ર માટે ચોક્કસ સમય',
    languageText: 'સમયદર્શક 58 ભાષાઓમાં ચોક્કસ અને અધિકૃત પરમાણુ સમય બતાવે છે, જેમાં હિન્દી, બંગાળી, તમિલ, તેલુગુ, મરાઠી, કન્નડ અને ગુજરાતી શામેલ છે.'
  }
};

function updateClockCopy(cityName = state.activeLabel, currentTime = mainTime.textContent) {
  const dict = translations[document.documentElement.lang] || translations.en;
  const exactNowLabel = document.querySelector('[data-i18n="exactNow"]');
  if (exactNowLabel) exactNowLabel.textContent = dict.exactNow.replace('{city}', cityName);
  const syncMessage = document.getElementById('syncMessage');
  if (syncMessage) syncMessage.textContent = dict.syncMessage.replace('{time}', currentTime);
}

function applyLanguage(langCode = 'kn') {
  const dict = translations[langCode] || translations.kn;
  const i18nNodes = document.querySelectorAll('[data-i18n]');
  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) node.textContent = dict[key];
  });

  if (brandName) brandName.textContent = dict.brand;
  document.documentElement.lang = langCode;
  updateClockCopy();

  langButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === langCode);
  });
}

function buildOptions(searchTerm = '') {
  const query = searchTerm.trim().toLowerCase();
  const filtered = availableTimezones.filter(({ label, tz }) => {
    if (!query) return true;
    return label.toLowerCase().includes(query) || tz.toLowerCase().includes(query);
  });

  datalist.innerHTML = filtered
    .slice(0, 30)
    .map(({ label, tz }) => `<option value="${label} (${tz})"></option>`)
    .join('');
}

function formatShortTime(zone) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: zone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date());
}

function formatLongDate(zone) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: zone,
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date());
}

function formatTimeZoneLabel(zone) {
  const parts = zone.split('/');
  return parts[parts.length - 1].replace(/_/g, ' ');
}

function setActiveTimezoneShortcut(activeButton = null) {
  zoneButtons.forEach((button) => {
    const isActive = button === activeButton;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function buildFavoriteCities() {
  favoriteCities.innerHTML = '';

  state.selected.forEach(({ label, tz }) => {
    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'favorite-item';
    item.dataset.zone = tz;
    item.dataset.label = label;
    item.innerHTML = `
      <span class="city-label">${label}</span>
      <span class="city-time">${formatShortTime(tz)}</span>
    `;
    if (label === state.activeLabel) item.classList.add('active');

    item.addEventListener('click', () => {
      setActiveTimezoneShortcut();
      state.activeZone = tz;
      state.activeLabel = label;
      mainLocation.textContent = label;
      updateMainClock(tz);
      document.querySelectorAll('.favorite-item').forEach((node) => {
        node.classList.toggle('active', node.dataset.label === label);
      });
    });
    favoriteCities.appendChild(item);
  });
}

function buildCityGrid() {
  cityGrid.innerHTML = '';

  const cityList = [...new Map(availableTimezones.map((entry) => [entry.label, entry])).values()];

  cityList.forEach(({ label, tz }) => {
    const pill = document.createElement('button');
    pill.type = 'button';
    pill.className = 'city-pill';
    pill.textContent = label;
    pill.dataset.zone = tz;
    const isSelected = state.selected.some((entry) => entry.label === label);
    if (isSelected) pill.classList.add('selected');

    pill.addEventListener('click', () => {
      setActiveTimezoneShortcut();
      const match = state.selected.find((entry) => entry.label === label);
      if (match) {
        if (state.selected.length > 1) {
          state.selected = state.selected.filter((entry) => entry.label !== label);
          if (state.activeLabel === label) {
            state.activeZone = state.selected[0].tz;
            state.activeLabel = state.selected[0].label;
          }
          buildFavoriteCities();
          buildCityGrid();
          updateMainClock(state.activeZone);
          mainLocation.textContent = state.activeLabel;
          return;
        }
      }

      if (!match) {
        state.selected.push({ label, tz });
      }
      state.activeZone = tz;
      state.activeLabel = label;
      buildFavoriteCities();
      buildCityGrid();
      updateMainClock(tz);
      mainLocation.textContent = label;
    });

    cityGrid.appendChild(pill);
  });
}

function updateMainClock(tz = state.activeZone, label = state.activeLabel) {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const offsetFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    timeZoneName: 'shortOffset',
  });

  const offset = offsetFormatter.formatToParts(now).find((part) => part.type === 'timeZoneName')?.value || 'UTC';
  const cityName = state.selected.find((entry) => entry.tz === tz && entry.label === label)?.label || label || formatTimeZoneLabel(tz);

  const formattedTime = formatter.format(now);
  mainTime.textContent = formattedTime;
  mainDate.textContent = dateFormatter.format(now);
  mainOffset.textContent = `${cityName}: ${offset} · ${formatShortTime(tz)}`;
  mainLocation.textContent = cityName;
  updateClockCopy(cityName, formattedTime);

  const locale = document.documentElement.lang || 'en';
  const widgetParts = new Intl.DateTimeFormat(locale, {
    timeZone: tz,
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).formatToParts(now);
  const widgetPart = (type) => widgetParts.find((part) => part.type === type)?.value || '';
  const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
  const minuteProgress = (now.getMinutes() + seconds / 60) / 60;
  const secondProgress = seconds / 60;
  const ringCircumference = 2 * Math.PI * 81;

  widgetWeekday.textContent = widgetPart('weekday');
  widgetDate.textContent = `${widgetPart('month')} ${widgetPart('day')}`;
  widgetTime.textContent = new Intl.DateTimeFormat(locale, {
    timeZone: tz,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(now);
  widgetMinuteRing.style.strokeDashoffset = `${2 * Math.PI * 91 * (1 - minuteProgress)}`;
  widgetSecondRing.style.strokeDashoffset = `${ringCircumference * (1 - secondProgress)}`;
  const angle = secondProgress * 2 * Math.PI - Math.PI / 2;
  widgetSecondDot.setAttribute('cx', `${110 + 81 * Math.cos(angle)}`);
  widgetSecondDot.setAttribute('cy', `${110 + 81 * Math.sin(angle)}`);
}

function addTimezoneByValue(inputValue) {
  if (!inputValue) return;

  const match = availableTimezones.find(({ label, tz }) => {
    const candidate = `${label} (${tz})`;
    return candidate.toLowerCase() === inputValue.trim().toLowerCase();
  });

  if (!match) return;

  setActiveTimezoneShortcut();

  if (state.selected.some((item) => item.tz === match.tz && item.label === match.label)) {
    state.activeZone = match.tz;
    state.activeLabel = match.label;
    updateMainClock(match.tz);
    searchInput.value = '';
    buildOptions();
    return;
  }

  state.selected.push(match);
  state.activeZone = match.tz;
  state.activeLabel = match.label;
  searchInput.value = '';
  buildOptions();
  buildFavoriteCities();
  buildCityGrid();
  updateMainClock(match.tz);
}

function submitTimezoneSearch(event) {
  event.preventDefault();
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    searchInput.focus();
    return;
  }

  const match = availableTimezones.find(({ label, tz }) => (
    label.toLowerCase() === query || `${label} (${tz})`.toLowerCase() === query
  )) || availableTimezones.find(({ tz }) => tz.toLowerCase() === query);

  if (match) {
    addTimezoneByValue(`${match.label} (${match.tz})`);
    return;
  }

  searchInput.focus();
  if (typeof searchInput.showPicker === 'function') searchInput.showPicker();
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const isDark = theme === 'dark';
  themeToggle.querySelector('.toggle-icon').textContent = isDark ? '🌙' : '☀️';
  themeToggle.querySelector('.toggle-label').textContent = isDark ? 'Dark' : 'Light';
  localStorage.setItem('world-clock-theme', theme);
}

function initializeTheme() {
  const savedTheme = localStorage.getItem('world-clock-theme');
  const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(savedTheme || (preferredDark ? 'dark' : 'light'));
}

function init() {
  buildOptions();
  buildFavoriteCities();
  buildCityGrid();
  initializeTheme();
  applyLanguage('en');
  state.activeZone = state.selected[0].tz;
  state.activeLabel = state.selected[0].label;
  updateMainClock(state.activeZone);
  setInterval(() => updateMainClock(state.activeZone), 1000);
}

searchInput.addEventListener('input', (event) => {
  buildOptions(event.target.value);
});

searchInput.addEventListener('change', (event) => {
  addTimezoneByValue(event.target.value);
});

searchForm.addEventListener('submit', submitTimezoneSearch);

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyLanguage(button.dataset.lang);
  });
});

zoneButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const timezone = button.dataset.timezone;
    const label = button.textContent.trim();
    state.activeZone = timezone;
    state.activeLabel = label;
    setActiveTimezoneShortcut(button);
    favoriteCities.querySelectorAll('.favorite-item').forEach((favorite) => {
      favorite.classList.remove('active');
    });
    updateMainClock(timezone, label);
  });
});

init();
