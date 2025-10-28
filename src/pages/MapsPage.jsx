import React, { useState, useEffect } from 'react'

const MapsPage = () => {
    const [mapContainer, setMapContainer] = useState(null);
    const [map, setMap] = useState(null);

    useEffect(() => {
        const loadMap = () => {
        if (window.L && mapContainer){
            initMap();
            return;
        }

        const existingCSS = document.querySelector('link[href*="leaflet"]');
        if (!existingCSS) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
            document.head.appendChild(link);
        }

        const existingJS = document.querySelector('script[src*="leaflet"]');
        if (!existingJS) {
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
            script.onload = () => {
                setTimeout(() => {
                    if (mapContainer) {
                        initMap();
                    }
                }, 300);
            };
            script.onerror = () => {
                console.error('Ошибка загрузки Leaflet');
            };
            document.head.appendChild(script);
        } else {
            setTimeout(() => {
                if (mapContainer) {
                    initMap();
                }
            }, 200);
        }
    };

    const timer = setTimeout(loadMap, 100);

    return () => {
        clearTimeout(timer);
        if (map) {
            map.remove();
        }
    };
}, [mapContainer]);

    const initMap = () => {
        const mapContainer = document.getElementById('map-container');
        if (!mapContainer){
            console.log('Элемент для карты не найден попытка через 100мс');
            setTimeout(initMap, 100);
            return;
        }
        if (window.L && mapContainer && !map) {
            try{
                const newMap = window.L.map('map-container').setView([55.7558, 37.6176], 10);
               window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                {attribution: ''}
               ).addTo(newMap);

               const moscow = window.L.marker([55.7558, 37.6176]).addTo(newMap);
               moscow.bindPopup('<b>Москва</b><br>Столица России');
               const spb = window.L.marker([59.9311, 30.3609]).addTo(newMap);
               spb.bindPopup('<b>Санкт-Петербург</b><br>Культурная столица');
               const kazan = window.L.marker([55.8304, 49.0661]).addTo(newMap);
               kazan.bindPopup('<b>Казань</b><br>Столица Чак-чака');

               setMap(newMap);
            }
            catch(error){
                console.error('Ошибка инициализации карты:', error);
            }
        }
    };

    const changeMap = (layerType) => {
        if (map) {
            map.eachLayer((layer) => {
                if (layer instanceof window.L.TileLayer){
                    map.removeLayer(layer);
                }
            });

            let tileLayer;
            switch(layerType){
                case 'satellite':
                    tileLayer = window.L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
                        {
                            attribution: ''
                        });
                        break;
                case 'terrain':
                    tileLayer = window.L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
                        {
                            attribution: ''
                        });
                        break;
                default:
                    tileLayer = window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                        {
                            attribution: ''
                        });
            }
            tileLayer.addTo(map);
        }
    };

  return (
    <div>
        <style>
            {`
                .leaflet-control-attribution {
                    display: none !important;
                }
            `}
        </style>
        <div className='row'>
            <div className='col-md-12'>
                <h2 className='text-center mb-5'>Карты Leaflet</h2>
            </div>
        </div>

        <div className='row'>
            <div className='col-md-12'>
                <div className='card'>
                    <div className='card-header d-flex justify-content-between align-items-center'>
                        <h5 className='mb-0'>Интерактивная карта</h5>
                        <div>
                            <button className='btn btn-success me-2' 
                            onClick={() => changeMap('default')}>Стандартная</button>
                            <button className='btn btn-primary me-2' 
                            onClick={() => changeMap('satellite')}>Спутник</button>
                            <button className='btn btn-danger me-2' 
                            onClick={() => changeMap('terrain')}>Рельеф</button>
                        </div>
                    </div>
                    <div className='card-body p-0'>
                        <div 
                        id='map-container' 
                        ref={setMapContainer}
                        style={{height: '500px', width: '100%'}}
                        >

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default MapsPage