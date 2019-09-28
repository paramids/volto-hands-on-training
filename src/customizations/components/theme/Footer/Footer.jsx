/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { Container, List, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {
  FormattedMessage,
  defineMessages,
  injectIntl,
  intlShape,
} from 'react-intl';
import { Logo } from '@plone/volto/components';

const messages = defineMessages({
  copyright: {
    id: 'Copyright',
    defaultMessage: 'Copyright',
  },
});

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */
const Footer = ({ intl }) => (
  <Segment role="contentinfo" vertical padded inverted color="grey">
    <Container>
      <Segment basic inverted color="grey" className="discreet footer">
        <div className="footer-inner">
          <Logo />
          <List horizontal inverted>
            {/* wrap in div for a11y reasons: listitem role cannot be on the <a> element directly */}
            <div role="listitem" className="item">
              <Link className="item" to="/sitemap">
                <FormattedMessage id="Site Map" defaultMessage="Site Map" />
              </Link>
            </div>
            <div role="listitem" className="item">
              <Link className="item" to="/accesibility-info">
                <FormattedMessage
                  id="Accessibility"
                  defaultMessage="Accessibility"
                />
              </Link>
            </div>
            <div role="listitem" className="item">
              <Link className="item" to="/contact-form">
                <FormattedMessage id="Contact" defaultMessage="Contact" />
              </Link>
            </div>
            <div role="listitem" className="item">
              <a className="item" href="https://plone.com">
                <FormattedMessage
                  id="Powered by Plone & Python"
                  defaultMessage="Powered by Plone & Python"
                />
              </a>
            </div>
          </List>
        </div>

        <p>
          The Plone® CMS/WCM is © 2000–2019 the Plone Foundation and friends.
          <br />
          Plone® and the Plone logo are registered trademarks of the Plone
          Foundation.
          <br /> You’re looking good today!
        </p>
      </Segment>
    </Container>
  </Segment>
);

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Footer.propTypes = {
  /**
   * i18n object
   */
  intl: intlShape.isRequired,
};

export default injectIntl(Footer);
