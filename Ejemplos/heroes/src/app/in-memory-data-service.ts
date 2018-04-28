import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
    createDb() {
        const heroes = [
          { id: 11, nombre: 'Mr. Nice' },
          { id: 12, nombre: 'Narco' },
          { id: 13, nombre: 'Bombasto' },
          { id: 14, nombre: 'Celeritas' },
          { id: 15, nombre: 'Magneta' },
          { id: 16, nombre: 'RubberMan' },
          { id: 17, nombre: 'Dynama' },
          { id: 18, nombre: 'Dr IQ' },
          { id: 19, nombre: 'Magma' },
          { id: 20, nombre: 'Tornado' }
        ];
        return {heroes};
      }
}
