import React from "react";

import {
  LoaderHld,
  LoaderInner,
  BounceBallHld,
  BounceBall
} from '../styled/Loader';

const Loader = () => (
  <LoaderHld>
    <LoaderInner>
      <BounceBallHld>
        <BounceBall></BounceBall>
        <BounceBall></BounceBall>
      </BounceBallHld>
    </LoaderInner>
  </LoaderHld>
);

export default Loader;
