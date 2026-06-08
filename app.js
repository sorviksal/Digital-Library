
const COLORS = [
  ['#c9a84c','#8b5e3c'],['#4a6fa5','#2c4a7a'],['#6b9e6b','#3d6b3d'],
  ['#a85c6b','#7a3042'],['#5c7a8b','#2c5060'],['#8b6b3c','#5c3d18'],
  ['#7a6b9e','#4a3d7a'],['#9e6b5c','#7a3d2c'],
];

const BOOKS = [
  { id:1,  title:"ម៉ុម និង ម៉ាប់", 
    author:"Save the Children", 
    genre:"ទស្សនាវត្តីកុមារ", 
    year:1998, 
    rating:4.5, 
    img:"./img/482029861_662508346339779_7470243747155664671_n.jpg",
    desc:"សៀវភៅនេះជាអត្ថបទកុមារដែលពេញនិយមមួយ មានការនិទានបែបកម្សាន្ត និងអប់រំសម្រាប់កុមារ។"
  },
  { id:2,  
    title:"ទន្សាយបកស្រាយពីសិទ្ធិកុមារ",
    author:"UNICEF",
    genre:"ទស្សនាវត្តីកុមារ",
    year:2014, 
    rating:4.8, 
    img:"./img/childrights.jpg",
    desc:"កុមារគ្រប់រូបនៅប្រទេសកម្ពុជាមានសិទ្ធិមនុស្សជាមូលដ្ឋានដើម្បីរស់រានមានជីវិត លូតលាស់ និងអភិវឌ្ឍពេញលេញចូលរួមក្នុងជីវភាពសង្គមជាតិទាំងក្នុង គ្រួសារ សាលារៀន និងសហគមន៍ផង។ យុវវ័យគ្រប់រូបត្រូវទទួលបានការថែទាំ ការរៀនសូត្រ ការរស់នៅប្រកបដោយសេចក្តីថ្លៃថ្នូរ មិនត្រូវបានគេរើសអើង មិនត្រូវបានគេបំពាន កេងប្រវ័ញ្ច និងមិនត្រូវបានគេកេងប្រវ័ញ្ចកម្លាំងពលកម្មឡើយ។ កុមារីមានសិទ្ធិដូចកុមារា។ កុមារគ្រប់រូបមានសិទ្ធិលេងកីឡា។ កុមារគ្រប់រូបមានសិទ្ធិរៀនសូត្របានគ្រប់ៗគ្នា។ កុមារគ្រប់រូបមានសិទ្ធិទទួលហូប ក្នុងជីវិតគ្រួសារ រៀបចំ និងសង្គមដែរ។ នៅឆ្នាំ ១៩៩២ ប្រទេសកម្ពុជាបានយល់ព្រម គោលសិទ្ធិកុមារ។ សិទ្ធិកុមារទាំងអស់មានចែងនៅក្នុង អនុសញ្ញា អង្គការសហប្រជាជាតិស្តីពីសិទ្ធិកុមារ។" 

  },
  { id:3,  title:"ទម្លាប់អាតូម ATOMIC",       author:"James Clears",        genre:"អភិវឌ្ឍន៍ខ្លួន",   year:2018, rating:4.7, img:"./img/ATOMIC.jpg",   desc:"សៀវភៅ Atomic Habits ដោយលោក James Clear គឺជាមគ្គុទ្ទេសក៍ច្បាស់លាស់សម្រាប់ការបំបែកទម្លាប់អាក្រក់ និងការបង្កើតទម្លាប់ល្អ ដែលបង្ហាញថាភាពជោគជ័យពិតប្រាកដកើតចេញពីឥទ្ធិពលរួមនៃការកែលម្អតិចតួចប្រចាំថ្ងៃត្រឹមតែ 1%។ វាបង្រៀនថាអាថ៌កំបាំងនៃការផ្លាស់ប្តូរយូរអង្វែងមិនមែនស្ថិតនៅក្នុងការកំណត់គោលដៅធំជាងនោះទេ ប៉ុន្តែស្ថិតនៅក្នុងការបង្កើនប្រសិទ្ធភាពប្រព័ន្ធមូលដ្ឋានរបស់អ្នក។" },
  { id:4,  title:"៤៤ច្បាប់នៃអំណាច",         author:"Robert Green និង Joost Elffers",        genre:"អភិវឌ្ឍន៍ខ្លួន",     year:1998, rating:4.6, img:"./img/power.jpg",  desc:"ច្បាប់អំណាចទាំង ៤៨ ដោយលោក Robert Greene គឺជាសៀវភៅលក់ដាច់បំផុត និងគ្មានសីលធម៌ ដែលចម្រាញ់ប្រវត្តិសាស្ត្ររយៈពេល ៣០០០ ឆ្នាំទៅជាគោលការណ៍សំខាន់ៗចំនួន ៤៨ នៃឥទ្ធិពល និងការគ្រប់គ្រង។ វាត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយដោយអ្នកអានដែលសិក្សាអំពីសក្ដានុភាពសង្គម ការធ្វើសមយុទ្ធរបស់ក្រុមហ៊ុន និងការការពារខ្លួនប្រឆាំងនឹងការរៀបចំ។" },
  { id:5,  title:"ផ្កាស្រពោន",               author:"នូ ហាច",                genre:"ប្រលោមលោកខ្មែរ",    year:1949, rating:8.7, img:"./img/pka_sropon_by_nou_hach.jpg",   desc:" រឿងនេះបានបង្ហាញពីជីវិតស្នេហាព្រាត់ប្រាសរបស់យុវជនយុវតីពីររូបបណ្តាលមកពីការរើសអើងវណ្ណៈ (ឲ្យតម្លៃលើទ្រព្យសម្បត្តិធំជាងកិត្តិយស) ។បញ្ហាស្មោះស្ម័គ្ររបស់ប៊ុនធឿន និងវិធាវី (ស្នេហាបែបប្រពៃណីស្នេហាក្រោមគំនាបទ្រព្យសម្បត្តិ, ស្នេហាក្រោមឥទ្ធិពលនៃជំនឿសាសនា) ទឹកចិត្តលោភលន់ទ្រព្យសម្បត្តិរបស់យាយនួន។" },
  { id:6,  title:"កោះផ្តាច់និស្ស័យ",         author:"ម៉ៅ សំណាង",              genre:"ប្រលោមលោកខ្មែរ",   year:2005, rating:6.3, img:"./img/yk-1510-koh-pdach-nisay-715x1024.png",   desc:"ផ្កាស្មៅមូយទងនៅក្រោមបាតជើងមនុស្សគ្រប់រូបមិនថាពេលវេលាណាទេ ត្រូវជួបតែការជាន់ឈ្លីនិងក្តីឈឺចាប់ ប៉ុន្តែផ្កាស្មៅមិនព្រមចុះចាញ់ឡើយ ទោះត្រូវថ្ងៃត្រូវភ្លើងរងារឬក្តៅរោលរៀលកំរិតណា ផ្កាស្មៅនៅតែប្រឹងងើបឈរកំដរជីវិតដ៏តោកយ៉ាករបស់ខ្លួនជានិច្ច។" },
  { id:7,  title:"ការប្រែប្រួលអាកាសធាតុ",     author:"Spair",     genre:"ឯកសារ",    year:2017, rating:4.6, img:"./img/weather.jpg",   desc:"ការប្រែប្រួល​អាកាសធាតុ គឺ​សម្តៅទៅលើ​ការ​ប្រែប្រួល​ខ្លាំង និង​ជាលក្ខណៈ​យូរអង្វែង នៃ​សីតុណ្ហភាព​មធ្យម​នៃ​ភព​ផែនដី។ វាអាចជាការ​ធ្លាក់ចុះ​ ឬ​ក៏​ជា​ការ​កើនឡើង ​នៃ​សីតុណ្ហភាព​​មធ្យម​ ដែលគេ​វាស់ស្ទង់​ក្នុងរយៈពេល​ច្រើនឆ្នាំ​ជាប់ៗគ្នា ។" },
  { id:8,  title:"បរិស្ថាន",    author:"ណូអែល អូប្រាយែន ; ទិន ពន្លក",    genre:"ឯកសារ",    year:2000, rating:6.5, img:"./img/2000-environment-aide-memoire-kh.jpg",   desc:"A student murders a pawnbroker and grapples with guilt and redemption in Tsarist Russia." },

];


