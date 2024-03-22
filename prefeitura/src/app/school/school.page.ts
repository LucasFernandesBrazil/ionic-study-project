import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { MaskitoOptions, MaskitoElementPredicate } from '@maskito/core';
import { ISchool } from 'src/interfaces/school.interface';

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
  schools: ISchool[] = [];
  public results: ISchool[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getSchools();
  }

  getSchools() {
    this.http.get('http://localhost:5000/schools').subscribe(
      (data: any) => {
        this.schools = data;
        this.results = [...this.schools]
      },
      error => {
        console.error('Erro ao obter escolas', error);
      }
    );
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.schools.filter((d) => d.name.toLowerCase().indexOf(query) > -1);
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
}
