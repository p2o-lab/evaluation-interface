import {AlarmList} from '../alarming/interfaces';
import {PEAState, PEAType} from './enums';

export interface PEAViewModel {
  peaId: string;
  name: string;
  connected: boolean;
  status: PEAState;
  alarms: AlarmList;
  type: PEAType;
  description?: string;
  parametersIn: ParameterViewModel[];
  parametersOut: ParameterViewModel[];
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
