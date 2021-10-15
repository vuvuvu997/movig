import { DefaultLayout } from 'app/components/layout/DefaultLayout';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { color, typography } from 'shared/style';
import styled from 'styled-components';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <DefaultLayout>
        <DivContainer>How it works?</DivContainer>
      </DefaultLayout>
    </>
  );
}

const DivContainer = styled.div`
  color: ${color.netraul.black100};
  font-family: ${typography.type.code};
  font-size: ${typography.size.l3}px;
`;
