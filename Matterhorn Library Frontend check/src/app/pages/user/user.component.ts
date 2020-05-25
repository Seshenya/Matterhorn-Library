
import { Component, OnInit } from "@angular/core";
import { ContactService } from '../../contact.service';
import { FormBuilder } from '@angular/forms';
import { Contact } from '../../contact';

@Component({
  selector: "app-user",
  templateUrl: "user.component.html",

})
export class UserComponent implements OnInit {
  newForm = {};
  addClicked = false;
  bookValidity: boolean = false;
  authorValidity: boolean = false;

  constructor(private contactService: ContactService) { }

  newEntry() {
    console.log('new book123', this.newForm);
    this.contactService.addContacts(this.newForm).subscribe(data => {
      console.log('new book', this.newForm);
      this.addClicked = true;
      this.checkDifference();

    });
  }
  ngOnInit() { }

  refresh(): void {
    window.location.reload();
  }

  checkDifference() {

    if (this.newForm.bookName === undefined || this.newForm.bookName === '') {
      this.bookValidity = true;
    }
    else if (this.newForm.authorName === undefined || this.newForm.authorName === '') {
      this.authorValidity = true;
    }
    else {
      this.bookValidity = false;
      this.authorValidity = false;
    }
  }
}

