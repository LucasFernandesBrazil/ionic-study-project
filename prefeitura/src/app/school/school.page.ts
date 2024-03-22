import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { MaskitoOptions, MaskitoElementPredicate } from '@maskito/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.page.html',
  styleUrls: ['./school.page.scss'],
})
export class SchoolPage implements OnInit {
  @ViewChild(IonModal, { static: false }) modal!: IonModal;
  name!: string;
  cep!: string;
  periodoFuncionamento!: string;
  message!: string;

  constructor() { }

  public data = [
    'Escola São José',
    'Escola São Francisco',
    'Escola Abelhinha',
    'Escola Girassol',
    'Escola Pingo de Gente',
    'Escola Céu Azul',
    'Escola Sonho Meu',
    'Escola Vila Feliz',
    'Escola Ciranda',
    'Escola Solar',
  ];
  public results = [...this.data];

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    const formData = {
      name: this.name,
      cep: this.cep,
      periodoFuncionamento: this.periodoFuncionamento
    };
    console.log(formData);
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  readonly cepMask: MaskitoOptions = {
    mask: [
      ...Array(5).fill(/\d/),
      '-',
      ...Array(3).fill(/\d/),
    ],
  };

  readonly maskPredicate: MaskitoElementPredicate = async (el) => (el as HTMLIonInputElement).getInputElement();

  ngOnInit() {
  }

}
