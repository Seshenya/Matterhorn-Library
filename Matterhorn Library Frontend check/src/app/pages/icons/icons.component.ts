import { Component, OnInit } from "@angular/core";
import { ContactService } from '../../contact.service';
import { Contact } from '../../contact';
import { NotificationService } from '../../notification.service';

@Component({
  selector: "app-icons",
  templateUrl: "icons.component.html"
})
export class IconsComponent implements OnInit {
  booksFound: Contact[] = [];
  searchClicked = false;
  updateClicked = false;
  loaderStatus = true;
  constructor(private contactService: ContactService, private notif: NotificationService) {}

  ngOnInit() { }

  refresh(): void {
    this.searchClicked = false;
    this.updateClicked = false;
    window.location.reload();
 }

  search(name) {
    console.log('name of the book searched:', name);

    this.contactService.searchBook(name).subscribe(data => {
      console.log('Name of the book searched:', data);
      this.booksFound = data['result'];
      console.log(' book details:', this.booksFound);
      console.log(' book length :', this.booksFound.length);
      this.loaderStatus = false;
      this.searchClicked = true;
      
      if (this.searchClicked && this.booksFound && this.booksFound.length > 0) {
        this.notif.showSuccessNotification('Search completed!');
      }
      else if (this.searchClicked && (!this.booksFound || this.booksFound.length == 0)) {
        this.notif.showErrorNotification('Search not found!');
      }
    }
    );

  }

  update(book) {
    book.updateClicked = true;
  }

  save(book) {
    book.updateClicked = false;
    console.log('Name of the book updated:', book);
    this.contactService.updateBook(book._id, book.shelf_no).subscribe(data => {
      console.log('book shelf:', book.shelf_no);
      let newDetails = data;
      console.log('Name of the book updated:', newDetails);

    });

  }

}