import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, Subject, of, combineLatest } from "rxjs";
import { map, switchMap } from "rxjs/operators";

import 'rxjs/add/operator/switchMap';

export interface Chat {
  text: string;
  time: Date | string;
  contactId: User["id"];
}

export interface ChatCollection {
  id: string;
  chats: Chat[];
}

export interface UserChatInfo {
  chatId: ChatCollection["id"];
  contactId: User["id"];
  contactName: User["name"];
  unread: number;
  lastChatTime: Date | string;
}

export class User {
  id: string;
  avatar: string;
  name: string;
  status: string;
  chatInfo?: UserChatInfo[];
}

@Injectable()
export class ChatService {
  public contacts: User[];
  public chats: ChatCollection[];
  public user: User;

  onContactSelected = new BehaviorSubject<any>(null);
  onUserUpdated = new Subject<User>();

  onChatSelected = new BehaviorSubject<any>(null);
  onChatsUpdated = new Subject<any>();

  constructor(private http: HttpClient) {
    // console.log('from service');
    // this.loadChatData()
  }

  loadChatData(): Observable<any> {
    return combineLatest(
      this.getAllContacts(),
      this.getAllChats(),
      this.getCurrentUser(),
      (contacts, chats, user) => {
        this.contacts = contacts;
        this.chats = chats;
        this.user = user;
        console.log('next.willCall')
        this.onUserUpdated.next(user);
        console.log('next.called')
        console.log(
          "contacts:",
          contacts,
          "\n chats:",
          chats,
          "\n currUser:",
          user
        );
      }
    );
  }
  public getChatByContact(contactId): Observable<ChatCollection> {
    let chatInfo = this.user.chatInfo.find(chat => chat.contactId === contactId);

    if (!chatInfo) {
      return this.createChatCollection(contactId)
        .switchMap(chatColl => {
          return this.getChatByContact(contactId)
        });
    }

    return this.getAllChats()
      .switchMap(chats => {
        let chatCollection = chats.find(chat => chat.id === chatInfo.chatId);
        let contact = this.contacts.find(
          contact => contact.id === contactId
        );

        this.onChatSelected.next({
          chatCollection: chatCollection,
          contact: contact
        });

        return of(chatCollection);
      });
  }

  createChatCollection(contactId) {

    let contact = this.contacts.find(contact => contact.id === contactId);
    const chatId = (Math.random() * 1000000000).toString();

    const chatCollection: ChatCollection = {
      id: chatId,
      chats: []
    };

    let chatInfo = {
      chatId: chatId,
      lastChatTime: new Date(),
      contactId: contact.id,
      contactName: contact.name,
      unread: null
    };

    return this.http
      .post('api/chat-collections', {...chatCollection})
      .switchMap(updatedChatCollection => {

        this.user.chatInfo.push(chatInfo);
        return this.updateUser(this.user)
          .pipe(switchMap((res) => {

            return this.getCurrentUser()
              .pipe(map(user => {
                this.user = user;
                // console.log(user)
                this.onUserUpdated.next(user)
              }))

            // return updatedChatCollection
          }));

      });
  }

  getAllContacts(): Observable<User[]> {
    return this.http.get<User[]>('api/contacts');
  }
  getAllChats(): Observable<ChatCollection[]> {
    return this.http.get<ChatCollection[]>('api/chat-collections');
  }
  getCurrentUser(): Observable<User> {
    return this.http.get<User>('api/chat-user')
      .pipe(map(res => res[0]));
  }
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`api/chat-user/${user.id}`, {...user})
  }
  updateChats(chatId: string, chats:Chat[]): Observable<ChatCollection> {
    const chatCollection: ChatCollection = {
      id: chatId,
      chats: chats
    }
    return this.http.put<ChatCollection>('api/chat-collections', chatCollection)
  }

  autoReply(chat) {
    setTimeout(() => {
      this.onChatsUpdated.next(chat)
    }, 1500);
  }
  
}
