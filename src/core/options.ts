import {Direction} from './enums';

export interface PEAAttributeOptions {
  name: string;
  value: number;
  unit?: string;
  limits?: LimitOptions;
}

export interface LimitOptions {
  toleranceLow: number;
  toleranceHigh: number;
  alarmLow: number;
  alarmHigh: number;
}

export interface PEAPortOptions {
  name: string;
  type: string;
  direction?: Direction;
}
