import {AlarmDirection, AlarmPriority} from './enums';

export interface AlarmList {
  items: AlarmItem[];
}

export interface AlarmItem {
  origin: string;
  timestamp: Date;
  message: string;
  id: string;
  type: string;
  direction: AlarmDirection;
  priority: AlarmPriority;
  toBeAcknowledged: boolean;
  acknowledged: boolean;
}
