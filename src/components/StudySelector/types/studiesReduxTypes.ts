/*
|    Old Attributes          |    New Attributes    |    Comments             |
|----------------------------|----------------------|-------------------------|
|    id                      |    id                | Study Group ID          |
|    desc                    |    sgd               | Study Group Description |
|    trendType               |    tt                | Trend Type              |
|    permissions             |    pm                | Permissions             |
|    studyList               |    sl                | Study List              |
|    productNo               |    pn                | Product No              |
|    study                   |    st                | Study ID                |
|    studyDescription        |    sd                | Study Description       |
|    studyYear               |    sy                | Study Year              |
|    studyRelease            |    sr                | Study Release           |
|    fieldStart              |    fs                | Field Start Date        |
|    fieldEnd                |    fe                | Field End Date          |
|    divisor                 |    dv                | Divisor                 |
|    weightType              |    wt                | Weight type             |
|    weightName              |    wn                | Weight Name             |
|    warningType             |    wnt               | Warning Type            |
|    customWeights           |    cw                | Custom Weights          |
|    studyTypeId             |    sti               | Study Type ID           |
|    studySource             |    ss                | Study Source            |
|    studyTypeDescription    |    std               | Study Type Description  |
|----------------------------|----------------------|-------------------------|
*/

export interface WeightType {
  wt: number;
  wn: string;
  dv?: number;
}

export interface Study {
  cw: Array<WeightType>;
  dv: number;
  fe: number | null;
  fs: number | null;
  pn: number;
  sd: string;
  ss: string;
  st: string;
  sti: number;
  sy: number;
  wnt: number;
  wt: number;
  rd?: string;
  tf?: number;
}

export interface StudyGroup {
  dsti: number;
  id: number;
  pm: Array<number>;
  sgd: string;
  sl: Array<Study>;
  tt: number;
  exp?: boolean;
}

export interface StudiesType {
  siStudies: Array<StudyGroup>;
  ecStudies: Array<StudyGroup>;
}

export type StudySource = 'MRI' | 'SIMMONS' | string;
