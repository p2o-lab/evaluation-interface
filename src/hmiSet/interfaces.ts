
export interface objectWithIdentity{
  id: string;
  name?: string;
  description?: string;
}

export interface HMIView extends objectWithIdentity{
  pictures: Picture[];
}

export interface Picture extends objectWithIdentity{
  dimensions?: Dimension;
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
  position: Point;
  ports?: Port[];
  type: string;
}

export interface Junction extends TopologyObject{
  type: 'Junction';
}

export interface Termination extends TopologyObject{
  type: 'Termination';
  referencedObjects: string;
}

export interface Source extends TopologyObject{
  type: 'Source';
  instanceReference: string;
}

export interface Sink extends TopologyObject{
  type: 'Sink';
  instanceReference: string;
}

export interface Connection extends objectWithIdentity{
  edgePath: Point[];
}

export interface FunctionLine extends Connection{
  start: LogicalPort;
  end: LogicalPort;
}

export interface MeasurementLine extends Connection{
  start: MeasurementPoint;
  end: MeasurementPoint;
}

export interface Pipe extends Connection{
  directed: boolean;
  nozzle1: Nozzle;
  nozzle2: Nozzle;
}


export interface VisualObject extends objectWithIdentity{
  dimensions?: Dimension;
  position?: Point;
  zIndex?: number;
  rotation?: number;
  // TODO: not contained in standard?
  viewType?: string;
  eClassProperties?: EClassProperties;
  ports?: Port[];
  type: string;
  instanceReference: string;
}

export interface EClassProperties{
  eClassVersion: string;
  eClassClassificationClass: string;
  eClassIRDI: string;
}

export interface Dimension{
  width: number;
  height: number;
}

export interface Port extends objectWithIdentity{
  position: Point;
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

export interface Point {
  x: number;
  y: number;
}
