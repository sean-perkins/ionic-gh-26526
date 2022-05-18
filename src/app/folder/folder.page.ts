import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {ModalDetailedComponent} from './modal-detailed/modal-detailed.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController
  ) {
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  async detailedModal() {

    const modal = await this.modalController.create({
      component: ModalDetailedComponent,
      componentProps: {}
    });

    modal.onDidDismiss().then(async (modalDataResponse) => {
    });

    return await modal.present();
  }
}
