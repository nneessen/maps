// instructions to every other class
// on how they can be an arg to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      },
    );
  }

  addMarker(mappable: Mappable): void {
    new google.maps.marker.AdvancedMarkerElement({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
