import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact.interface';

@Injectable()
export class ContactService {

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  submitContact(contact: Contact) {
    return this.http.post(
      'https://formspree.io/f/xdoyqjrr',
      contact,
      { 'headers': this.headers }
    );
  }
}
