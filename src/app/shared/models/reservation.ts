export class Reservation {
    constructor() { }
    date_from: Date;
    date_to: Date;
    reservation_type: string; // wedding, condolence, graduation or other
    type_of_attendees: string; // male, female or mix
    state: string; // draft, confirm, cancel or done
    additional_info: string;
    price: number;
    installment: number;
}