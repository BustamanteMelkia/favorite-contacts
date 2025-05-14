export interface CallEntry {
    id: number;
    contactId: number;
    firstName: string;
    lastName: string;
    calledAt: number; // UNIX timestamp (seconds) 
}