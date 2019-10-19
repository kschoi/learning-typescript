import Faker from 'faker';

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = Faker.name.firstName() + Faker.name.lastName();
        this.location = {
            lat: parseFloat(Faker.address.latitude()),
            lng: parseFloat(Faker.address.longitude()),
        }
    }

    markerContent(): string {
        return `
            <div>
                <h1>${this.name}</h1>
            </div>
        `;
    }
}