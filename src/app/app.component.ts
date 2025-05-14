import { Component } from '@angular/core';
import { ContactService } from './services/contact.service';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Contact } from './models/contact.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ContactItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  contacts: Observable<Contact[]> = new Observable<Contact[]>();
  title = 'My favorite contacts';
  constructor(public contactService: ContactService) {
    this.contacts = this.contactService.getContacts();
  }
}
