import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Register, Signin } from '../models/auth';
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(public apiService: ApiService, private http: HttpClient) { }

  login(data: Signin) {
    return this.apiService.post(`auth/login`, data);
  }

  newSaveUser(user: any) {
    console.log('saveUser function', user)
      if(user.jwtToken) this.newSetToken(user);
  }

  newSetToken(user: any) {
    console.log('newSetToken', user)
    let storageData = {
        clientId: user.user._id,
        jwtToken: user.jwtToken
      }
    console.log('storageData', storageData)
    sessionStorage.setItem('@RESL', this.encryptText(JSON.stringify(storageData)));
}

encryptText(text: string): string {
  console.log('encryptingText',)
  const key = 'secret-key'; // Use an environment variable or secure source for the key
  return CryptoJS.AES.encrypt(text, key).toString();
}

decryptText(cipherText: string): string {
  console.log('DECryptingText', cipherText)

  const key = 'secret-key'; // Replace with a secure key
  const bytes = CryptoJS.AES.decrypt(cipherText, key);
  return bytes.toString(CryptoJS.enc.Utf8);
}

getToken() {
  let decrytedText = this.decryptText(sessionStorage.getItem('@RESL') ?? '')
  console.log('decrytedText',decrytedText )

  if(!decrytedText || decrytedText == '') return null;
  return JSON.parse(decrytedText);
}


  register(data: Register) {
    return this.apiService.post(`auth/register`, data);
  }

  createRequest(data: Request){
    return this.apiService.post(`users/request`, data);
  }

  getRequests(){
    return this.apiService.get(`users/request`);
  }

  getOneRequest(id:string){
    return this.apiService.get(`users/request/${id}`,);
  }

}
