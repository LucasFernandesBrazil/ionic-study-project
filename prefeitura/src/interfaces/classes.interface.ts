export interface IClasses {
  id: string;
  name: string;
  schoolId: string;
  teacherId: string;
  students: string[];
}

export interface IStudent {
  id: string;
  name: string;
  age: number;
  classId: string;
}

export interface ITeacher {
  id: string;
  name: string;
  classes: number[];
}
