import {PEAViewModel} from '../core/interfaces';

export interface PEAPoolInfo{
  name: string;
  id: string;
  description?: string;
  peas: PEAViewModel[];
}
