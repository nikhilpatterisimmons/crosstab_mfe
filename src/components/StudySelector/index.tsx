import { useEffect, useState } from 'react';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { getStudyFamilyIdForGivenProductNo } from 'app/common/utils/AppUtils';
// import { UPDATE_STUDY_LIST_STORAGE_KEY, UPDATE_STUDY_STORAGE_KEY } from 'app/pages/Crosstab/constants';
// import { NO_STUDY_FOUND_LABEL, STUDY_HELPER_TEXT, DV_DEFAULT_VALUE, SUPPORT_URL } from '../../../../config/constants';
// import { fetchStandardBaseListForStudy, getFootNotes } from '../../../pages/Crosstab/services/crosstabApis';
// import { useAppDispatch } from '../../hooks/commonHooks';
// import Modal from '../../lib/Modal';
import SelectorDropdown from '../../app/common/lib/SelectorDropdown';
import IconAuthorized from '../../svg/IconAuthorized';
import SearchField from './SearchField';
import StudyAccordion from './StudyAccordion';
import { MuiList, EmptyList, BtnLabel, StudiesLabel, StyledModalContent, StyledButton } from './styledComponents';
// import { Study } from './types/studiesReduxTypes';
import { StudySelectorProps } from './types/studySelectorProps';
import { StudyItemState, StudyListState } from './types/studySelectorState';
import { filterSearchData, filterStudyList, filterStudySelectorList, isStudyAccredited } from './utils';

