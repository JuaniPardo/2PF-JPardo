import {Injectable} from '@angular/core';
import {delay, Observable, of, throwError} from "rxjs";
import {Class} from "../models/class";
import {getMaxId, rndTime} from "../../shared/utils";

let CLASSES_DB: Class[] = [
  {
    id: 1,
    title: 'Clase 1: Introducción a Angular',
    description: 'Angular CLI, instalación y configuración de la aplicación.',
    courseId: 1,
    isActive: true,
    createdAt: new Date('2023-08-15'),
    updatedAt: new Date('2023-09-10')
  },
  {
    id: 2,
    title: 'Clase 2: Directivas',
    description: 'Aprende a usar las directivas de Angular.',
    courseId: 1,
    isActive: true,
    createdAt: new Date('2023-02-01'),
    updatedAt: new Date('2023-05-20')
  },
  {
    id: 3,
    title: 'Clase 3: Componentes',
    description: 'Creación y uso de componentes en Angular.',
    courseId: 1,
    isActive: true,
    createdAt: new Date('2023-01-22'),
    updatedAt: new Date('2023-01-25'),
  },
  {
    id: 4,
    title: 'Clase 4: Servicios',
    description: 'Inyección de dependencias y servicios.',
    courseId: 1,
    isActive: true,
    createdAt: new Date('2023-01-28'),
    updatedAt: new Date('2023-01-30'),
  },
  {
    id: 5,
    title: 'Clase 5: Enrutamiento',
    description: 'Implementación de rutas y navegación.',
    courseId: 1,
    isActive: true,
    createdAt: new Date('2023-02-02'),
    updatedAt: new Date('2023-02-05'),
  },
];

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  constructor() {
  }

  getActiveClasses(): Observable<Class[]> {
    return of((CLASSES_DB).filter(c => c.isActive));
  }

  getInactiveClasses(): Observable<Class[]> {
    return of(CLASSES_DB.filter(c => !c.isActive));
  }

  getClassById(id: number): Observable<Class> {
    const foundClass: Class | undefined = CLASSES_DB.find(c => c.id === id);
    if (foundClass) {
      return of(foundClass).pipe(delay(rndTime()));
    } else {
      return  throwError(() => new Error('Clase no encontrada'));
    }
  }

  addClass(result: Class): Observable<Class[]> {
    const maxId = getMaxId(CLASSES_DB);
    const newClass: Class = {
      ...result,
      isActive: true,
      id: maxId + 1,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    CLASSES_DB = [...CLASSES_DB, newClass];
    return of(CLASSES_DB).pipe(delay(rndTime(.7)));
  }

  deleteClass(id: number): Observable<Class[]> {
    CLASSES_DB = CLASSES_DB.map(c =>
      c.id === id ? {...c, isActive: false, updatedAt: new Date()} : c
    ).filter(c => c.isActive);
    return of(CLASSES_DB).pipe(delay(rndTime(.3)));
  }

  updateClass(id: number, result: Partial<Class>): Observable<Class[]> {
    CLASSES_DB = CLASSES_DB.map(c =>
      c.id === id ? {...c, ...result, updatedAt: new Date()} : c
    ).filter(c => c.isActive);
    return of(CLASSES_DB).pipe(delay(rndTime(.5)));
  }

  activateClass(id: number): Observable<Class[]> {
    CLASSES_DB = CLASSES_DB.map(c =>
      c.id === id ? {...c, isActive: true, updatedAt: new Date()} : c
    ).filter(c => !c.isActive);
    return of(CLASSES_DB).pipe(delay(rndTime(.5)));
  }

}
