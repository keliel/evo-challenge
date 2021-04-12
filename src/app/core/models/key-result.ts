import { KeyResultStatus } from './key-result-status.enum';

type Progress = number; // Type of value between 0 and 1

export interface KeyResult {
  text: string;
  progress: Progress;
  status: KeyResultStatus;
}
