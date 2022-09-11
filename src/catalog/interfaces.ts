import {OccupationStatus} from './enums';

export interface Catalog {
  items: PeaCatalogItem[];
}

export interface PeaCatalogItem {
  id: string;
  type: string;
  description: string;
  name: string;
  currentStatus?: OccupationStatus;
  attributes?: Attribute[];
  revisions?: RevisionEntry[];
}

export interface RevisionEntry {
  name: string;
  date: string;
  description: string;
}

interface Attribute {
  name: string;
  unit?: string;
  value: any;
}

export interface StringAttribute extends Attribute{
  value: string;
}

export interface NumericAttribute extends Attribute{
  value: number;
  toleranceHighLimit?: number;
  toleranceLowLimit?: number;
  alarmHighLimit?: number;
  alarmLowLimit?: number;
}
