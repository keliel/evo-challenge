import { ActionPointType } from './action-point-type.enum';

export interface ActionPoint {
  id: string;
  title: string;
  type?: ActionPointType;
  subactions?: ActionPoint[];
  secured?: boolean;
}
