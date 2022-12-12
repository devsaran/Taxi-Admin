import { Geohash } from "geofire-common";

export interface Drivers {
    geohash: Geohash;
    Driver_lat: number;
    Driver_lng: number;
    Driver_id: string;
    Driver_name: string;
    Driver_car: string;
    Driver_cartype: string;
    Driver_plate: string;
    Driver_imgUrl: string;
    Driver_rating: number;
    distance: number;
    duration: number;
    seats: number;
    start: boolean;
    stop: boolean;
    intransit: boolean;
    cancel: boolean;
    Driver_num_rides: number;
    Document: string;
    Driver_email: string;
    Driver_phone:number;
    onlineState: boolean;
    Earnings: number

}
