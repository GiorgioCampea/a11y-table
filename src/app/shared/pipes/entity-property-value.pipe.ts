import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'entityPropertyValue',
  standalone: true
})
export class EntityPropertyValuePipe implements PipeTransform {

  transform(value: any, property: string, isFunction: boolean = false): string {
    if (isFunction) {
      return value[property];
    }
    const keys = Object.keys(value).map((key) => {
      if (typeof value[key] !== 'object') {
        return key;
      }
      return Object.keys(value[key]).map((childKey) => `${key}.${childKey}`);
    }).reduce((accumulator, current) => {
      if (Array.isArray(current)) {
        return [...accumulator, ...current];
      }
      return [...accumulator, current];
    }, []);
    if (!keys.includes(property)) {
      return '';
    }
    return property.split('.').reduce((prev, curr) => {
      return prev[curr];
    }, value);
  }

}
