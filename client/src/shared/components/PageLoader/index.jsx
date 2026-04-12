import React from 'react';

import Spinner from 'shared/components/Spinner';
import { color } from 'shared/utils/styles';

import StyledPageLoader from './Styles';

const PageLoader = () => (
  <StyledPageLoader>
    <Spinner size={70} color={color.success} />
  </StyledPageLoader>
);

export default PageLoader;
