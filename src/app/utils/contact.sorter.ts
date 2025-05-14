import { Contact } from '../models/contact.model';

export const sortContacts = (contacts: Contact[]): Contact[] => {
  return contacts.sort((a, b) => {
    if (a.callEntries.length !== b.callEntries.length) {
      // sort by number of calls in descending order
      return b.callEntries.length - a.callEntries.length;
    }
    return (b.lastCall || 0) - (a.lastCall || 0); // sort by last call in descending order
  });
};
