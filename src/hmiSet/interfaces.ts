import {Direction} from '../core';
import {PortType, TopologyConnectionType, TopologyObjectType} from './enums';

export interface objectWithIdentity{
  id: string;
  name?: string;
  description?: string;
}

export interface HMIView extends objectWithIdentity{
  pictures: Picture[];
}

export interface Picture extends objectWithIdentity{
  width?: number;
  height?: number;
  hierarchyLevel?: string;
  topologyObjects?: TopologyObject[];
  visualObjects?: VisualObject[];
  connections?: Connection[];
  semanticGroups?: SemanticGroup[];
}

export interface SemanticGroup extends objectWithIdentity{
  referencedObjects: string[];
}

export interface TopologyObject extends objectWithIdentity{
  x?: number;
  y?: number;
  ports?: Port[];
  type: TopologyObjectType;
}

export interface Junction extends TopologyObject{
  type: TopologyObjectType.Junction;
}

export interface Termination extends TopologyObject{
  type: TopologyObjectType.Termination;
}

export interface Source extends TopologyObject{
  type: TopologyObjectType.Source;
}

export interface Sink extends TopologyObject{
  type: TopologyObjectType.Sink;
}

export interface Connection extends objectWithIdentity{
  edgePath: Array<{x: number; y: number}>;
  type: TopologyConnectionType;
}

export interface FunctionLine extends Connection{
  start: LogicalPort;
  end: LogicalPort;
  type: TopologyConnectionType.Function;
}

export interface MeasurementLine extends Connection{
  start: MeasurementPoint;
  end: MeasurementPoint;
  type: TopologyConnectionType.Measurement;
}

export interface Pipe extends Connection{
  directed: boolean;
  nozzle1: Nozzle;
  nozzle2: Nozzle;
  type: TopologyConnectionType.Pipe;
}

export interface VisualObject extends objectWithIdentity{
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  zIndex?: number;
  rotation?: number;
  viewType?: string;
  eClassProperties?: EClassProperties;
  ports?: Port[];
  type: string;
  instanceReference?: string;
}

export interface EClassProperties{
  eClassVersion: string;
  eClassClassificationClass: string;
  eClassIRDI: string;
}

export interface Port extends objectWithIdentity{
  x?: number;
  y?: number;
  direction: Direction;
  type: PortType;
}

export interface LogicalPort extends Port{
  type: PortType.Logic;
}

export interface MeasurementPoint extends Port{
  type: PortType.Measurement;
}

export interface Nozzle extends Port{
  type: PortType.Nozzle;
}
