import ExpandLessOutlined from '@mui/icons-material/ExpandLessOutlined';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import withStyles from '@mui/styles/withStyles';
import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import IconAuthorized from '../../svg/IconAuthorized';
import { MainLabel, Studies, StudyItem } from './styledComponents';
import { AccordionProps } from './types/studySelectorProps';
import { StudyItemState } from './types/studySelectorState';
import { isStudyAccredited } from './utils';

const MyExpandMoreOutlined = styled(ExpandLessOutlined)({
  padding: 0,
  margin: 8,
  color: Colors.defaultGray,
});

const Accordion = withStyles({
  root: {
    border: 'none',
    boxShadow: 'none',
    width: '100%',
    transition: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: '0',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    fontSize: '14px',
    backgroundColor: Colors.white,
    color: Colors.defaultGray,
    borderBottom: 'none',
    marginBottom: -1,
    minHeight: 36,
    width: '100%',
    height: '32px',
    padding: '0',
    '&$expanded': {
      minHeight: 36,
    },
  },
  content: {
    paddingLeft: '16px',
    '&$expanded': {
      margin: '0',
    },
    overflow: 'hidden',
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles(() => ({
  root: {
    padding: '0 16px',
  },
}))(MuiAccordionDetails);

const StudyAccordion = ({ sg, setStudy, handleAccordion, selectedPn }: AccordionProps): JSX.Element => {
  const clickHandler = (study: StudyItemState): void => {
    setStudy(study);
  };

  const renderLabel = (study: StudyItemState): JSX.Element => {
    if (isStudyAccredited(study.sti)) {
      if (study.sd.includes(' - ')) {
        const sdList = study.sd.split(' - ');
        return (
          <MainLabel>
            <span>{sdList[0]}</span>
            <IconAuthorized />
            <span>{sdList[1]}</span>
          </MainLabel>
        );
      }
      return (
        <MainLabel>
          <span>{study.sd}</span>
          <IconAuthorized />
        </MainLabel>
      );
    }
    return (
      <Typography variant="body2">
        {study.sd}
      </Typography>
    );
  };

  return (
    <Accordion
      TransitionProps={{ unmountOnExit: true, timeout: 0 }}
      key={sg.sgd}
      expanded={sg.exp}
      onClick={(): void => handleAccordion(sg)}
    >
      <AccordionSummary expandIcon={<MyExpandMoreOutlined />} title={sg.sgd}>
        <Typography variant="body1" noWrap>
          {sg.sgd}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Studies data-testid="study-details">
          {sg.sl.map((study: StudyItemState) => (
            <StudyItem
              data-testid="study-detail-item"
              key={study.pn}
              title={study.sd}
              onClick={(): void => clickHandler(study)}
              selected={selectedPn ? selectedPn === study.pn : false}
            >
              {renderLabel(study)}
            </StudyItem>
          ))}
        </Studies>
      </AccordionDetails>
    </Accordion>
  );
};

export default StudyAccordion;
