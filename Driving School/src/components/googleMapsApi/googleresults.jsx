import { useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import BusinessRating from '../BusinessRating'
import ReactDOMServer from 'react-dom/server';

const GoogleSearchResults = () => {
    let map;
    let placesService;

    function initMap() {
        var defaultLocation = { lat: 51.5074, lng: -0.1278 };
        var mapElement = document.getElementById('map');

        if (mapElement) {
            map = new window.google.maps.Map(mapElement, {
                center: defaultLocation,
                zoom: 12,
                role: 'application', // ARIA role
                'aria-label': 'Map showing driving schools',
            });

            placesService = new window.google.maps.places.PlacesService(map);
        }
    }

    function searchCity(term, location) {
        var geocoder = new window.google.maps.Geocoder();

        geocoder.geocode({ address: location }, function (results, status) {
            if (status === 'OK' && results && results.length > 0) {
                var cityLocation = results[0].geometry.location;
                map.setCenter(cityLocation);

                var request = {
                    location: cityLocation,
                    radius: '5000',
                    keyword: term,
                    type: ['driving_school']
                };
                placesService.nearbySearch(request, function (results, status) {
                    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                        document.getElementById('placesList').innerHTML = '';

                        results.forEach(function (place) {
                            var marker = new window.google.maps.Marker({
                                position: place.geometry.location,
                                map: map,
                                title: place.name
                            });

                            var ratingComponentString = ReactDOMServer.renderToString(
                                <BusinessRating rating={place.rating} user_ratings_total={place.user_ratings_total} />
                            );

                            var infoWindow = new window.google.maps.InfoWindow({
                                content: '<strong>' + place.name + '</strong><br>' + 
                                'Rating: ' + place.rating + ratingComponentString + 
                                'Address: ' + (place.vicinity || 'N/A'),
                                role: 'tooltip', // ARIA role
                                'aria-label': 'Information about ' + place.name, // ARIA label
                            });

                            marker.addListener('click', function () {
                                infoWindow.open(map, marker);
                            });

                            var listItem = document.createElement('li');
                            listItem.setAttribute('role', 'listitem'); // ARIA role
                            listItem.innerHTML = '<div class="business-info">' + '<strong>' + place.name + '</strong><br>' +
                                'Rating: ' + place.rating + ratingComponentString + 
                                'Address: ' + (place.vicinity || 'N/A');

                            document.getElementById('placesList').appendChild(listItem);
                        });
                    } else {
                        console.error('Nearby Search failed:', status);
                    }
                });
            } else {
                alert('City not found');
            }
        });
    }

    useEffect(() => {
        const googleMapsScript = document.createElement('script');
        googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_APIKEY}&libraries=places`;
        googleMapsScript.async = true;
        googleMapsScript.onload = initMap;
        document.head.appendChild(googleMapsScript);

        return () => {
            
        };
    }, []);

    return (
        <div className="map-container">
            <div id="map"></div>
            <SearchBar search={searchCity} />
            <div className="schools-info-list">
                <ul id="placesList"></ul>
            </div>
        </div>
    );
};

export default GoogleSearchResults;
