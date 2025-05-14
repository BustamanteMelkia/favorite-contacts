import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CallEntry } from '../models/call-entry.model';
import { Contact } from '../models/contact.model';
import { parseCallEntriesToContacts } from '../utils/contact.mapper';
import { sortContacts } from '../utils/contact.sorter';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<CallEntry[]>('/assets/callHistory.json').pipe(
      map((callEntries) => parseCallEntriesToContacts(callEntries)),
      map((contacts) => sortContacts(contacts))
    );
  }
}
