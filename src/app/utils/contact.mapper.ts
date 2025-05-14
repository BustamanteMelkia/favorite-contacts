import { CallEntry } from '../models/call-entry.model';
import { Contact } from '../models/contact.model';

export const parseCallEntriesToContacts = (
  callEntries: CallEntry[]
): Contact[] => {
  const contactsMap = new Map<number, Contact>();

  callEntries.forEach((callEntry) => {
    const { contactId } = callEntry;
    
    if (!contactsMap.has(contactId)) {
      contactsMap.set(
        contactId,
        new Contact(callEntry.contactId, callEntry.firstName, callEntry.lastName, [
          callEntry.calledAt,
        ])
      );
    } else {
      const contact = contactsMap.get(contactId);
      if (contact) {
        contact.addCallEntry(callEntry.calledAt);
      }
    }
  });
  return Array.from(contactsMap.values());
};
