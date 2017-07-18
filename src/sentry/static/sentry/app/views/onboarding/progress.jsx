import React from 'react';
import classNames from 'classnames';
import {onboardingSteps, stepDescriptions} from './utils';

const ProgressNodes = React.createClass({
  propTypes: {
    params: React.PropTypes.object
  },

  steps: Object.keys(onboardingSteps),

  inferStep() {
    let {projectId} = this.props.params;
    if (!projectId) return onboardingSteps.project;
    return onboardingSteps.configure;
  },

  node(step, i) {
    let nodeClass = classNames('node', {
      done: i < this.inferStep(),
      active: i === this.inferStep()
    });
    return (
      <div className={nodeClass} key={i}>
        <span className={nodeClass} />
        {stepDescriptions[step]}
      </div>
    );
  },
  render() {
    return (
      <div className="onboarding-sidebar">
        <div className="sentry-flag">
          <span href="/" className="icon-sentry-logo-full" />
        </div>
        <div className="progress-nodes">
          {this.steps.map(this.node)}
        </div>
        <div className="stuck">
          {/*
          <p> Stuck?</p>
          <p> Chat with a real person</p>
        */}
        </div>
      </div>
    );
  }
});

export default ProgressNodes;
