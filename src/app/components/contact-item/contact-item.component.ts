import { Component, Input } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { CommonModule } from '@angular/common';
import { DaysSincePipe } from '../../pipes/days-since.pipe';

@Component({
  selector: 'app-contact-item',
  imports: [CommonModule, DaysSincePipe],
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.scss'
})
export class ContactItemComponent {
  @Input() contact: Contact | null = null;
}
