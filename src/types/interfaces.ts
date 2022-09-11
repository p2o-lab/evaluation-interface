import {ProcessFunction} from './enums';

export interface PEATypePoolInfo{
  id: string;
  peaTypes: PEAType[];
}

export interface PEAType {
  id: string;
  name: string;
  description?: string;
  processFunctions?: ProcessFunction[];
  mandatoryAttributes?: TypeAttribute[];
}

export interface TypeAttribute {
  [key: string]: number | string | boolean;
}
