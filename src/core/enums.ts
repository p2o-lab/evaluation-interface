
export enum PEAType{
  SDU = 'Standard Dosing Unit',
  STU = 'Stirred Tank Unit',
  HCU = 'Heat Cool Unit',
  Any = 'Any Unit',
  NRU = 'Neutralization Reactor Unit',
}

export enum PEAState {
  Unknown = 'Unknown',
  Normal = 'Normal',
  PreWarning = 'PreWarning',
  Warning = 'Warning',
  Alert = 'Alert',
  Malfunction = 'Malfunction',
}
