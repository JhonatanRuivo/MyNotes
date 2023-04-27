import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 0 16px ;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
    :hover {
      scale: 1.2;
    }
  }
  .button-add {
    color: ${({ theme }) => theme.COLORS.GREEN};
    :hover {
      scale: 1.2;
    }
  }

  > input {
    width: 100%;
    height: 56px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;