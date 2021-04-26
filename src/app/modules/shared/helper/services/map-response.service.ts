import { Injectable } from '@angular/core';
import * as snakeToCamel  from 'camelcase-keys';
import { camelToSnake }  from '../snakeize';

@Injectable({
  providedIn: 'root'
})
export class MapResponseService {

  constructor() { }

  snakeToCamel(data: any) {
    return  snakeToCamel(data);
    }

    camelToSnake(data: any) {
      return camelToSnake(data);
    }
}