const StudySelector = ({
  studyList,
  defaultStudy,
  setSelectedStudy,
  featureId,
  disabled,
}: StudySelectorProps): JSX.Element => {
  // const dispatch = useAppDispatch();
  const [study, setStudy] = useState<StudyItemState>({pn: 1001913,
    sd: "2022 Winter MRI-Simmons USA",sti: 98});
  const [open, setOpen] = useState<boolean>(false);
  const [studies, setStudyList] = useState<Array<StudyListState>>(studyList);
  const [searchValue, setSearchValue] = useState<string>('');
  const [updatedModal, setUpdatedModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (studyList.length > 0) {
      setLoading(false);
    }
  }, [studyList]);

  // useEffect(() => {
  //   setStudy(defaultStudy);
  //   if (defaultStudy) {
  //     dispatch(fetchStandardBaseListForStudy(defaultStudy));
  //     dispatch(getFootNotes(defaultStudy.pn));
  //   }
  // }, [defaultStudy]);

  useEffect(() => {
    if (studyList.length > 0) {
      const filteredStudyList = filterStudyList(studyList, featureId);
      const updatedStudyList = filterStudySelectorList(filteredStudyList);
      setStudyList(updatedStudyList);
    }
  }, [studyList, featureId]);

  // const handleStudySelect = (newStudy: StudyItemState): void => {
  //   setOpen(!open);
  //   setSearchValue('');
  //   const localStudyList = localStorage.getItem(UPDATE_STUDY_LIST_STORAGE_KEY)
  //     ? JSON.parse(localStorage.getItem(UPDATE_STUDY_LIST_STORAGE_KEY) || '')
  //     : [];
  //   const prevStudy = study as Study;
  //   setStudy(newStudy);
  //   const [filteredStudy] = studyList
  //     .filter((item) => newStudy.sgid === item.id)[0]
  //     .sl.filter((studyItem) => studyItem.pn === newStudy.pn);
  //   const filteredStudyItem = { ...filteredStudy, wt: filteredStudy.cw[0].wt };
  //   const updatedWeight = filteredStudyItem.cw.map((weight) => {
  //     return { ...weight, dv: weight.dv ? weight.dv : DV_DEFAULT_VALUE };
  //   });
  //   const selectedStudyItem = { ...filteredStudyItem, cw: updatedWeight };
  //   const previousStudyFamilyId = getStudyFamilyIdForGivenProductNo(prevStudy.pn, studyList);
  //   const currentStudyFamilyId = getStudyFamilyIdForGivenProductNo(newStudy.pn, studyList);
  //   const { wt, dv } = prevStudy;
  //   const isWeightedPresent = selectedStudyItem.cw.find((weighted) => weighted.dv === dv && weighted.wt === wt);
  //   if (previousStudyFamilyId === currentStudyFamilyId && isWeightedPresent) {
  //     const updatedStudy = { ...selectedStudyItem, wt, dv };
  //     setSelectedStudy(updatedStudy, prevStudy);
  //   } else {
  //     setSelectedStudy(selectedStudyItem, prevStudy);
  //   }
  //   if (selectedStudyItem.rd && !localStudyList.includes(selectedStudyItem.pn)) {
  //     localStorage.setItem(UPDATE_STUDY_STORAGE_KEY, JSON.stringify(selectedStudyItem));
  //     localStudyList.push(selectedStudyItem.pn);
  //     localStorage.setItem(UPDATE_STUDY_LIST_STORAGE_KEY, JSON.stringify(localStudyList));
  //     setUpdatedModal(true);
  //   }
  // };

  const handleSearch = (value: string): void => {
    setSearchValue(value);
  };

  useEffect(() => {
    if (searchValue.length) {
      const filterData = filterSearchData(searchValue, filterStudySelectorList(filterStudyList(studyList, featureId)));
      setStudyList(filterData);
    } else {
      setStudyList(filterStudySelectorList(filterStudyList(studyList, featureId)));
    }
  }, [searchValue]);

  const handleAccordion = (sg: StudyListState): void => {
    const updatedStudies = studies.map((sGroup) => {
      if (sGroup.sgd === sg.sgd) {
        const exp = !sg.exp;
        return { ...sGroup, exp };
      }
      return sGroup;
    });
    setStudyList(updatedStudies);
  };

  // const _handleContinue = (): void => {
  //   setUpdatedModal(false);
  //   localStorage.removeItem(UPDATE_STUDY_STORAGE_KEY);
  // };

  // const renderActions = (): JSX.Element => (
  //   <>
  //     <Button autoFocus onClick={(): void => setUpdatedModal(false)} color="primary">
  //       <StyledButton
  //         href={SUPPORT_URL}
  //         target="_blank"
  //         rel="noopener
  //       noreferrer"
  //       >
  //         See Updates
  //       </StyledButton>
  //     </Button>

  //     <Button autoFocus onClick={_handleContinue} color="primary" variant="contained">
  //       Continue
  //     </Button>
  //   </>
  // );

  const renderLabel = (): JSX.Element => {
    if (study && isStudyAccredited(study.sti)) {
      if (study.sd.includes(' - ')) {
        const sdList = study.sd.split(' - ');
        return (
          <BtnLabel>
            <span>{sdList[0]}</span>
            <IconAuthorized />
            <span>{sdList[1]}</span>
          </BtnLabel>
        );
      }
      return (
        <BtnLabel>
          <span>{study.sd}</span>
          <IconAuthorized />
        </BtnLabel>
      );
    }
    return (
      <BtnLabel>
        {study && (
          <Typography component="span" variant="inherit" title={study.sd} noWrap>
            {study.sd}
          </Typography>
        )}
      </BtnLabel>
    );
  };

  const renderStudies = (): JSX.Element => (
    <>
      <SearchField value={searchValue} changeHandler={handleSearch} placeholder="Search" />
      <StudiesLabel>STUDIES</StudiesLabel>
      <MuiList data-testid="study-selector-dropdown">
        {studies.length === 0 && (
          <EmptyList>
            <Typography variant="body1">No Results Found. Please refine your search</Typography>
          </EmptyList>
        )}
        {studies
          .map((sGroup) => {
            return {
              exp: sGroup.exp !== undefined ? sGroup.exp : false,
              ...sGroup,
            };
          })
          .map((sg) => (
            <StudyAccordion
              key={sg.sgd}
              sg={sg}
              setStudy={() => {}}
              handleAccordion={handleAccordion}
              selectedPn={study ? study.pn : undefined}
            />
          ))}
      </MuiList>
    </>
  );

  return (
    <>
      <SelectorDropdown
        helperText={'STUDY'}
        label={study ? study.sd : 'Loading...'}
        dropDownChildren={renderStudies()}
        clickAway={open}
        testId="study-selector-dropdown"
        renderLabel={study && renderLabel()}
        disabled={loading || disabled}
        disableLoader={disabled}
        isStudyDropdown={true}
      />
      {/* <Modal
        isOpen={updatedModal}
        setOpen={_handleContinue}
        title="UPDATE NOTIFICATION"
        renderActions={renderActions()}
      >
        <StyledModalContent>
          <Typography variant="subtitle1">Study Name: {study && study.sd}</Typography>
          <Typography>You can always view a detailed summary of these updates in the Resources section.</Typography>
        </StyledModalContent>
      </Modal> */}
    </>
  );
};
export default StudySelector;
