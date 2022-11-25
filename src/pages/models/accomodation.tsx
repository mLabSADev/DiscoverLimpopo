export interface Accomodation {
    accomodationId: string,
    accomodationImage: string , 
    amenities: {
        gym: boolean, 
        parking: boolean, 
        pool: boolean, 
        shower: boolean, 
        tv: boolean
    }, 
    checkIn:string, 
    checkOut: string,
    description: string, 
    id: string, 
    images: [],
    location: string, 
    name: string, 
    phoneNumber: string, 
    review: number, 
    rooms: [{
    name:string, roomId: string, 
    roomPrice: string
    }],
    size: number, 
    startingPrice: string,
}