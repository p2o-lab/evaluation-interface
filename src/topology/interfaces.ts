import {PlantTopologyObjectType} from './enums';

export interface PlantTopologyInfo {
  id: string;
  name?: string;
  description?: string;
  author?: string;
  dateOfCreation: Date;
  objects: PlantTopologyObjectInfo[];
  connections: PlantTopologyConnectionInfo[];
}

export interface PlantTopologyObjectProperty {
  id: string;
  name: string;
  type: PlantTopologyObjectProperty;
  value: string | number;
}

export interface PlantTopologyObjectInfo {
  id: string;
  name?: string;
  description?: string;
  type: PlantTopologyObjectType;
  properties?: PlantTopologyObjectProperty[];
  instanceReference?: string;
}

export interface PlantTopologyConnectionInfo {
  name: string;
  id: string;
  directed: boolean;
  startNozzles: string[];
  endNozzles: string[];
}
