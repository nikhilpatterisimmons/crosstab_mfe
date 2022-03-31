import { Study, StudyGroup } from '../types/studiesReduxTypes';
import { StudyItemState } from './studySelectorState';

export interface StudySelectorProps {
  studyList: Array<StudyGroup>;
  defaultStudy: Study | undefined;
  setSelectedStudy: (study: Study, prevStudy?: Study) => void;
  featureId: number;
  disabled: boolean;
}

export interface StudyListGroup {
  id: number;
  sgd: string;
  tt: number;
  pm: Array<number>;
  dsti: number;
  sl: Array<StudyItemState>;
  exp?: boolean;
}

export interface AccordionProps {
  sg: StudyListGroup;
  setStudy: (study: StudyItemState) => void;
  handleAccordion: (sg: StudyListGroup) => void;
  selectedPn?: number;
}
export interface StudyList {
  id: number;
  sgd: string;
  tt: number;
  pm: Array<number>;
  dsti: number;
  sl: Array<Study>;
  exp?: boolean;
}
