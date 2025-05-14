import { Contact } from '../models/contact.model';
import { sortContacts } from './contact.sorter';

describe('Contacts Sorter', () => {
  it('should sort contacts by call count descending', () => {
    const contacts: Contact[] = [
      new Contact(1, 'Miguel', 'Torres', [1746214893, 1712064000, 1712236800]),
      new Contact(
        2,
        'John',
        'Doe',
        [1746301293, 1746128493, 1745264493, 1746992493]
      ),
    ];
    const sortedContacts = sortContacts(contacts);
    expect(sortedContacts[0].firstName).toBe('John');
    expect(sortedContacts[0].lastName).toBe('Doe');
  });

  it('should sort contacts by call count descending, then by latest call date', () => {
    const contacts: Contact[] = [
      new Contact(
        1,
        'Ana',
        'Ruiz',
        [1743536493, 1746131493, 1746992493, 1747115999]
      ),
      new Contact(
        2,
        'Laura',
        'Garcia',
        [1746301293, 1746128493, 1745264493, 1746992493]
      ),
    ];
    const sortedContacts = sortContacts(contacts);
    expect(sortedContacts[0].firstName).toBe('Ana');
    expect(sortedContacts[0].lastName).toBe('Ruiz');
  });
});