const genreColors = {};
const allGenres = [...new Set(BOOKS.map(b => b.genre))];
allGenres.forEach((g, i) => { genreColors[g] = COLORS[i % COLORS.length]; });

let shelf = JSON.parse(localStorage.getItem('lib-shelf') || '[]');
let currentGenre = 'all';
let activeBook = null;

function saveShelf() {
  localStorage.setItem('lib-shelf', JSON.stringify(shelf));
  const el = document.getElementById('shelf-count');
  if (el) el.textContent = shelf.length;
}

function starHtml(rating) {
  let s = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) s += '<span class="star">★</span>';
    else if (i - 0.5 <= rating) s += '<span class="star" style="opacity:.5">★</span>';
    else s += '<span style="color:#d9cdb8">★</span>';
  }
  return s + `<span style="font-size:12px;color:#8b7355;margin-left:4px">${rating}</span>`;
}

function bookCardHtml(book) {
  const [bg, dark] = genreColors[book.genre] || COLORS[0];
  const inShelf = shelf.includes(book.id);

  return `
  <div class="book-card fade-in group cursor-pointer bg-white border border-[#e8e0d5] rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
       onclick="openModal(${book.id})">

    <!-- Cover -->
    <div class="relative overflow-hidden" style="height:200px;background:${bg};">
      <img
        src="${book.img}"
        alt="${book.title}"
        class="w-full h-full object-cover"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
      />
      <!-- Fallback colored cover shown if image fails -->
      <div class="absolute inset-0 flex-col items-center justify-center p-4 text-center"
           style="display:none;background:${bg};">
        <div class="absolute left-0 top-0 bottom-0 w-5 opacity-40" style="background:${dark};"></div>
        <p class="khmer font-bold text-white text-sm leading-tight drop-shadow-lg z-10 relative">${book.title}</p>
        <p class="khmer text-white/70 text-xs mt-1 z-10 relative">${book.author.split(' ').pop()}</p>
      </div>

      <!-- Rating pill -->
      <div class="absolute top-2.5 right-2.5 bg-white/90 text-[#1a1410] text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm z-10">
        <svg class="w-3 h-3 fill-[#c9a84c]" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
        ${book.rating}
      </div>

      <!-- Shelf check badge -->
      ${inShelf ? `<div class="absolute top-2.5 left-2.5 bg-[#6b9e6b] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs z-10 shadow-sm">✓</div>` : ''}

      <!-- Hover overlay -->
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-[5]"></div>
    </div>

    <!-- Body -->
    <div class="p-4 flex flex-col flex-1">
      <!-- Genre pill -->
      <span class=" khmer inline-block self-start text-xs font-medium px-2.5 py-0.5 rounded-full mb-2"
            style="background:${bg}28;color:${dark};">${book.genre}</span>
      <!-- Title -->
      <p class="khmer font-semibold text-[#1a1410] text-sm leading-snug line-clamp-2 mb-1 group-hover:text-[#2f00ff] transition-colors">${book.title}</p>
      <!-- Author -->
      <p class="khmer text-[#8b7355] text-xs mb-auto pb-3">${book.author} · ${book.year}</p>
      <!-- Read more button -->
      <button class="khmer inline-flex items-center gap-1.5 self-start text-xs font-medium text-[#1a1410] bg-[#f5f0e8] border border-[#d9cdb8] hover:bg-[#1a1410] hover:text-white hover:border-[#1a1410] focus:outline-none focus:ring-2 focus:ring-[#c9a84c] px-3.5 py-1.5 rounded-full transition-all duration-200 mt-1">
        អានបន្ថែម
        <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 12H5m14 0-4 4m4-4-4-4"/>
        </svg>
      </button>
    </div>
  </div>`;
}

function renderGrid(books, containerId) {
  const el = document.getElementById(containerId);
  el.innerHTML = books.map(bookCardHtml).join('');
}

