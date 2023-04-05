import mongoose, {Schema} from "mongoose";

interface IGeo {
    type: {
        type: string,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number, Number],
        required: true
    }
}

interface IAddress {
    street1: string,
    city: string,
    state: string,
    zipcode: string
}

interface ILocation {
    address: IAddress
    geo: IGeo
}

interface ITheater {
    theaterId: number,
    location: ILocation,
}

const TheaterSchema: Schema = new Schema({});

const TheaterModel = mongoose.model<ITheater>("Theater", TheaterSchema);

export default TheaterModel