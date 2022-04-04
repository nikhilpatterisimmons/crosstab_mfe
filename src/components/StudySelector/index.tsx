import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import SelectorDropdown from "../../app/common/lib/SelectorDropdown";
import IconAuthorized from "../../svg/IconAuthorized";
import SearchField from "./SearchField";
import StudyAccordion from "./StudyAccordion";
import { MuiList, EmptyList, BtnLabel, StudiesLabel } from "./styledComponents";
import { StudySelectorProps } from "./types/studySelectorProps";
import { StudyItemState, StudyListState } from "./types/studySelectorState";
import {
  filterSearchData,
  filterStudyList,
  filterStudySelectorList,
  isStudyAccredited,
} from "./utils";

const StudySelector = ({
  studyList,
  featureId,
  disabled,
}: StudySelectorProps): JSX.Element => {
  const [study, setStudy] = useState<StudyItemState>({
    pn: 1001913,
    sd: "2022 Winter MRI-Simmons USA",
    sti: 98,
  });
  const [open, setOpen] = useState<boolean>(false);
  const [studies, setStudyList] = useState<Array<StudyListState>>(studyList);
  const [searchValue, setSearchValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (studyList.length > 0) {
      setLoading(false);
    }
  }, [studyList]);

  const setStudyEvent = (study: any) => {
    const customeEvent = new CustomEvent("eventFromCrtb", { detail: study });
    console.log(study);
    window.dispatchEvent(customeEvent);
    setOpen(false);
  };

  useEffect(() => {
    if (studyList.length > 0) {
      const filteredStudyList = filterStudyList(studyList, featureId);
      const updatedStudyList = filterStudySelectorList(filteredStudyList);
      setStudyList(updatedStudyList);
    }
  }, [studyList, featureId]);

  const handleSearch = (value: string): void => {
    setSearchValue(value);
  };

  useEffect(() => {
    if (searchValue.length) {
      const filterData = filterSearchData(
        searchValue,
        filterStudySelectorList(filterStudyList(studyList, featureId))
      );
      setStudyList(filterData);
    } else {
      setStudyList(
        filterStudySelectorList(filterStudyList(studyList, featureId))
      );
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

  const renderLabel = (): JSX.Element => {
    if (study && isStudyAccredited(study.sti)) {
      if (study.sd.includes(" - ")) {
        const sdList = study.sd.split(" - ");
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
          <Typography
            component="span"
            variant="inherit"
            title={study.sd}
            noWrap
          >
            {study.sd}
          </Typography>
        )}
      </BtnLabel>
    );
  };

  const renderStudies = (): JSX.Element => (
    <>
      <SearchField
        value={searchValue}
        changeHandler={handleSearch}
        placeholder="Search"
      />
      <StudiesLabel>STUDIES</StudiesLabel>
      <MuiList data-testid="study-selector-dropdown">
        {studies.length === 0 && (
          <EmptyList>
            <Typography variant="body1">
              No Results Found. Please refine your search
            </Typography>
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
              setStudy={setStudyEvent}
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
        helperText={"STUDY"}
        label={study ? study.sd : "Loading..."}
        dropDownChildren={renderStudies()}
        clickAway={open}
        testId="study-selector-dropdown"
        renderLabel={study && renderLabel()}
        disabled={loading || disabled}
        disableLoader={disabled}
        isStudyDropdown={true}
      />
    </>
  );
};
export default StudySelector;
