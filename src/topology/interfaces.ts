import {PlantTopologyObjectType} from './enum';

export interface PlantTopology {
  id: string;
  name?: string;
  description?: string;
  author?: string;
  dateOfCreation: Date;
  objects: PlantTopologyObject[];
  connections: PlantTopologyConnection[];
}

export interface PlantTopologyObjectProperty {
  id: string;
  name: string;
  type: PlantTopologyObjectProperty;
  value: string | number;
}

export interface PlantTopologyObject {
  id: string;
  name?: string;
  description?: string;
  type: PlantTopologyObjectType;
  properties?: PlantTopologyObjectProperty[];
  instanceReference?: string;
}

export interface PlantTopologyConnection {
  name: string;
  id: string;
  directed: boolean;
  startNozzles: string[];
  endNozzles: string[];
}
