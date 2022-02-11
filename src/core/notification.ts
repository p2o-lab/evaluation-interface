import {AlarmList} from '../alarming/interfaces';
import {Catalog} from '../catalog/interfaces';
import {ParameterViewModel, PEAViewModel} from './interfaces';

export type EvaluationBackendNotification =
  {
    message: 'ping';
  } |
  {
    message: 'catalog';
    catalog: Catalog;
  } |
  {
    message: 'pea changed';
    peas: PEAViewModel[];
  } |
  {
    message: 'parameter value changed';
    parameter: ParameterViewModel;
  } |
  {
    message: 'alarm';
    alarms: AlarmList;
  } |
  {
    message: 'topology changed';
  } |
  {
    message: 'end';
  };

