import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Main, Root, LeftPanel, LeftPanelTitle, MainExpansion } from './Layout.styled';
import IconLeftArrow from '../../../../svg/IconLeftArrow';
import IconExpandCaretActive from '../../../../svg/IconExpandCaretActive';
import { IconBtn } from '../../lib/Button';

interface iProps {
  isLeftPanel: boolean;
  leftPanelComponents: JSX.Element;
  panelTitle: string;
}

const Layout: React.FC<iProps> = (props) => {
  const { isLeftPanel, leftPanelComponents, panelTitle } = props;
  const [collapsedLeftNav, setCollapsedLeftNav] = useState<boolean>(false);

  const collapseButtonClicked = (): void => {
    setCollapsedLeftNav(!collapsedLeftNav);
    setTimeout(() => { // setTimeout being used as there is transition happening for 1 sec while collapsing ad expandig Layout
      window.dispatchEvent(new Event('resize')); // calling resize event to resize the charts
    }, 1100)
  };
  return (
    <Root>
      {isLeftPanel && (
        <>
          <MainExpansion collapsedLeftNav={collapsedLeftNav}>
            <IconBtn onClick={collapseButtonClicked}>
              {collapsedLeftNav ? <IconExpandCaretActive /> : <IconLeftArrow />}
            </IconBtn>
          </MainExpansion>
          <LeftPanel collapsedLeftNav={collapsedLeftNav}>
            <LeftPanelTitle>
              <Typography variant="h1">{panelTitle}</Typography>
            </LeftPanelTitle>

            {leftPanelComponents}
          </LeftPanel>
        </>
      )}
      <Main>{props.children}</Main>
    </Root>
  );
};

export default Layout;
