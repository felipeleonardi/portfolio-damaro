import { Component, OnInit } from '@angular/core';
import { Contact } from '../../interfaces/contact.interface';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact: Contact = {
    name: '',
    subject: '',
    email: '',
    message: '',
  };

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
  }

  onSubmit() {
    this.contactService.submitContact(this.contact)
      .subscribe(res => {
        console.log('res', res);
      })
  }

}
