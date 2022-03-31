import Box from '@mui/material/Box';
import styled from 'styled-components';
import { Colors } from '../../../../styles/colors';

interface propsMainExpansion {
  collapsedLeftNav: boolean;
}

export const Root = styled(Box)`
  height: calc(100vh - 48px);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap
  flex: 1;
`;

export const Main = styled.main`
  width: 100%;
  flex: 1;
  overflow: hidden;
  border-left: 1px solid ${(props): string => props.theme.palette.divider};
  background-color: ${Colors.backgroundGray};
  position: relative;
`;

export const MainExpansion = styled.em<propsMainExpansion>`
  position: absolute;
  top: 51px;
  left: ${({ collapsedLeftNav }): string => (collapsedLeftNav ? '5px' : '235px')};
  z-index: 1209;
  width: 24px;
  height: 24px;
  border: 1px solid ${(props): string => props.theme.palette.divider};
  border-radius: 25px;
  display: inline-flex;
  justify-content: center;
  background: ${(props): string => props.theme.palette.common.white};
  transition: 1s ease-in;
`;

export const LeftPanel = styled(Box)<propsMainExpansion>`
  background-color: ${(props): string => props.theme.palette.background.light};
  width: ${({ collapsedLeftNav }): string => (collapsedLeftNav ? '16px' : '247px')};
  overflow: auto;
  height: 100%;
  position: relative;
  opacity: ${({ collapsedLeftNav }): string => (collapsedLeftNav ? '0' : '1')};
  transition: 1s ease-in;
`;

export const LeftPanelTitle = styled('div')`
  padding: ${(props): string => `${props.theme.palette.spacing[1] * 2}px ${props.theme.palette.spacing[1] * 3}px`};
`;

export const LeftPanelSection = styled.div`
  padding: ${(props): string => `${props.theme.palette.spacing[1] * 2}px ${props.theme.palette.spacing[1] * 3}px`};
  border-bottom: ${(props): string => `1px solid ${props.theme.palette.divider}`};
`;
