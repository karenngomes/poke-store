import React from "react";
import { Row, Col } from "react-bootstrap";
import { InlineIcon } from "@iconify/react";
import heartSolid from "@iconify/icons-clarity/heart-solid";
import jsSquare from "@iconify/icons-fa-brands/js-square";
import githubSquare from "@iconify/icons-fa/github-square";
import linkedinSquare from "@iconify/icons-fa/linkedin-square";
import twitterSquare from "@iconify/icons-fa/twitter-square";
import codeIcon from "@iconify/icons-fa-solid/code";

import "./styles.scss";

function FooterContainer() {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <Row>
        <Col sm>
          <p>
            Made with <InlineIcon icon={heartSolid} /> and{" "}
            <InlineIcon icon={jsSquare} />
          </p>
        </Col>
        <Col sm>
          <p className="text-muted">
            © 2020 Karen Gomes, Inc. All rights reserved. <br />
            See the{" "}
            <a href="https://github.com/karenngomes/poke-store" target="_blank">
              <InlineIcon icon={codeIcon} />
            </a>
            {/* <br>
              See the{" "}
              <a
                href="https://github.com/karenngomes/airbngama"
                target="_blank"
              >
                <i className="fa fa-code"></i>
              </a>
            </br> */}
          </p>
        </Col>
        <Col className="social-networks">
          <ul className="list-unstyled text-small">
            <li>
              <a href="https://github.com/karenngomes/" target="_blank">
                <InlineIcon icon={githubSquare} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/karenngomes/"
                target="_blank"
              >
                <InlineIcon icon={linkedinSquare} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/gomesskaren/" target="_blank">
                <InlineIcon icon={twitterSquare} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
}

export default FooterContainer;
