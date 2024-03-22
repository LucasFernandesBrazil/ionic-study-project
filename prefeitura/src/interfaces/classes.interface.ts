export interface IClasses {
  id: number;
  name: string;
  schoolId: number;
  teacherId: number;
  students: number[];
}

export interface IStudent {
  id: number;
  name: string;
  age: number;
  classId: number;
}

export interface ITeacher {
  id: number;
  name: string;
  classes: number[];
}
