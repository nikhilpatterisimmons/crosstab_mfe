export interface StudyItemState {
  pn: number;
  sd: string;
  sti: number;
  sgid?: number;
}

export interface StudyListState {
  id: number;
  sgd: string;
  tt: number;
  pm: Array<number>;
  dsti: number;
  sl: Array<StudyItemState>;
  exp?: boolean;
}
