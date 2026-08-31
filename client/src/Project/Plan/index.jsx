import React from 'react';
import PropTypes from 'prop-types';

import { Breadcrumbs } from 'shared/components';

import wizardImage from 'App/assets/images/plan-fei-wizard.png';

import { PlanContainer, PlanHeading, BackgroundImageWrapper } from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
};

const Plan = ({ project }) => (
  <PlanContainer>
    <Breadcrumbs items={['Projects', project.name, 'Plan']} />
    <PlanHeading>Plan Fei</PlanHeading>
    <BackgroundImageWrapper style={{ backgroundImage: `url(${wizardImage})` }} />
  </PlanContainer>
);

Plan.propTypes = propTypes;

export default Plan;
