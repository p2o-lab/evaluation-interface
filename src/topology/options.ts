import {Direction} from '../core';
import {PlantTopologyObjectType} from './enums';

export interface PlantTopologyOptions{
  id?: string;
  name: string;
  objectOptions: PlantTopologyObjectOptions[];
  connectionOptions: PlantTopologyConnectionOptions[];
}

export interface PlantTopologyObjectOptions {
  name: string;
  id?: string;
  type: PlantTopologyObjectType;
  nozzleOptions: TopologyObjectNozzleOptions[];
  objectReference: string | undefined;
}

export interface PlantTopologyConnectionOptions {
  name: string;
  id?: string;
  directed: boolean;
  startNozzles: string[];
  endNozzles: string[];
}

export interface TopologyObjectNozzleOptions{
  id?: string;
  name: string;
  direction: Direction;
}
