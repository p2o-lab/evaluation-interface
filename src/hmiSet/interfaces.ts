
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
}

export interface Source extends TopologyObject{
  type: 'Source';
}

export interface Sink extends TopologyObject{
  type: 'Sink';
}

export interface Connection extends objectWithIdentity{
  edgePath: Point[];
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
  dimensions?: Dimension;
  position?: Point;
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
