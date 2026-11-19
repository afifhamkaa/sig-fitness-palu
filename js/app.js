const API_URL = '/api/lokasi';

// Data cadangan 30 titik koordinat Kota Palu lengkap dengan alamat, jam buka & fasilitas
const DEFAULT_LOCATIONS = [
  { id: 1, nama_tempat: "Mustika GYM", kategori: "Gym", latitude: -0.892747, longitude: 119.844328, alamat: "Kec. Palu Barat, Kota Palu", jam_buka: "06.00 - 22.00 WITA", fasilitas: "Alat beban lengkap, area kardio, loker" },
  { id: 2, nama_tempat: "Elite Fitness", kategori: "Gym", latitude: -0.899319, longitude: 119.845653, alamat: "Kec. Palu Barat, Kota Palu", jam_buka: "06.00 - 22.00 WITA", fasilitas: "Fitness center, personal trainer, ruang ganti" },
  { id: 3, nama_tempat: "U-Fit GYM", kategori: "Gym", latitude: -0.901053, longitude: 119.850186, alamat: "Kec. Palu Barat, Kota Palu", jam_buka: "06.00 - 22.00 WITA", fasilitas: "Gym & latihan kekuatan beban" },
  { id: 4, nama_tempat: "Magenta GYM Palu", kategori: "Gym", latitude: -0.894978, longitude: 119.862481, alamat: "Kec. Palu Timur, Kota Palu", jam_buka: "06.00 - 22.00 WITA", fasilitas: "Alat fitness modern, area kardio" },
  { id: 5, nama_tempat: "Milenium GYM", kategori: "Gym", latitude: -0.908956, longitude: 119.873019, alamat: "Kec. Palu Selatan, Kota Palu", jam_buka: "06.00 - 22.00 WITA", fasilitas: "Binaraga, angkat beban & kebugaran" },
  { id: 6, nama_tempat: "The Dragon Studio & GYM", kategori: "Gym", latitude: -0.906342, longitude: 119.880389, alamat: "Kec. Palu Timur, Kota Palu", jam_buka: "06.00 - 22.00 WITA", fasilitas: "Gym & studio kelas olahraga grup" },
  { id: 7, nama_tempat: "Q-GYM Palu", kategori: "Gym", latitude: -0.907342, longitude: 119.890547, alamat: "Kec. Palu Timur, Kota Palu", jam_buka: "06.00 - 22.00 WITA", fasilitas: "Fitness, dumbbell lengkap & angkat beban" },
  { id: 8, nama_tempat: "Thor GYM Palu", kategori: "Gym", latitude: -0.848586, longitude: 119.890650, alamat: "Kec. Palu Utara, Kota Palu", jam_buka: "06.00 - 22.00 WITA", fasilitas: "Pusat kebugaran & gym area Palu Utara" },
  { id: 9, nama_tempat: "Family Training Center", kategori: "Gym", latitude: -0.928117, longitude: 119.844606, alamat: "Kec. Tatanga, Kota Palu", jam_buka: "06.00 - 21.30 WITA", fasilitas: "Pusat latihan kebugaran keluarga" },
  { id: 10, nama_tempat: "Rey Fitnes", kategori: "Gym", latitude: -0.926569, longitude: 119.863944, alamat: "Kec. Palu Selatan, Kota Palu", jam_buka: "06.00 - 22.00 WITA", fasilitas: "Gym reguler, treadmill & alat beban" },
  { id: 11, nama_tempat: "Mortal Camp", kategori: "Martial Arts", latitude: -0.909456, longitude: 119.874311, alamat: "Kec. Palu Selatan, Kota Palu", jam_buka: "15.00 - 21.30 WITA", fasilitas: "Camp latihan fisik, samsak & seni bela diri" },
  { id: 12, nama_tempat: "Catur Fit Camp", kategori: "Gym", latitude: -0.902817, longitude: 119.883939, alamat: "Kec. Palu Timur, Kota Palu", jam_buka: "06.00 - 21.00 WITA", fasilitas: "Fit camp, functional & circuit training" },
  { id: 13, nama_tempat: "Fit Club GYM", kategori: "Gym", latitude: -0.931972, longitude: 119.901439, alamat: "Kec. Palu Selatan, Kota Palu", jam_buka: "06.00 - 22.00 WITA", fasilitas: "Klub kebugaran & latihan beban" },
  { id: 14, nama_tempat: "Kelapa Gading GYM Center", kategori: "Gym", latitude: -0.945317, longitude: 119.894450, alamat: "Kel. Birobuli Selatan, Kota Palu", jam_buka: "06.00 - 22.00 WITA", fasilitas: "Pusat kebugaran & gym area Palu Selatan" },
  { id: 15, nama_tempat: "Doctor Fitness", kategori: "Gym", latitude: -0.900203, longitude: 119.860939, alamat: "Kec. Palu Timur, Kota Palu", jam_buka: "06.00 - 22.00 WITA", fasilitas: "Konsultasi kebugaran, program diet & gym" },
  { id: 16, nama_tempat: "Great Smile Club", kategori: "Gym", latitude: -0.892181, longitude: 119.883608, alamat: "Kec. Mantikulore, Kota Palu", jam_buka: "06.00 - 21.00 WITA", fasilitas: "Klub kebugaran, gym & kelas senam" },
  { id: 17, nama_tempat: "Zfours Studio", kategori: "Yoga & Pilates", latitude: -0.888875, longitude: 119.847081, alamat: "Kec. Palu Barat, Kota Palu", jam_buka: "07.00 - 20.30 WITA", fasilitas: "Studio senam, zumba & kelas kebugaran" },
  { id: 18, nama_tempat: "Dinata Studio", kategori: "Yoga & Pilates", latitude: -0.895561, longitude: 119.893564, alamat: "Kec. Mantikulore, Kota Palu", jam_buka: "07.00 - 20.30 WITA", fasilitas: "Studio aerobik, yoga & kelas kebugaran" },
  { id: 19, nama_tempat: "Champion Muaythai Camp", kategori: "Martial Arts", latitude: -0.902572, longitude: 119.861814, alamat: "Kec. Palu Timur, Kota Palu", jam_buka: "15.00 - 21.30 WITA", fasilitas: "Latihan Muay Thai, kickboxing & kardio" },
  { id: 20, nama_tempat: "MOKSHA FIGHTER", kategori: "Martial Arts", latitude: -0.924750, longitude: 119.879628, alamat: "Kec. Palu Selatan, Kota Palu", jam_buka: "15.00 - 21.30 WITA", fasilitas: "Camp bela diri, MMA & matras latihan" },
  { id: 21, nama_tempat: "Nakua Fighting Club", kategori: "Martial Arts", latitude: -0.842564, longitude: 119.883308, alamat: "Kec. Palu Utara, Kota Palu", jam_buka: "15.30 - 21.30 WITA", fasilitas: "Klub bela diri, sparring & fisik" },
  { id: 22, nama_tempat: "ETC MARTIAL ARTS", kategori: "Martial Arts", latitude: -0.904072, longitude: 119.895683, alamat: "Kec. Mantikulore, Kota Palu", jam_buka: "15.00 - 21.00 WITA", fasilitas: "Pelatihan seni bela diri & kebugaran" },
  { id: 23, nama_tempat: "Rosa Pilates Studio", kategori: "Yoga & Pilates", latitude: -0.928694, longitude: 119.890061, alamat: "Kec. Palu Selatan, Kota Palu", jam_buka: "07.00 - 20.00 WITA", fasilitas: "Studio khusus Pilates & postur tubuh" },
  { id: 24, nama_tempat: "8 Yoga Studio", kategori: "Yoga & Pilates", latitude: -0.898200, longitude: 119.868186, alamat: "Kec. Palu Timur, Kota Palu", jam_buka: "07.00 - 20.00 WITA", fasilitas: "Kelas Yoga, matras & ruang relaksasi" },
  { id: 25, nama_tempat: "Aston Palu Hotel & Conference Centre", kategori: "Kolam Renang & Hotel", latitude: -0.904936, longitude: 119.874125, alamat: "Jl. Wolter Monginsidi No.60, Palu", jam_buka: "06.00 - 21.00 WITA", fasilitas: "Kolam renang outdoor & fasilitas fitness hotel" },
  { id: 26, nama_tempat: "Keykenko Yoga Studio", kategori: "Yoga & Pilates", latitude: -0.833514, longitude: 119.882481, alamat: "Kec. Palu Utara, Kota Palu", jam_buka: "07.00 - 20.00 WITA", fasilitas: "Studio Yoga & senam area Palu Utara" },
  { id: 27, nama_tempat: "Dojo MSH KKI", kategori: "Martial Arts", latitude: -0.905511, longitude: 119.888428, alamat: "Kec. Palu Timur, Kota Palu", jam_buka: "15.30 - 20.30 WITA", fasilitas: "Dojo latihan Karate KKI" },
  { id: 28, nama_tempat: "Sutan Raja Hotel & Convention Palu", kategori: "Kolam Renang & Hotel", latitude: -0.918706, longitude: 119.898464, alamat: "Jl. Abdurrahman Saleh No.45, Palu", jam_buka: "06.00 - 21.00 WITA", fasilitas: "Kolam renang luas & pusat kebugaran" },
  { id: 29, nama_tempat: "Swiss-Belhotel Silae Palu", kategori: "Kolam Renang & Hotel", latitude: -0.876700, longitude: 119.836150, alamat: "Jl. Malonda No.12, Silae, Palu", jam_buka: "06.00 - 21.00 WITA", fasilitas: "Kolam renang tepi Teluk Palu, gym & sauna" },
  { id: 30, nama_tempat: "Best Western Plus Coco Palu", kategori: "Kolam Renang & Hotel", latitude: -0.919589, longitude: 119.887172, alamat: "Jl. Basuki Rahmat No.127, Palu", jam_buka: "06.00 - 21.00 WITA", fasilitas: "Kolam renang & fitness center hotel" }
];

