import Faker from 'faker';

export class Company {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.companyName = Faker.company.companyName();
        this.catchPhrase = Faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(Faker.address.latitude()),
            lng: parseFloat(Faker.address.longitude()),
        }
    }

    markerContent(): string {
        return `
            <div>
                <h1>${this.companyName}</h1>
                <p>${this.catchPhrase}</p>
            </div>
        `;
    }
}