import cloneDeep from 'lodash/cloneDeep';
import filter from 'lodash/filter';
import find from 'lodash/find';
import forEach from 'lodash/forEach';
import { StudyGroup, Study } from './types/studiesReduxTypes';
import { StudyListGroup } from './types/studySelectorProps';

export const filterSearchData = function (value: string, studies: Array<StudyListGroup>): Array<StudyListGroup> {
  const searchText = value;
  const mainData = cloneDeep(studies);
  const filterData: Array<StudyListGroup> = [];
  const curExpandedList = [];
  const re = /\s\s+/g;
  const searchTextArray = searchText.trim().replace(re, ' ').toLowerCase().split(' ');
  forEach(mainData, (mData) => {
    const mDataItem = cloneDeep(mData);
    const itemChildDta = filter(mDataItem.sl, (data) => {
      const text = data.sd.toLowerCase();
      return searchTextArray.length === 0 || searchTextArray.every((searchText) => text.indexOf(searchText) > -1);
    });
    mDataItem.exp = true;
    mDataItem.sl = itemChildDta;
    if (mDataItem.sl.length > 0) {
      filterData.push(mDataItem);
      curExpandedList.push(mDataItem.sgd);
    }
  });
  return filterData;
};

export const isStudyAccredited = (sti: number): boolean => {
  if ([].includes(sti)) {
    return true;
  }
  return false;
};

export const filterStudyList = (studies: Array<StudyGroup>, featureID: number): Array<StudyGroup> => {
  return filter(studies, (item) => item.pm.indexOf(featureID) !== -1);
};

export const filterStudySelectorList = (filteredStudyList: Array<StudyGroup>): Array<StudyListGroup> => {
  const updatedStudyList = filteredStudyList.map((studyType) => {
    return {
      ...studyType,
      sl: studyType.sl.map((studyItem) => {
        return {
          pn: studyItem.pn,
          sd: studyItem.sd,
          sti: studyItem.sti,
          sgid: studyType.id,
        };
      }),
    };
  });
  return updatedStudyList;
};

export const getStudyForGivenProductNo = (studies: Array<StudyListGroup>, productNo: number): Study | undefined => {
  let selectedStudy;
  cloneDeep(studies).forEach((item) => {
    const value = find(item.sl, { pn: productNo });
    if (value) {
      selectedStudy = value as Study;
    }
  });
  return selectedStudy;
};
