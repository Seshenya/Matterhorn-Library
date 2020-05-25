import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Contact} from './contact';




@Injectable({
  providedIn: 'root'
})
export class ContactService {
  

  constructor(private http: HttpClient) { }
  

  // retrieving contacts
getContacts()
{
  return this.http.get('http://localhost:3000/api/contacts');
}
 

// add contacts
  addContacts(newContact)
  {
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/contacts',newContact);
  }
 
 
  // delete contacts
deleteContacts(id)
{
  return this.http.delete('http://localhost:3000/api/contacts/'+id);
}

// search contacts
searchBook(name)
{
  console.log('name', name);
  return this.http.post('http://localhost:3000/api/contacts/search', 	{"book_name": name});
}

// update contacts
updateBook(id,number)
{
  console.log('ID', id);
  return this.http.put('http://localhost:3000/api/contacts/'+id, {"shelf_no": number});
}

}
