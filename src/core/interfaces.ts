// TODO: Will be something like PEAOptions or PEAInfo in future
import {PEAState, PEAType} from './enums';

export interface PEAViewModel {
  peaId: string;
  name: string;
  connected: boolean;
  status: PEAState;
  alarmMessage: string;
  type: PEAType;
  description: string;
  parametersIn: ParameterViewModel[];
  parametersOut: ParameterViewModel[];
}

export interface TopologyObject {
  id: string;
  type: string;
  objectReference?: string | undefined;
}

export interface AlarmItem {
  position?: number;
  timestamp: Date;
  message: string;
  id: string;
  status: string;
  name: string;
}

export interface PlantInfo {
  scenarioRunning: boolean;
  recipeRunning: boolean;
  plantCleaned: boolean;
  currentScenario: string;
}

export interface ParameterViewModel {
  name: string;
  value?: number | string | boolean;
  requestedValue?: string;
  min?: number;
  max?: number;
  unit?: string;
  readonly?: boolean;
  type?: string;
  timestamp?: Date;
}
