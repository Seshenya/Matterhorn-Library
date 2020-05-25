import { Component, OnInit } from "@angular/core";
import { ContactService } from '../../contact.service';
import { Contact } from '../../contact';

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html",
  providers: [ContactService]
})
export class TablesComponent implements OnInit {
  contactList: Contact[];

  constructor(private contactService: ContactService) { }

  GetShow() {
    this.contactService.getContacts().subscribe((data) => {
      console.log('show', data);
      this.contactList = data as Array<Contact>;
      //book name in alphabatical order 
      this.contactList.sort(function(a, b){
        return (a.book_name.toUpperCase() < b.book_name.toUpperCase()) ? -1 : (a.book_name.toUpperCase() > b.book_name.toUpperCase()) ? 1 : 0;
      });
     
    });
  }

  ngOnInit() {
    this.GetShow();
  }

  deleteContact(num) {
    console.log(num);
    this.contactService.deleteContacts(num).subscribe(data => {
      console.log('show', data);
    });

    //added the following part to refresh after deleting
    this.GetShow();
  }
}
