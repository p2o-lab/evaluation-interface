import {AlarmDirection, AlarmPriority, AlarmType} from './enums';

export interface AlarmHistory {
  items: AlarmMessage[];
}

export interface AlarmMessage {
  originReference: string;
  timestamp: Date;
  message: string;
  id: string;
  type: AlarmType;
  direction: AlarmDirection;
  priority: AlarmPriority;
  toBeAcknowledged: boolean;
  acknowledged: boolean;
}
