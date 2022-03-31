import styled from 'styled-components';

export const MuiList = styled.div`
  max-height: 232px;
  overflow: hidden auto;
  border-radius: 0 0 12px 12px;
`;

export const EmptyList = styled.div`
  padding: 16px 8px;
`;

export const BtnLabel = styled.span`
  padding-left: 0;
  overflow: hidden;
  width: calc(100% - 32px);
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-bottom: 4px;
  display: block;
  span {
    font-size: 14px;
    font-weight: 600;
  }
  img {
    padding: 0px 5px;
    width: 14px;
  }
`;

export const MainLabel = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  font-family: 'Lato';
  img {
    padding: 0px 5px;
    width: 14px;
  }
  span {
    white-space: nowrap;
  }
`;

interface StudyItemProps {
  selected?: boolean;
}

export const StudyItem = styled.div<StudyItemProps>`
  display: flex;
  flex-direction: row;
  text-align: left;
  cursor: pointer;
  padding: 4px 0px;
  p {
    color: ${(props): string => (props.selected ? props.theme.palette.primary.main : props.theme.palette.common.gray)};
    &:hover {
      color: ${(props): string => props.theme.palette.secondary.light};
    }
  }
`;

export const Studies = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StudiesLabel = styled.p`
  font-size: ${({ theme: { palette } }): string => `${palette.fontSize[0]}px`};
  padding: 0 16px 8px 16px;
  margin: 0;
  font-weight: 400;
`;

export const StyledModalContent = styled.div`
  padding: ${(props): string => `${props.theme.palette.spacing[1] * 3}px`};
`;

export const StyledButton = styled.a`
  text-decoration: none;
  color: ${(props): string => props.theme.palette.common.textLight};
`;