let allLocations = [];
let activeCategory = 'Semua';
let useBackendAPI = false;

// Variabel GPS & Routing
let userCoords = null;
let userMarker = null;
let routingControl = null;

// 1. Inisialisasi Peta Kota Palu
const map = L.map('map').setView([-0.9000, 119.8750], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const markersLayer = L.layerGroup().addTo(map);

// Warna Pin & Foto Cadangan Berdasarkan Kategori
function getCategoryColor(kategori) {
  switch (kategori) {
    case 'Kolam Renang & Hotel': return '#0284c7';
    case 'Martial Arts': return '#ef4444';
    case 'Yoga & Pilates': return '#8b5cf6';
    default: return '#10b981';
  }
}

function getFallbackImage(kategori) {
  switch (kategori) {
    case 'Kolam Renang & Hotel':
      return 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80';
    case 'Martial Arts':
      return 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80';
    case 'Yoga & Pilates':
      return 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80';
    default:
      return 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80';
  }
}

function createCustomIcon(kategori) {
  const color = getCategoryColor(kategori);
  return L.divIcon({
    className: 'custom-div-icon',
    html: `<div class="custom-pin" style="background-color: ${color};"></div>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9]
  });
}

// 2. Ambil Data dari Backend API
async function fetchLocations() {
  const statusEl = document.getElementById('apiStatus');
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Backend offline');
    allLocations = await response.json();
    useBackendAPI = true;
    statusEl.innerText = 'Backend API Aktif';
    statusEl.style.color = '#059669';
  } catch (err) {
    allLocations = [...DEFAULT_LOCATIONS];
    useBackendAPI = false;
    statusEl.innerText = 'Mode Data Cadangan';
    statusEl.style.color = '#d97706';
  }
  filterData(true);
}

// 3. Filter Pencarian & Kategori
function setCategory(category, btnElement) {
  activeCategory = category;
  document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
  btnElement.classList.add('active');
  filterData(true);
}

function filterData(autoZoom = false) {
  const keyword = document.getElementById('searchInput').value.toLowerCase();
  
  const filtered = allLocations.filter(loc => {
    const matchCat = activeCategory === 'Semua' || loc.kategori === activeCategory;
    const matchText = loc.nama_tempat.toLowerCase().includes(keyword) || 
                      (loc.fasilitas && loc.fasilitas.toLowerCase().includes(keyword)) ||
                      (loc.alamat && loc.alamat.toLowerCase().includes(keyword));
    return matchCat && matchText;
  });

  renderMarkersAndList(filtered, autoZoom);
}

// 4. Render Semua Titik ke Peta & Sidebar
function renderMarkersAndList(data, autoZoom) {
  const listContainer = document.getElementById('locationList');
  listContainer.innerHTML = '';
  markersLayer.clearLayers();

  document.getElementById('resultCount').innerText = `Menampilkan ${data.length} lokasi`;

  const bounds = [];

  data.forEach(loc => {
    const latLng = [loc.latitude, loc.longitude];
    bounds.push(latLng);

    const marker = L.marker(latLng, { icon: createCustomIcon(loc.kategori) })
      .addTo(markersLayer)
      .bindTooltip(`<b>${loc.nama_tempat}</b><br>${loc.kategori}`);

    marker.on('click', () => {
      map.flyTo(latLng, 16);
      showDetail(loc);
    });

    const item = document.createElement('div');
    item.className = 'location-item';
    item.innerHTML = `
      <div class="item-header">
        <span class="item-title">${loc.nama_tempat}</span>
        <span class="item-cat">${loc.kategori}</span>
      </div>
      <p class="item-desc">${loc.alamat || 'Kota Palu'} • ${loc.fasilitas || '-'}</p>
    `;
    item.onclick = () => {
      map.flyTo(latLng, 16);
      showDetail(loc);
    };
    listContainer.appendChild(item);
  });

  if (autoZoom && bounds.length > 0) {
    map.fitBounds(bounds, { padding: [40, 40] });
  }
}

function fitAllMarkers() {
  filterData(true);
}

// 5. Detail Lokasi dengan Foto & Info Lengkap
function showDetail(loc) {
  document.getElementById('detailCard').classList.remove('hidden');
  
  const imgEl = document.getElementById('detailImage');
  imgEl.src = loc.gambar_url || getFallbackImage(loc.kategori);
  imgEl.onerror = () => { imgEl.src = getFallbackImage(loc.kategori); };

  document.getElementById('detailCategory').innerText = loc.kategori;
  document.getElementById('detailName').innerText = loc.nama_tempat;
  document.getElementById('detailAddress').innerText = loc.alamat || 'Kota Palu, Sulawesi Tengah';
  document.getElementById('detailHours').innerText = loc.jam_buka || '06.00 - 22.00 WITA';
  document.getElementById('detailFacilities').innerText = loc.fasilitas || 'Fasilitas kebugaran standar.';
  document.getElementById('detailCoords').innerText = `Koordinat: ${loc.latitude}, ${loc.longitude}`;
  document.getElementById('gmapsLink').href = `https://www.google.com/maps/dir/?api=1&destination=${loc.latitude},${loc.longitude}`;

  document.getElementById('routeHereBtn').onclick = () => drawRouteTo(loc);
  document.getElementById('editBtn').onclick = () => openModal(loc);
  document.getElementById('deleteBtn').onclick = () => deleteLocation(loc.id);
}

function closeDetail() {
  document.getElementById('detailCard').classList.add('hidden');
}

// 6. Deteksi Lokasi Pengguna (GPS) & Navigasi Rute
function detectUserLocation(callback = null) {
  const gpsStatus = document.getElementById('gpsStatus');
  gpsStatus.innerText = 'GPS: Mendeteksi posisi...';

  if (!navigator.geolocation) {
    alert('Browser Anda tidak mendukung fitur GPS.');
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      setUserMarker(position.coords.latitude, position.coords.longitude, 'Posisi Anda Saat Ini');
      gpsStatus.innerText = 'GPS: Aktif (Pin biru bisa digeser)';
      gpsStatus.style.color = '#2563eb';
      if (callback) callback();
    },
    () => {
      setUserMarker(-0.9000, 119.8750, 'Titik Awal (Pusat Kota Palu)');
      gpsStatus.innerText = 'GPS: Default Palu (Pin biru bisa digeser)';
      gpsStatus.style.color = '#d97706';
      alert('Izin GPS tidak aktif, menggunakan titik awal Pusat Kota Palu. Seret pin biru di peta untuk mengubah titik awal.');
      if (callback) callback();
    },
    { enableHighAccuracy: true }
  );
}

function setUserMarker(lat, lng, label) {
  userCoords = [lat, lng];
  if (userMarker) {
    userMarker.setLatLng(userCoords);
  } else {
    const userIcon = L.divIcon({
      className: 'user-div-icon',
      html: '<div class="user-pin"></div>',
      iconSize: [18, 18],
      iconAnchor: [9, 9]
    });
    userMarker = L.marker(userCoords, { icon: userIcon, draggable: true })
      .addTo(map)
      .bindTooltip(label);

    userMarker.on('dragend', (e) => {
      const pos = e.target.getLatLng();
      userCoords = [pos.lat, pos.lng];
    });
  }
  map.flyTo(userCoords, 14);
}

function drawRouteTo(destinationLoc) {
  if (!userCoords) {
    detectUserLocation(() => drawRouteTo(destinationLoc));
    return;
  }

  if (routingControl) {
    map.removeControl(routingControl);
  }

  routingControl = L.Routing.control({
    waypoints: [
      L.latLng(userCoords[0], userCoords[1]),
      L.latLng(destinationLoc.latitude, destinationLoc.longitude)
    ],
    routeWhileDragging: false,
    addWaypoints: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    showAlternatives: false,
    lineOptions: {
      styles: [{ color: '#2563eb', opacity: 0.85, weight: 6 }]
    },
    createMarker: function() { return null; }
  }).addTo(map);

  routingControl.on('routesfound', function(e) {
    const summary = e.routes[0].summary;
    const distanceKm = (summary.totalDistance / 1000).toFixed(2);
    const timeMinutes = Math.round(summary.totalTime / 60);

    document.getElementById('routeInfoBox').classList.remove('hidden');
    document.getElementById('routeTargetName').innerText = `Tujuan: ${destinationLoc.nama_tempat}`;
    document.getElementById('routeDistance').innerText = `${distanceKm} km`;
    document.getElementById('routeDuration').innerText = `${timeMinutes} menit`;
  });
}

function clearRoute() {
  if (routingControl) {
    map.removeControl(routingControl);
    routingControl = null;
  }
  document.getElementById('routeInfoBox').classList.add('hidden');
}

// 7. CRUD (Tambah, Edit, Hapus Data)
function openModal(loc = null) {
  document.getElementById('crudModal').classList.remove('hidden');
  if (loc) {
    document.getElementById('modalTitle').innerText = 'Edit Data Lokasi';
    document.getElementById('locId').value = loc.id;
    document.getElementById('locName').value = loc.nama_tempat;
    document.getElementById('locCategory').value = loc.kategori;
    document.getElementById('locHours').value = loc.jam_buka || '';
    document.getElementById('locAddress').value = loc.alamat || '';
    document.getElementById('locImage').value = loc.gambar_url || '';
    document.getElementById('locLat').value = loc.latitude;
    document.getElementById('locLng').value = loc.longitude;
    document.getElementById('locFacilities').value = loc.fasilitas || '';
  } else {
    document.getElementById('modalTitle').innerText = 'Tambah Lokasi Baru';
    document.getElementById('locationForm').reset();
    document.getElementById('locId').value = '';
  }
}

function closeModal() {
  document.getElementById('crudModal').classList.add('hidden');
}

async function saveLocation(e) {
  e.preventDefault();
  const id = document.getElementById('locId').value;
  const kategori = document.getElementById('locCategory').value;
  const payload = {
    nama_tempat: document.getElementById('locName').value,
    kategori: kategori,
    jam_buka: document.getElementById('locHours').value || '06.00 - 22.00 WITA',
    alamat: document.getElementById('locAddress').value || 'Kota Palu, Sulawesi Tengah',
    gambar_url: document.getElementById('locImage').value || getFallbackImage(kategori),
    latitude: parseFloat(document.getElementById('locLat').value),
    longitude: parseFloat(document.getElementById('locLng').value),
    fasilitas: document.getElementById('locFacilities').value
  };

  if (useBackendAPI) {
    const method = id ? 'PUT' : 'POST';
    const url = id ? `${API_URL}/${id}` : API_URL;
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    await fetchLocations();
  } else {
    if (id) {
      const idx = allLocations.findIndex(item => item.id == id);
      allLocations[idx] = { id: Number(id), ...payload };
    } else {
      const newId = allLocations.length ? Math.max(...allLocations.map(i => i.id)) + 1 : 1;
      allLocations.push({ id: newId, ...payload });
    }
    filterData(false);
  }

  closeModal();
  closeDetail();
}

async function deleteLocation(id) {
  if (!confirm('Yakin ingin menghapus lokasi ini?')) return;

  if (useBackendAPI) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    await fetchLocations();
  } else {
    allLocations = allLocations.filter(item => item.id !== id);
    filterData(false);
  }
  closeDetail();
}

map.on('click', (e) => {
  if (!document.getElementById('crudModal').classList.contains('hidden')) {
    document.getElementById('locLat').value = e.latlng.lat.toFixed(6);
    document.getElementById('locLng').value = e.latlng.lng.toFixed(6);
  }
});

fetchLocations();

window.addEventListener('resize', () => {
  map.invalidateSize();
});

const dataPoligonKecamatan = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        nama: "Zona Kec. Palu Timur & Mantikulore",
        keterangan: "Kawasan pusat komersial, kampus, dan konsentrasi pusat kebugaran."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [119.8740, -0.8800],
          [119.9080, -0.8800],
          [119.9080, -0.9060],
          [119.8740, -0.9060],
          [119.8740, -0.8800]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        nama: "Zona Kec. Palu Selatan",
        keterangan: "Kawasan permukiman padat, perkantoran, dan fasilitas olahraga."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [119.8680, -0.9060],
          [119.9080, -0.9060],
          [119.9080, -0.9350],
          [119.8680, -0.9350],
          [119.8680, -0.9060]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        nama: "Zona Kec. Palu Barat & Ulujadi",
        keterangan: "Kawasan pesisir teluk, pusat perdagangan, dan akses rekreasi."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [119.8350, -0.8850],
          [119.8740, -0.8850],
          [119.8740, -0.9220],
          [119.8350, -0.9220],
          [119.8350, -0.8850]
        ]]
      }
    }
  ]
};

