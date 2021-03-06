import {Pipe, PipeTransform} from '@angular/core';

import {isArray, isUndefined, objectContains, toArray} from '../utils/utils';

@Pipe({name: 'removeWith'})
export class RemoveWithPipe implements PipeTransform {
  transform(collection: any, object?: any): any {
    if (!isArray(collection)) {
      collection = toArray(collection);
    }

    if (!isArray(collection) || isUndefined(object)) {
      return collection;
    }

    return collection.filter((e: any) => !objectContains(object, e));
  }
}