function filterBooks() {
  const q = document.getElementById('search-input').value.toLowerCase();
  const sort = document.getElementById('sort-select').value;
  let filtered = BOOKS.filter(b => {
    const matchGenre = currentGenre === 'all' || b.genre === currentGenre;
    const matchQ = !q || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q);
    return matchGenre && matchQ;
  });
  if (sort === 'rating') filtered.sort((a,b) => b.rating - a.rating);
  else if (sort === 'year') filtered.sort((a,b) => b.year - a.year);
  else filtered.sort((a,b) => a.title.localeCompare(b.title));
  renderGrid(filtered, 'book-grid');
  document.getElementById('no-results').classList.toggle('hidden', filtered.length > 0);
}

function setGenre(genre, btn) {
  currentGenre = genre;
  document.querySelectorAll('#genre-filters .tag').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  filterBooks();
}

function buildGenreFilters() {
  const el = document.getElementById('genre-filters');
  allGenres.forEach(g => {
    const btn = document.createElement('button');
    btn.className = 'tag badge px-4 py-1.5 rounded-full border border-[#d9cdb8] bg-white text-[#8b5e3c]';
    btn.dataset.genre = g;
    btn.textContent = g;
    btn.onclick = () => setGenre(g, btn);
    el.appendChild(btn);
  });
}

function openModal(id) {
  const b = BOOKS.find(x => x.id === id);
  if (!b) return;
  activeBook = b;
  const [bg, dark] = genreColors[b.genre] || COLORS[0];

  // Cover: show real image if available, fallback to color
  const coverEl = document.getElementById('modal-cover');
  coverEl.style.background = bg;
  coverEl.innerHTML = `
    <img src="${b.img}" alt="${b.title}"
         class="w-full h-full object-cover rounded-lg"
         onerror="this.style.display='none';" />
    <div id="modal-spine" class="absolute left-0 top-0 bottom-0 w-4 opacity-40 rounded-l-lg" style="background:${dark};"></div>`;

  document.getElementById('modal-title').textContent = b.title;
  document.getElementById('modal-author').textContent = b.author;
  document.getElementById('modal-genre-badge').textContent = b.genre;
  document.getElementById('modal-year').textContent = `បោះពុម្ពឆ្នាំ ${b.year}`;
  document.getElementById('modal-desc').textContent = b.desc;
  document.getElementById('modal-stars').innerHTML = starHtml(b.rating);
  updateModalBtn();
  document.getElementById('book-modal').classList.remove('hidden');
}

function updateModalBtn() {
  const btn = document.getElementById('modal-save-btn');
  const inShelf = shelf.includes(activeBook?.id);
  btn.textContent = inShelf ? 'Download on Telegram Channel' : 'Download on Telegram Channel';
  btn.className = inShelf
    ? 'khmer flex-1 bg-[#0088CC] text-white py-2.5 rounded-full text-sm font-semibold hover:bg-[#6b4a2f transition-colors'
    : 'khmer flex-1 bg-[#0088CC] text-white py-2.5 rounded-full text-sm font-semibold hover:bg-[#6b4a2f transition-colors';
}

function toggleShelf() {
  if (!activeBook) return;
  if (shelf.includes(activeBook.id)) {
    shelf = shelf.filter(x => x !== activeBook.id);
  } else {
    shelf.push(activeBook.id);
  }
  saveShelf();
  updateModalBtn();
  filterBooks();
}

function closeModal() {
  document.getElementById('book-modal').classList.add('hidden');
  activeBook = null;
}

