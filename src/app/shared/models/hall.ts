
/**
 * Hall
 */
export class Hall {
    constructor() { }
    $key: string;
    name: string;
    address: Address = new Address();
    contacts: Contact = new Contact();
    capecity: number;
    photo_album: string[];
    thumbnail: string;
    video: string;
    owner: string;
    reservation_instruction: string;
    additional_info: string; 
    
}

export class Address {
    constructor() { }
    city: string;
    district: string;
    street: string;
}

export class Contact {
    constructor() { }
    name: string;
    mobiles: string[];
    emails: string[];
}