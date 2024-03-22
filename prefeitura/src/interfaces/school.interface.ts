export interface ISchool {
  id: number;
  name: string;
  cep: string;
  periodoFuncionamento: ESchoolPeriod;
  phone: string;
  email: string;
  classes: number[];
}

export enum ESchoolPeriod {
  MATUTINO = 'matutino',
  VESPERTINO = 'vespertino',
  NOTURNO = 'noturno',
  INTEGRAL = 'integral'
}
