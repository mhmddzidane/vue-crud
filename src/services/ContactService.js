import axios from "axios";

export class ContactService {
  static serverUrl = "http://localhost:3002";

  static getAllContacts() {
    let dataUrl = `${this.serverUrl}/contacts`;
    return axios.get(dataUrl);
  }

  static searchContacts(query) {
    let dataUrl = `${this.serverUrl}/contacts?q=${query}`;
    return axios.get(dataUrl);
  }

  static getDetailContact(id) {
    let dataUrl = `${this.serverUrl}/contacts/${id}`;
    return axios.get(dataUrl);
  }

  static getAllGroup() {
    let dataUrl = `${this.serverUrl}/group`;
    return axios.get(dataUrl);
  }

  static getGroup(contact) {
    let groupId = contact.groupId;
    let dataUrl = `${this.serverUrl}/group/${groupId}`;
    return axios.get(dataUrl);
  }

  static addContact(contact) {
    let dataUrl = `${this.serverUrl}/contacts`;
    return axios.post(dataUrl, contact);
  }

  static deleteContact(id) {
    let dataUrl = `${this.serverUrl}/contacts/${id}`;
    return axios.delete(dataUrl);
  }

  static editContact(contact, id) {
    let dataUrl = `${this.serverUrl}/contacts/${id}`;
    return axios.put(dataUrl, contact);
  }
}
