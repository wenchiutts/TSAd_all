import {
    complement,
    anyPass,
    isNil,
    isEmpty,
    addIndex,
    map,
  } from 'ramda';

export const isNilOrEmpty = anyPass([isNil, isEmpty]);
export const isExist = complement(isNilOrEmpty);
export const mapIndexed = addIndex(map);
