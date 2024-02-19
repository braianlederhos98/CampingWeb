
const map = L.map('mapa').setView([-38, -63], 4); // Coordenadas centrales de Argentina y nivel de zoom inicial.

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Supongamos que tienes un conjunto de coordenadas de campings.
const campingsData = [
  { lat: -34.5, lng: -58.3, name: 'Camping 1', details: 'Detalles del Camping 1' },
  { lat: -35.0, lng: -57.9, name: 'Camping 2', details: 'Detalles del Camping 2' },
  { lat: -36.0, lng: -56.9, name: 'Camping 2', details: 'Detalles del Camping 2' },
  { lat: -37.0, lng: -55.9, name: 'Camping 2', details: 'Detalles del Camping 2' }
  // ... Agrega más coordenadas según sea necesario.
];

// Agrupa los campings en una capa de marcadores agrupados.
const markers = L.markerClusterGroup();

// Añade cada camping al grupo de marcadores.
campingsData.forEach(camping => {
  const marker = L.marker([camping.lat, camping.lng]);

  // Añade eventos para abrir una ventana modal al hacer clic en el ícono del camping.
  marker.bindPopup(`<b>${camping.name}</b><br>${camping.details}`).openPopup();

  markers.addLayer(marker);
});

// Añade el grupo de marcadores al mapa.
map.addLayer(markers);