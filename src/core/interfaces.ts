export interface PEAViewModelInterface {
  peaId: string;
  name: string;
  connected: boolean;
  status: Status;
  alarmMessage: string;
  type: string;
  description: string;
  parametersIn: ParameterInterface[];
  parametersOut: ParameterInterface[];
}

export interface PEAHolderInterface {
  id: string;
  peaId: string;
  type: string;
  occupied: boolean;
}

export interface AlarmItemInterface {
  position?: number;
  timestamp: Date;
  message: string;
  id: string;
  status: string;
  name: string;
}

export interface PlantInfoInterface {
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

export interface ParameterInterface {
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
