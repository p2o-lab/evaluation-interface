import {AlarmType} from '../alarming/enums';
import {AlarmHistory} from '../alarming/interfaces';
import {ProcessFunction} from '../types/enums';

export interface PEAViewModel {
  id: string;
  name: string;
  connected: boolean;
  status: AlarmType;
  alarms?: AlarmHistory;
  typeReference?: string;
  processFunctions?: ProcessFunction[];
  description?: string;
  parametersIn?: ParameterViewModel[];
  parametersOut?: ParameterViewModel[];
}

export interface PlantInfo {
  scenarioRunning: boolean;
  recipeRunning: boolean;
  plantCleaned: boolean;
  currentScenario: string;
}

export interface ParameterViewModel {
  id: string;
  name?: string;
  value?: number | string | boolean;
  requestedValue?: string;
  min?: number;
  max?: number;
  unit?: string;
  type?: string;
  timestamp?: Date;
}

export interface PEAOptions{
  id: string;
  name: string;
  description: string;
  type?: string;
  portOptions: PEAPortOptions[];
  specificAttributes: PEAAttributeOptions[];
}

export interface PEAPortOptions {
  name: string;
  type: string;
  direction?: 'In' | 'Out' | 'BiDirectional';
}

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