function showSection(name) {
  ['home', 'catalog', 'mybooks', 'articles', 'ourteam', 'contect'].forEach(s => {
    const el = document.getElementById(`section-${s}`);
    if (el) el.classList.toggle('hidden', s !== name);
  });
  if (name === 'mybooks') renderShelf();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderShelf() {
  const books = BOOKS.filter(b => shelf.includes(b.id));
  const grid = document.getElementById('shelf-grid');
  const empty = document.getElementById('shelf-empty');
  if (books.length === 0) {
    grid.innerHTML = '';
    empty.classList.remove('hidden');
  } else {
    empty.classList.add('hidden');
    renderGrid(books, 'shelf-grid');
  }
}

document.getElementById('book-modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// Init
buildGenreFilters();
filterBooks();
const shelfCountEl = document.getElementById('shelf-count');
if (shelfCountEl) shelfCountEl.textContent = shelf.length;

// ── Articles Data ─────────────────────────────────────────
const ARTICLES = [
{
  id: 1,
  category: 'ការអាន',
  categoryColor: '#2f00ff',
  title: 'កិច្ចសហប្រតិបត្តិការរវាងក្រុមហ៊ុនបណ្ណាល័យឌីជីថល និងក្រសួងអប់រំ យុវជន និងកីឡា',
  date: 'ថ្ងៃទី ១ ខែ មករា ឆ្នាំ ២០២៥',
  readTime: '5 min read',
  author: 'ក្រុមបណ្ណាល័យ',
  img: './img/Team.png',
  content: `  
    <h4>
      ក្រុមហ៊ុនបណ្ណាល័យឌីជីថលរបស់យើង មានកិត្តិយសយ៉ាងខ្លាំងក្នុងការប្រកាសអំពីការចុះកិច្ចសហប្រតិបត្តិការជាផ្លូវការជាមួយ ក្រសួងអប់រំ យុវជន និងកីឡា ដើម្បីរួមចំណែកលើកកម្ពស់វិស័យអប់រំឌីជីថល និងបង្កើនភាពងាយស្រួលសម្រាប់សិស្សានុសិស្សក្នុងការស្វែងរកឯកសារ និងចំណេះដឹងតាមប្រព័ន្ធអនឡាញ។
    </h4>

    <p>
      ក្នុងពិធីចុះកិច្ចសហប្រតិបត្តិការនេះ ក៏មានវត្តមានរបស់លោក សោ វិសាល ស្ថាបនិក (Founder) នៃក្រុមហ៊ុនបណ្ណាល័យឌីជីថល ដែលបានបង្ហាញពីចក្ខុវិស័យ និងការប្តេជ្ញាចិត្តក្នុងការប្រើប្រាស់បច្ចេកវិទ្យាឌីជីថល ដើម្បីគាំទ្រដល់វិស័យអប់រំនៅកម្ពុជា។ លោកបានលើកឡើងថា ការបង្កើតបណ្ណាល័យឌីជីថលនេះ មានគោលបំណងធ្វើឱ្យការសិក្សា និងការស្វែងរកឯកសារកាន់តែងាយស្រួល សម្រាប់សិស្ស និស្សិត និងអ្នកស្រាវជ្រាវទូទាំងប្រទេស។
    </p>

    <p>
      កិច្ចសហប្រតិបត្តិការនេះ មានគោលបំណងសំខាន់ក្នុងការផ្តល់នូវបណ្ណាល័យឌីជីថលដែលមានភាពទំនើប សុវត្ថិភាព និងងាយស្រួលប្រើប្រាស់ ដើម្បីឱ្យសិស្ស និស្សិត លោកគ្រូ អ្នកគ្រូ និងសាធារណជន អាចស្វែងរកសៀវភៅ ឯកសារ មេរៀន និងឯកសារសិក្សាផ្សេងៗបានគ្រប់ពេលវេលា និងគ្រប់ទីកន្លែង។
    </p>

    <p>
      តាមរយៈការសហការនេះ ក្រុមហ៊ុនរបស់យើងនឹងបន្តអភិវឌ្ឍបច្ចេកវិទ្យាឌីជីថល និងពង្រីកមាតិកាអប់រំឱ្យកាន់តែសម្បូរបែប ដើម្បីគាំទ្រដល់ការសិក្សាស្រាវជ្រាវ និងការអប់រំសម័យថ្មីនៅកម្ពុជា។ យើងជឿជាក់ថា បណ្ណាល័យឌីជីថលនឹងក្លាយជាផ្នែកសំខាន់មួយ ក្នុងការជួយសិស្សានុសិស្សទទួលបានចំណេះដឹងកាន់តែងាយស្រួល និងមានប្រសិទ្ធភាព។
    </p>

    <p>
      ក្រុមហ៊ុនយើងខ្ញុំ សូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅចំពោះ ក្រសួងអប់រំ យុវជន និងកីឡា ដែលបានផ្តល់ទំនុកចិត្ត និងគាំទ្រចំពោះគម្រោងនេះ។ យើងនឹងបន្តខិតខំប្រឹងប្រែង ដើម្បីអភិវឌ្ឍសេវាកម្មអប់រំឌីជីថលឱ្យកាន់តែល្អប្រសើរ និងរួមចំណែកក្នុងការអភិវឌ្ឍវិស័យអប់រំនៅព្រះរាជាណាចក្រកម្ពុជា។
    </p>

    <blockquote>
      “បច្ចេកវិទ្យាឌីជីថល គឺជាស្ពាននៃចំណេះដឹងសម្រាប់យុវជនជំនាន់ថ្មី”
    </blockquote>
  `
},
{
  id: 2,
  category: 'ចំណេះដឹង',
  categoryColor: '#b8860b',
  title: 'ហេតុអ្វីបានជាយើងត្រូវអាន?',
  date: 'ថ្ងៃទី ១៥ ខែ មករា ឆ្នាំ ២០២៥',
  readTime: '3 min read',
  author: 'ក្រុមបណ្ណាល័យ',
  img: './asset/fatherandson.jpg',
  content: `
    <p>
      ការអានមានសារៈសំខាន់យ៉ាងខ្លាំងក្នុងជីវិតប្រចាំថ្ងៃ ព្រោះវាជួយឱ្យយើងទទួលបានចំណេះដឹងថ្មីៗ និងអភិវឌ្ឍសមត្ថភាពផ្ទាល់ខ្លួន។ សៀវភៅ និងឯកសារផ្សេងៗ គឺជាប្រភពនៃបទពិសោធន៍ គំនិត និងចំណេះដឹងដែលអាចជួយឱ្យយើងយល់ដឹងអំពីពិភពលោកកាន់តែទូលំទូលាយ។
    </p>

    <h2>១. បង្កើនចំណេះដឹង</h2>
    <p>
      ការអានជួយឱ្យយើងស្គាល់ព័ត៌មានថ្មីៗ និងយល់ដឹងអំពីមុខវិជ្ជាផ្សេងៗ។ វាធ្វើឱ្យយើងមានចំណេះដឹងទូលំទូលាយ និងអាចយកទៅប្រើប្រាស់ក្នុងការសិក្សា ការងារ និងជីវិតប្រចាំថ្ងៃ។
    </p>

    <h2>២. អភិវឌ្ឍការគិត និងការវិភាគ</h2>
    <p>
      មនុស្សដែលអានញឹកញាប់ តែងតែមានសមត្ថភាពក្នុងការគិត វិភាគ និងដោះស្រាយបញ្ហាបានល្អ។ ការអានជួយបង្កើនការគិតឡូជីខល និងការសម្រេចចិត្តប្រកបដោយហេតុផល។
    </p>

    <h2>៣. បង្កើនវាក្យសព្ទ និងជំនាញភាសា</h2>
    <p>
      ការអានជួយឱ្យយើងចេះពាក្យថ្មីៗ និងបង្កើនសមត្ថភាពក្នុងការនិយាយ សរសេរ និងទំនាក់ទំនងជាមួយអ្នកដទៃបានកាន់តែល្អ។
    </p>

    <h2>៤. ជួយបង្កើនគំនិតច្នៃប្រឌិត</h2>
    <p>
      សៀវភៅ និងអត្ថបទផ្សេងៗអាចផ្តល់គំនិតថ្មីៗ និងជំរុញការច្នៃប្រឌិត។ វាជួយឱ្យយើងមើលឃើញបញ្ហា និងដំណោះស្រាយពីមុំផ្សេងៗ។
    </p>

    <h2>៥. កាត់បន្ថយភាពតានតឹង</h2>
    <p>
      ការអានអាចជួយឱ្យអារម្មណ៍ស្ងប់ស្ងាត់ និងបន្ធូរអារម្មណ៍ពីភាពនឿយហត់។ ការចំណាយពេលអានសៀវភៅល្អមួយក្បាល អាចធ្វើឱ្យយើងមានអារម្មណ៍ធូរស្រាល និងសប្បាយចិត្ត។
    </p>

    <h2>៦. ជួយឱ្យជោគជ័យក្នុងការសិក្សា និងការងារ</h2>
    <p>
      មនុស្សដែលមានទម្លាប់អាន ជាទូទៅមានចំណេះដឹងទូលំទូលាយ និងមានឱកាសជោគជ័យខ្ពស់ក្នុងការសិក្សា និងអាជីពការងារ។
    </p>

    <blockquote>
      “ការអាន គឺជាទ្វារទៅកាន់ពិភពនៃចំណេះដឹង”
    </blockquote>
  `
},
  {
    id: 3,
    category: 'សហគមន៍',
    categoryColor: '#1a7a50',
    title: 'ចូលរួមជាមួយក្លឹបអានសៀវភៅរបស់យើង',
    date: 'ថ្ងៃទី ២០ ខែ កុម្ភៈ ២០២៥',
    readTime: '2 min read',
    author: 'ក្រុមបណ្ណាល័យ',
    img: './asset/Teaching.png',
    content: `
      <p>ក្លឹបអានសៀវភៅរបស់យើងបើកសម្រាប់សមាជិកថ្មីទាំងអស់! ជួបគ្នារៀងរាល់ខែ ហើយចែករំលែកការយល់ដឹងអំពីសៀវភៅ។</p>
      <h2>ហេតុអ្វីត្រូវចូលរួម?</h2>
      <p>ការចូលរួមជួយអ្នកបង្កើតបណ្តាញមិត្តភ័ក្តិ ចែករំលែកគំនិត និងស្វែងរកការជំរុញចិត្តក្នុងការអាន។ ជារៀងរាល់ខែ យើងនឹងជ្រើសរើសសៀវភៅថ្មីមួយក្បាល ហើយពិភាក្សាជាមួយគ្នា។</p>
      <h2>ពេលវេលា និងទីកន្លែង</h2>
      <p>ជួបគ្នារៀងរាល់ថ្ងៃសៅរ៍ ទី ១ នៃខែ វេលា ២ ល្ងាច នៅបណ្ណាល័យរបស់យើង។ ចូលរួមដោយឥតគិតថ្លៃ!</p>
      <h2>របៀបចុះឈ្មោះ</h2>
      <p>ទំនាក់ទំនងមកយើងតាម Telegram ឬ Facebook ដើម្បីបញ្ជាក់ការចូលរួម។ យើងរង់ចាំជួបអ្នក!</p>
    `
  },
    {
    id: 4,
    category: 'សហគមន៍',
    categoryColor: '#1a7a50',
    title: 'ជួយសិស្ស ឬក្មេងៗ ឱ្យមានទឹកចិត្តបន្តការអាន',
    date: 'ថ្ងៃទី ២០ ខែ កុម្ភៈ ២០២៥',
    readTime: '2 min read',
    author: 'ក្រុមបណ្ណាល័យ',
    img: './asset/two-happy-kids-reading-holy-quran-together-during-2023-11-27-04-55-14-utc-scaled.jpg',
    content: `
      <p>
តាមរយៈគេហទំព័រ Thought Co បានឱ្យដឹងថា ការកំណត់ចក្ខុវិស័យ ឬគោលបំណងមុនពេលអានសៀវភៅ ជាកត្តាមួយជួយឱ្យសិស្សផ្តោតអារម្មណ៍បានល្អ និងការបង្កើនចំណង់ទៅក្នុងវិស័យអំណាន រួមទាំងពង្រឹងចំណេះទូទៅឱ្យមានភាពទូលាយជាងមុន។</p>
      <h2>តើត្រូវបណ្តុះវត្ថុបំណងនៃការអានដោយរបៀបណា?</h2>
      <p>ដើម្បីបង្កើតភាពជាក់លាក់មួយ ក្នុងការជំរុញកុមារឱ្យអានក្នុងរយៈពេលវែងបាន ជាដំបូងគួរមានទម្លាប់ដាស់តឿនកូនៗ អានអ្វីមួយឱ្យបានចប់ចុង ចប់ដើម និងការស្រូបបាននូវព័ត៌មានពេញលេញពីអត្ថបទ មិនថា ទីកន្លែង ពេលវេលា ​និងចំណោទបញ្ហា ក៏ដូចជាដំណោះស្រាយនៅក្នុងសាច់រឿងនីមួយៗ។</p>
      <p>ក្នុងនាមជាអ្នក​អាណាព្យាបាល ដើម្បីជួយកុមារឱ្យស្វែងរកឃើញរាល់គោលដៅពីការអានសៀវភៅ ជាឧទាហរណ៍ នៅពេលអានសៀវភៅរឿងព្រេង លោកអ្នកអាចជួយពួកគេតាមរយៈការគូររូបភាពអ្វីខ្លះដែលអាចនឹងកើតមាននៅពេលខាងមុខ ឬក៏សាច់រឿងបន្ទាប់ដែលគង់នឹងកើត។​ មួយវិញទៀត បង្កើតផែនទី ឬក៏ចោទជាសំណួរ ទៅកាន់ក្មេងៗ អំពីសាច់រឿងដែលទើបតែអានចប់។</p>
      <p>លោកអ្នក​ក៏​អាចសរសេរចុះ នូវអ្វីដែលជាបញ្ហា ហើយអនុញ្ញាតិឱ្យសិស្ស ឬក្មេងៗ មានឱកាសសាកល្បងដោះស្រាយបញ្ហាមួយៗ ដោយព្រាងទុកជាមុន។ ចំពោះសំណួរដែលគួរសួរបន្ទាប់មានដូចជា តើនៅក្នុងសាច់រឿងអម្បាញ់មិញ មានដំណោះស្រាយប៉ុន្មានចំណុច? អ្វីខ្លះ? តើនៅក្នុងសៀវភៅមានគោលបំណងអ្វី ឬគេចង់ប្រាប់ពីអ្វី? ការអនុវត្តបែបនេះទៅកាន់សិស្ស ឬកុមារ មិនត្រឹមតែជាការជួយពួកគេឱ្យត្រៀមខ្លួនក្នុងការទទួលបាន ការសិក្សាដោយប្រសិទ្ធភាពនោះទេ ប៉ុន្តែបានជំរុញទឹកចិត្តសិស្សឱ្យ​មានចំណង់ក្នុងការបន្តអាន ដោយមិនចាំបាច់រំលឹក ឬក៏ការបង្ខិតបង្ខំពីគ្រូ ឬពីអ្នក​អាណាព្យាបាលជាប្រចាំ៕

</p>
    `
  },
      {
    id: 5,
    category: 'សហគមន៍',
    categoryColor: '#1a7a50',
    title: 'វប្បធម៌​អាន​សៀវភៅ​គួរ​ត្រូវ​បាន​បណ្តុះ​ក្នុង​សង្គម​កម្ពុជា',
    date: 'ថ្ងៃទី ២០ ខែ កុម្ភៈ ២០២៥',
    readTime: '2 min read',
    author: 'ក្រុមបណ្ណាល័យ',
    img: './asset/cambodia-reading-children.jpg',
    content: `
      <h2>វប្បធម៌​អាន​សៀវភៅ​គួរ​ត្រូវ​បាន​បណ្តុះ​ក្នុង​សង្គម​កម្ពុជា</h2>
      <p>ពលរដ្ឋ​ខ្មែរ​ត្រូវ​គេ​សង្កេត​ឃើញ​ជា​ទូទៅ​មិន​សូវ​ចូល​ចិត្ត​អាន​សៀវភៅ​ឬ​សារព័ត៌មាន​ឡើយ។​ កង្វះ​ទម្លាប់​អាន​សៀវភៅ​គឺជា​ចំណុច​អវិជ្ជមាន​ដ៏​ធំធេង​មួយ​របស់សង្គម​កម្ពុជា។ ​ទម្លាប់​នេះ​បាន​បន្ត​ពី​ជំនាន់​មួយ​ទៅ​ជំនាន់​មួយ​ដោយ​សារ​តែ​ឪពុក​ម្តាយ​មិន​បង្ហាញ​គំរូ​ដល់​កូន​ចៅ​ជំនាន់​ក្រោយ​ និង​ក៏​ដូចជា​សង្គម​មិន​ទាន់​ឲ្យ​តម្លៃ​ពិត​ប្រាកដ​ទៅ​លើ​អ្នក​ចេះ​ដឹង។ ទម្លាប់​មិន​អាន​សៀវភៅ​​ឬ​អានសារព័ត៌មាន​ជា​ទម្លាប់​មិន​ល្អ​ដែល​គួរ​ផ្លាស់ប្តូរ​ជា​ចាំបាច់​ដោយ​ត្រូវ​ជំនួស​វិញ​នូវ​​ការ​បណ្តុះ​វប្បធម៌​នៃ​ការ​អានក្នុង ចំណោមពលរដ្ឋខ្មែរ ជាពិសេស​ក្នុង​ចំណោម​កុមារ​តែម្តង។</p>
      <p>នៅ​ក្នុង​បណ្តា​ប្រទេស​ជឿន​លឿន ​និង​ស៊ីវិល័យ​ទាំងឡាយ​ក្នុង​លោក​ ប្រជាពលរដ្ឋ​របស់​គេ​ចាត់​ទុក​សៀវភៅ ​ឬ​សារព័ត៌មាន​ជា​របស់​ចាំបាច់​មួយ​ដូច​ជា​ចំណី​អាហារ​ប្រចាំ​ថ្ងៃ​ដូច្នោះ​ដែរ។​នៅ​គ្រប់​ទីកន្លែង​ និង​គ្រប់​ពេល​វេលា​ដែល​មាន​ពេល​ទំនេរ​ពី​ការងារ​ ពួកគេ​តែង​អាន​សៀវភៅ​ឬ​កាសែត​ជា​ប្រចាំ ​មានន័យ​ថា​ ការ​អាន​គឺ​ជា​ទម្លាប់​ប្រចាំ​ថ្ងៃ​មិន​អាច​ខ្វះ​បាន។</p>
      <p>ងាក​មក​មើល​ប្រទេស​កម្ពុជា​វិញ ​ពលរដ្ឋ​ភាគច្រើន​លើស​លប់​មាន​ទម្លាប់​តិចតួច​ឬ​អ្នកខ្លះគ្មាន​ទម្លាប់​ទាល់តែ​សោះ​ក្នុង​ការ​អាន​សៀវភៅ។ ​កង្វះ​ទម្លាប់​អាន​សៀវភៅ​គឺ​ជា​គុណវិបត្តិ​ធំធេង​របស់​ពលរដ្ឋ​កម្ពុជា​ដែល​ត្រូវ​កែប្រែ​ជា​ចាំបាច់​ដោយ​ហេតុ​ថា​គ្មាន​សង្គម​ណាមួយ​អាច​អភិវឌ្ឍន៍​ទៅ​មុខ​បាន​លឿន​ខណៈ​ដែល​ពលរដ្ឋ​ក្នុង​សង្គម​នោះ​មិន​អាន​សៀវភៅ​ទាល់​តែសោះ​នោះ​ឡើយ។ ប្រទេស​ជប៉ុន​បាន​ងើប​ឡើង​យ៉ាង​ឆាប់​រហ័ស​ពី​គំនរ​ផេះផង់​នៃ​សង្គ្រាម​លោក​លើក​ទី​២​ហើយ​បាន​ក្លាយ​ជា​ប្រទេស​ដ៏​មាន​ឥទ្ធិពល​ខាង​សេដ្ឋកិច្ច​វិញ​ក៏​ដោយសារ​តែ​ពលរដ្ឋ​ជប៉ុន​ជា​មនុស្ស​ឧស្សាហ៍​ព្យាយាម ​និង​ចូលចិត្តអាន​សៀវភៅ​...!</p>
      <p>ជា​ការ​ពិត​ណាស់ ​គ្រួសារ​ខ្មែរ​ច្រើន​ឲ្យ​តម្លៃទៅ​លើ​មាស​ប្រាក់​ គ្រឿង​អលង្ការ​ ឬ​សម្ភារៈ​ប្រើ​ប្រាស់​ទំនើបៗ​ ដូចជា​រថយន្ត ​ម៉ូតូ ​ឬ​ទូរស័ព្ទ​ដៃ​ប្រភេទ​ថ្មី​ ដែល​ជា​វត្ថុ​លម្អរ​ខាង​ក្រៅ​ជា​ជាង​សៀវភៅ​ដែល​ជា​វត្ថុ​លម្អ​ខាង​ក្នុង ​គឺ​លម្អ​ក្នុង​ចិត្ត ​ក្នុង​សតិបញ្ញា ​និង​ស្មារតី។ ​មាន​គ្រួសារ​ខ្មែរ​តិច​តួច​ប៉ុណ្ណោះ​ដែល​មាន​សៀវភៅ​តាំង​នៅ​ក្នុង​ផ្ទះ។ ​ជា​ទូទៅ ​គេ​ច្រើន​សម្អាង​ថា ​មក​ពី​ជីវភាព​ក្រីក្រ ​គ្មាន​ប្រាក់​ទិញ​សៀវភៅ ​និង​គ្មាន​ពេល​សម្រាប់​អាន។ ​ហេតុផល​នេះ​មិន​ខុស​ទេ ​ប៉ុន្តែ​ វា​ក៏​មិន​គ្រប់គ្រាន់​សម្រាប់​ធ្វើ​ជា​អំណះ​អំណាង​នេះ​ដែរ។ ​ជីវភាព​ក្រីក្រ​ជារឿង​មួយ ​ប៉ុន្តែ ​ការ​ខ្វះ​ទម្លាប់​អាន​ជា​រឿង​មួយ​ទៀត។ ​នៅ​ពេល​ដែល​ពលរដ្ឋ​មិន​ឲ្យ​តម្លៃ​សៀវភៅ ​និង​មិន​នាំ​គ្នា​ស្វែង​យល់​ព័ត៌មាន ​តើ​គេ​អាច​អភិវឌ្ឍន៍​ប្រទេស​មួយ​ឲ្យ​ជឿនលឿន​បាន​យ៉ាង​ដូចម្តេច?</p>
      <p>ក្នុងន័យនេះ ​វប្បធម៌​អាន​សៀវភៅ​គួរ​ត្រូវ​បាន​បណ្តុះ​ជា​ចាំបាច់​មិន​អាច​ខ្វះ​បាន​នៅ​ក្នុង​សង្គម​កម្ពុជា។ ​មាន​មធ្យោបាយ​ច្រើន​យ៉ាង​ដើម្បី​បណ្តុះ​ទម្លាប់​នៃ​ការ​អាន​និង​ការ​ឲ្យ​តម្លៃ​ទៅ​លើ​សៀវភៅ។ ​ចំណុច​ចាប់ផ្តើម​ជា​បឋម​គឺ ​សង្គម​ទាំង​មូល​ត្រូវ​ឲ្យ​តម្លៃ​ទៅ​លើ​អ្នក​ចេះ​ដឹង។ ​នៅ​ពេល​ដែល​អ្នក​រៀន​សូត្រ​ទទួល​បាន​ការ​គោរព​និង​ការ​ទទួល​ស្គាល់​ពីសង្គម​ស័ក្តិសម​នឹង​ការ​ខិតខំ​របស់​ពួកគេ​ ពេល​នោះ ​មនុស្ស​នឹង​ចាប់ផ្តើម​ឲ្យ​តម្លៃ​លើ​ការ​រៀនសូត្រ ​ក៏​ដូច​ជា​លើ​សៀវភៅ​ដែល​ជា​យាន​នាំ​ពួកគេ​ទៅ​រក​ភាព​ជោគជ័យ​ក្នុង​ជីវិត។</p>
      <p>បន្ទាប់​មក​ទៀត ​ឪពុក​ម្តាយ​ដែល​ជា​អ្នក​ដឹកនាំ​គ្រួសសារ​គួរ​តែ​បណ្តុះ​ទម្លាប់​ស្រឡាញ់​សៀវភៅ​ដល់​កូន​ចៅ​ដោយ​ឧស្សាហ៍​នាំ​ពួកគេ​ទៅ​បណ្តាល័យ​ដើម្បី​អាន​សៀវភៅ ​ឬ​ទៅ​បណ្ណាគារ​ដើម្បី​ទិញ​សៀវភៅ​ជាជាង​នាំ​ទៅ​ទិញ​វត្ថុ​ផ្សេងៗ​ដែល​មិន​បម្រើ​ឲ្យ​ការ​សិក្សា។ ​ឪពុក​ម្តាយ ​ឬ​សាច់​ញាតិ​គួរ​បង្កើត​ទម្លាប់​ផ្តល់​អំណោយ​ជា​សៀវភៅ​ឲ្យ​កុមារ​នៅ​ពេល​ពួកគេ​រៀន​ពូកែ​ឬ​នៅ​ក្នុង​ឱកាស​ណាមួយ​ផ្សេងៗ​ទៀត​ដែល​គេ​ត្រូវ​ផ្តល់​រង្វាន់​លើក​ទឹកចិត្ត​។ ​ក្រៅពី​នោះ ​ឪពុក​ម្តាយ​ក៏​គួរ​ធ្វើ​គំរូ​ដល់​កូន​ចៅ​តាម​រយៈ​ការ​អាន​សៀវភៅ​ផងដែរ។ ​ប្រសិន​បើ​ឪពុក​ម្តាយ​មិន​ដែល​កាន់​សៀវភៅ​សោះ ​តើ​ឲ្យ​កូន​ចេះ​ស្រឡាញ់​សៀវភៅ​យ៉ាង​ដូចម្តេច​នឹង​កើត?<p/>
      <p>ម្យ៉ាងទៀត សាលារៀនគួរជំរុញវប្បធម៌អានសៀវភៅដល់កុមារ​ជា​ចាំ​បាច់​តាម​រយៈ​ការ​លើក​ទឹក​ចិត្តដល់សិស្សដែលអានសៀវភៅច្រើន។ មានវិធីច្រើនយ៉ាងដែលគេអាចធ្វើបានដូចជា​ការបញ្ចូលមុខវិជ្ជាអានសៀវភៅទៅក្នុងតារាងផ្តល់ពិន្ទុ ឬការ​បង្កើត​ឲ្យ​មាន​ការ​ប្រណាំង​ប្រជែង​គ្នា​អានសៀវភៅនៅក្នុងថ្នាក់រៀនជាដើម។ វិធីទាំងនេះចាំបាច់ណាស់​ដើម្បីបណ្តុះ​វប្បធម៌​អានសៀវភៅដល់កូនខ្មែរតាំងពីតូចៗឲ្យហើយ។</p>
      <p>សរុបមកវិញ ​គ្រួសារ​ខ្មែរ​ ​គួរតែ​មាន​គំរោង​ចំណាយ​សម្រាប់​ទិញ​សៀវភៅ​សម្រាប់​ខ្លួន​ឯង​ឬ​សម្រាប់​កូនៗ​ជា​ចាំបាច់​ទៅ​តាម​លទ្ធភាព​របស់​ខ្លួន។ ​នៅ​បណ្តា​ប្រទេស​ជឿនលឿន​ក្នុង​លោក ​គេ​ផ្តល់​អំណោយ​សៀវភៅ​ឬ​ប្រដាប់​ប្រដា​សិក្សា​ដល់​កុមារ​ដោយ​ចាត់​ទុក​ជា​អំណោយ​ដ៏​មាន​តម្លៃ ​ប៉ុន្តែ ​នៅ​កម្ពុជា​ មនុស្ស​ជា​ច្រើន​គិត​ថា ការ​ទិញ​សៀវភៅ​ជា​កាដូ​(អំណោយ)​សម្រាប់​កុមារ​ឬ​មិត្តភក្តិ​ហាក់​ដូច​ជា​រឿង​គួរ​ឲ្យ​អៀន​ខ្លួន​ទៅ​វិញ។ ​ផ្នត់​គំនិត​បែប​នេះ​គួរ​តែ​ត្រូវ​បាន​កែប្រែ​ជា​ចាំ​បាច់។</p>



    `
  }
];

// ── Open Article Detail ───────────────────────────────────
function openArticle(id) {
  const article = ARTICLES.find(a => a.id === id);
  if (!article) return;

  document.getElementById('article-content').innerHTML = `
    <div class="bg-white border border-[#e8e0d5] rounded-2xl overflow-hidden shadow-sm">

      <!-- Body -->
      <div class="p-8 md:p-10">

        <!-- Category + Meta -->
        <span class="khmer text-xs font-medium px-3 py-1.5 rounded-full inline-block mb-5"
          style="background:${article.categoryColor}22;color:${article.categoryColor};">${article.category}</span>

        <h1 class="khmer text-3xl md:text-4xl font-bold text-[#1a1410] leading-snug mb-5">${article.title}</h1>

        <div class="flex flex-wrap items-center gap-3 text-xs text-[#8b7355] pb-6 mb-6 border-b border-[#e8e0d5]">
          <span class="flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
            ${article.author}
          </span>
          <span class="text-[#d9cdb8]">·</span>
          <span class="flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            ${article.date}
          </span>
          <span class="text-[#d9cdb8]">·</span>
          <span class="flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            ${article.readTime}
          </span>
        </div>
        
      <!-- Cover Image -->
      <div style="height:400px;overflow:hidden;">
        <img src="${article.img}" alt="${article.title}" class="w-full h-full object-cover">
      </div>
        <!-- Article Body -->
        <div class="khmer article-body ">
          ${article.content}
        </div>

        <!-- Share -->
        <div class="mt-10 pt-6 border-t border-[#e8e0d5] flex items-center gap-3">
          <span class="khmer text-sm text-[#8b7355] font-medium">ចែករំលែក:</span>
          <a href="https://www.facebook.com" target="_blank"
             class="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm hover:opacity-80 transition-opacity"
             style="background:#1877F2;">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.title)}" target="_blank"
             class="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm hover:opacity-80 transition-opacity"
             style="background:#26A5E4;">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
          </a>
        </div>

      </div>
    </div>
  `;

  showSection('article-detail');
}

// ── Update showSection to include article-detail ──────────
// Replace your existing showSection function with this:
function showSection(name) {
  ['home', 'catalog', 'mybooks', 'articles', 'ourteam', 'contect', 'article-detail'].forEach(s => {
    const el = document.getElementById(`section-${s}`);
    if (el) el.classList.toggle('hidden', s !== name);
  });
  if (name === 'mybooks') renderShelf();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function handleSubmit() {
  var fname = document.getElementById('fname').value.trim();
  var lname = document.getElementById('lname').value.trim();
  var email = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();
  var agree = document.getElementById('agree').checked;

  if (!fname || !email || !message || !agree) {
    var inputs = [
      {el: document.getElementById('fname'), val: fname},
      {el: document.getElementById('email'), val: email},
      {el: document.getElementById('message'), val: message}
    ];
    inputs.forEach(function(i) {
      if (!i.val) {
        i.el.style.borderColor = '#E24B4A';
        i.el.style.boxShadow = '0 0 0 3px rgba(226,75,74,0.15)';
        setTimeout(function() {
          i.el.style.borderColor = '';
          i.el.style.boxShadow = '';
        }, 2000);
      }
    });
    return;
  }

  document.getElementById('fname').value = '';
  document.getElementById('lname').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('message').value = '';
  document.getElementById('subject').selectedIndex = 0;
  document.getElementById('agree').checked = false;

  var toast = document.getElementById('success-toast');
  toast.style.display = 'block';
  setTimeout(function() { toast.style.display = 'none'; }, 5000);
}
// ── Navbar active state ───────────────────────────────────
function setActive(clickedEl) {
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(el => {
    el.classList.remove('active-nav');
  });
  // Match both desktop + mobile links by index
  const allDesktop = document.querySelectorAll('.nav-link');
  const allMobile  = document.querySelectorAll('.mobile-nav-link');
  const desktopArr = [...allDesktop];
  const mobileArr  = [...allMobile];
  const idx = desktopArr.indexOf(clickedEl) !== -1
    ? desktopArr.indexOf(clickedEl)
    : mobileArr.indexOf(clickedEl);
  if (desktopArr[idx]) desktopArr[idx].classList.add('active-nav');
  if (mobileArr[idx])  mobileArr[idx].classList.add('active-nav');
}

// ── Mobile menu toggle ────────────────────────────────────
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn  = document.getElementById('menu-btn');
  menu.classList.toggle('open');
  btn.classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('menu-btn').classList.remove('open');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobile-menu');
  const btn  = document.getElementById('menu-btn');
  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    closeMenu();
  }
});