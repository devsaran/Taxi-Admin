import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@capacitor/status-bar';
import { IonContent, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent implements OnInit {
  @Input() info;
    @ViewChild(IonContent) content: IonContent;
 
  newMsg = '';
  messages: Observable<import("@angular/fire/firestore").DocumentData[]>;
  hasNoData: any;
  skeletOns: {}[];
  hideSkeleton: boolean;

 
  constructor(private chatService: AvatarService, private router: Router, private modalCtrl: ModalController) { }
 
  async ionViewDidEnter() {

    console.log(this.info);
    this.skeletOns = [
      {},{},{},{}
    ]
    this.hideSkeleton = true;
    this.messages = (this.chatService.getMessage(this.info.id))
    this.messages.subscribe((d)=>{
      if (d.length == 0){
        this.hasNoData = true;
        this.hideSkeleton = false;
      }else{
        this.hideSkeleton = false;
        this.hasNoData = false;
      }
  })

  }

  async Show(){
    await StatusBar.setOverlaysWebView({ overlay: false });
  
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }


  async Hide(){
    await StatusBar.setOverlaysWebView({ overlay: true });
  
  }

  ngOnInit(){}
 
  async sendMessage() {
    await this.chatService.addChatMessage(this.newMsg, this.info.id)
      this.newMsg = '';
      this.content.scrollToBottom();
      this.chatService.updateMessageInfo(this.info.id);
  }




 
  
}