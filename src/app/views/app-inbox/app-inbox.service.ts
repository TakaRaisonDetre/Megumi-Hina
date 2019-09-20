import { Injectable } from '@angular/core';
import { InboxDB } from '../../shared/inmemory-db/inbox';
@Injectable()
export class AppInboxService {
  public messages: any[];
  constructor() {
    let inboxDB = new InboxDB();
    this.messages = inboxDB.messages;
  }
}
