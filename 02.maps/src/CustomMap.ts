
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
}

export class CustomMap {
    private googlemap: google.maps.Map;

    constructor(divId: string) {
        this.googlemap = new google.maps.Map(document.getElementById(divId), {
            center: {
                lat: 1,
                lng: 1,
            },
            zoom: 1
        })
    }

    addMarker(mappable: Mappable) {
        const marker = new google.maps.Marker({
            map: this.googlemap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        marker.addListener('click', (): void => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });
            infoWindow.open(this.googlemap, marker);
        });
    }
}