// TODO: Will be something like PEAOptions or PEAInfo in future
export interface PEAViewModel {
  peaId: string;
  name: string;
  connected: boolean;
  status: Status;
  alarmMessage: string;
  type: string;
  description: string;
  parametersIn: ParameterViewModel[];
  parametersOut: ParameterViewModel[];
}

export interface TopologyObject {
  id: string;
  type: string;
  objectReference?: string | undefined
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

export enum Status {
  None = 'No Status available',
  Normal = 'Normal',
  PreWarning = 'PreWarning',
  Warning = 'Warning',
  Alert = 'Alert',
  Malfunction = 'Malfunction',
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
