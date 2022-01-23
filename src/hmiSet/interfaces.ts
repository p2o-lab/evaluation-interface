
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
  type: string;
}

export interface Junction extends TopologyObject{
  type: 'Junction';
}

export interface Termination extends TopologyObject{
  type: 'Termination';
}

export interface Source extends TopologyObject{
  type: 'Source';
}

export interface Sink extends TopologyObject{
  type: 'Sink';
}

export interface Connection extends objectWithIdentity{
  edgePath: Array<{x: number; y: number}>;
  type: string;
}

export interface FunctionLine extends Connection{
  start: LogicalPort;
  end: LogicalPort;
  type: 'Function';
}

export interface MeasurementLine extends Connection{
  start: MeasurementPoint;
  end: MeasurementPoint;
  type: 'Measurement';
}

export interface Pipe extends Connection{
  directed: boolean;
  nozzle1: Nozzle;
  nozzle2: Nozzle;
  type: 'Pipe';
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
  direction: 'In' | 'Out' | 'BiDirectional';
  type: string;
}

export interface LogicalPort extends Port{
  type: 'Logic';
}

export interface MeasurementPoint extends Port{
  type: 'Measurement';
}

export interface Nozzle extends Port{
  type: 'Nozzle';
}