// 2. Data GeoJSON Garis / Polyline (Koridor Jalan Protokol Utama Kota Palu)
const dataGarisJalan = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        nama: "Koridor Utama Jl. Moh. Yamin - Jl. Sudirman - Jl. Sam Ratulangi",
        jenis: "Jalan Arteri Utama"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [119.8965, -0.9160],
          [119.8885, -0.9075],
          [119.8810, -0.9005],
          [119.8765, -0.8935],
          [119.8750, -0.8860]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        nama: "Koridor Penghubung Barat - Timur (Jembatan Palu IV / Jl. Rajamoili - Jl. Cut Mutia)",
        jenis: "Jalan Kolektor Utama"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [119.8480, -0.8960],
          [119.8615, -0.8925],
          [119.8750, -0.8860],
          [119.8860, -0.8855],
          [119.8980, -0.8870]
        ]
      }
    }
  ]
};

// 3. Render Layer Poligon ke Peta
const layerPoligon = L.geoJSON(dataPoligonKecamatan, {
  style: function (feature) {
    return {
      color: "#0d9488",
      weight: 2,
      opacity: 0.8,
      fillColor: "#14b8a6",
      fillOpacity: 0.12
    };
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(
      `<strong>${feature.properties.nama}</strong><br><small>${feature.properties.keterangan}</small>`
    );
  }
}).addTo(map);

// 4. Render Layer Garis (Polyline) ke Peta
const layerGaris = L.geoJSON(dataGarisJalan, {
  style: function (feature) {
    return {
      color: "#f97316",
      weight: 4,
      opacity: 0.9,
      dashArray: "8, 6"
    };
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(
      `<strong>${feature.properties.nama}</strong><br><small>Tipe: ${feature.properties.jenis}</small>`
    );
  }
}).addTo(map);

// Pastikan pin marker titik selalu berada di lapisan paling atas agar mudah diklik
layerPoligon.bringToBack();

// 5. Tambahkan Kontrol Layer di Pojok Kanan Atas / Bawah Peta
const overlayLayers = {
  "Zona Kecamatan (Poligon)": layerPoligon,
  "Koridor Jalan Utama (Garis)": layerGaris
};
L.control.layers(null, overlayLayers, { position: "bottomright", collapsed: false }).addTo(map);