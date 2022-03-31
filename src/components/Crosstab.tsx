import { Box } from "@mui/material";
import Layout from "../app/common/components/Layout";
import { LeftPanelSection } from "../app/common/components/Layout/Layout.styled";
import { defaultStudy, studiesList } from "./constants";
import StudySelector from "./StudySelector";

const Crosstab = () => {
  const renderComponent = () => (
    <LeftPanelSection>
        <Box mb={2}>
    <StudySelector
      defaultStudy={defaultStudy}
      featureId={1}
      setSelectedStudy={() => {}}
      studyList={studiesList}
      disabled={false}
    />
    </Box>
    </LeftPanelSection>
  );
  return (
    <div>
      <Layout
        isLeftPanel
        leftPanelComponents={renderComponent()}
        panelTitle="Crosstab"
      />
    </div>
  );
};

export default Crosstab;
