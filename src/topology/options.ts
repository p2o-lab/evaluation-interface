export interface PlantTopologyConnectionOptions {
  name: string;
  id?: string;
  directed: boolean;
  startNozzles: string[];
  endNozzles: string[];
}
