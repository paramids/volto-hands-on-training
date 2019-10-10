import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import RecentSuccessStories from './RecentSuccessStories';
import highlightPlonePNG from './highlights-plone.png';
import highlightNewsPNG from './highlights-news.png';
import highlightLogosJPG from './highlights-logos.jpg';
import highlightPCJPG from './highlights-small-ploneconf.png';

const View = props => {
  const { id } = props;

  return (
    <div className="tile highlights">
      <Grid columns="3">
        <Grid.Column>
          <div className="highlight">
            <div className="highlight-header">
              <img src={highlightPlonePNG} alt="" />
              <h2>Why Use Plone</h2>
            </div>
            <div className="highlight-body">
              <p>
                Plone has an{' '}
                <a
                  className="external-link"
                  href="https://plone.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title=""
                >
                  active, thriving community
                </a>{' '}
                that holds{' '}
                <a
                  className="external-link"
                  href="https://plone.org/events"
                  target="_blank"
                  rel="noopener noreferrer"
                  title=""
                >
                  annual conferences, regional symposia, and many sprints
                </a>{' '}
                all over the world.
              </p>
              <p>
                <em>
                  <span className="title">
                    <strong>
                      See{' '}
                      <a
                        className="external-link"
                        href="https://plone.org/news/2017/plones-outstanding-security-track-record"
                        target="_blank"
                        rel="noopener noreferrer"
                        title=""
                      >
                        our statement about Plone's outstanding security track
                        record
                      </a>
                    </strong>{' '}
                    and a recent security hoax.
                  </span>
                </em>
              </p>
              <p>
                <a
                  className="external-link"
                  href="https://2019.ploneconf.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title=""
                >
                  Plone Conference 2019 will be in Ferrara, Italy
                </a>
                <span>!&nbsp;</span>
              </p>
              <dl className="image-inline captioned">
                <a
                  className="external-link"
                  href="https://2019.ploneconf.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title=""
                >
                  <dt>
                    <img
                      src={highlightPCJPG}
                      alt="Plone Conference 2019"
                      title="Plone Conference 2019"
                      height="100"
                      width="200"
                    />
                  </dt>
                  <dd className="image-caption">Plone Conference 2019</dd>
                </a>
              </dl>
              <Link to="/about">Learn more about Plone...</Link>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className="highlight">
            <div className="highlight-header">
              <img src={highlightNewsPNG} alt="" />
              <h2>Recent Plone launches</h2>
            </div>
            <div className="highlight-body">
              <RecentSuccessStories id={id} />
            </div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className="highlight">
            <div className="highlight-header">
              <img src={highlightPlonePNG} alt="" />
              <h2>Why Use Plone</h2>
            </div>
            <div className="highlight-body">
              <img src={highlightLogosJPG} alt="" />
            </div>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default View;
