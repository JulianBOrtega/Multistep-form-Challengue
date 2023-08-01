import { Localidad } from "./localidad";

export interface UserInfo {
    nombre: string;
    email: string;
    telefono: string;
    localidad: Localidad;
}

export const USUARIOS: UserInfo[] = [
    {
      nombre: 'Juan Pérez',
      email: 'juan.perez@example.com',
      telefono: '123456789',
      localidad: { id: 1, nombre: 'Ciudad A' },
    },
    {
      nombre: 'María López',
      email: 'maria.lopez@example.com',
      telefono: '987654321',
      localidad: { id: 2, nombre: 'Ciudad B' },
    },
    {
      nombre: 'Pedro Gómez',
      email: 'pedro.gomez@example.com',
      telefono: '555555555',
      localidad: { id: 3, nombre: 'Ciudad C' },
    },
    {
      nombre: 'Ana Rodríguez',
      email: 'ana.rodriguez@example.com',
      telefono: '111111111',
      localidad: { id: 4, nombre: 'Ciudad D' },
    },
    {
      nombre: 'Luis Martínez',
      email: 'luis.martinez@example.com',
      telefono: '999999999',
      localidad: { id: 5, nombre: 'Ciudad E' },
    },
    {
      nombre: 'Sofía González',
      email: 'sofia.gonzalez@example.com',
      telefono: '777777777',
      localidad: { id: 6, nombre: 'Ciudad F' },
    },
    {
      nombre: 'Laura Torres',
      email: 'laura.torres@example.com',
      telefono: '444444444',
      localidad: { id: 7, nombre: 'Ciudad G' },
    },
    {
      nombre: 'Carlos Sánchez',
      email: 'carlos.sanchez@example.com',
      telefono: '222222222',
      localidad: { id: 8, nombre: 'Ciudad H' },
    },
    {
      nombre: 'Patricia Ramírez',
      email: 'patricia.ramirez@example.com',
      telefono: '888888888',
      localidad: { id: 9, nombre: 'Ciudad I' },
    },
    {
      nombre: 'Ricardo Castro',
      email: 'ricardo.castro@example.com',
      telefono: '666666666',
      localidad: { id: 10, nombre: 'Ciudad J' },
    },
  ];