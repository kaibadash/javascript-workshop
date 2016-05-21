import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as Styles from './styles.css';
import ContentLinks from '../../components/ContentLinks';
import { contentsGroupsSelector } from '../../selectors';

const Outer = (props) =>
  <div className={Styles.Outer} {...props} />;

const LinkGroup = (props) =>
  <div className={Styles.LinkGroup} {...props} />;

const Icon = ({ type, size }) =>
  <i className={`fa fa-${type} fa-${size}`} />;
Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
};

const LinkGroups = ({ contentsGroups }) =>
  <Outer>
    {contentsGroups.map((contentsGroup) =>
      <LinkGroup key={contentsGroup.type}>
        <ContentLinks
          label={
            <span>
              <Icon type={contentsGroup.icon} size="lg" />
              {' '}
              {contentsGroup.type}
            </span>
          }
          contents={contentsGroup.contents}
        />
      </LinkGroup>
    )}
  </Outer>;
LinkGroups.propTypes = {
  contentsGroups: PropTypes.array.isRequired
};

export default connect((state) => ({
  contentsGroups: contentsGroupsSelector(state)
}))(LinkGroups);
