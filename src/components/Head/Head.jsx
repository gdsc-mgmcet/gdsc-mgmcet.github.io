import { useIdle } from "@uidotdev/usehooks";
import { Helmet } from 'react-helmet-async';

function Head() {
  const idleState = useIdle(5e3);

  return (
    <Helmet prioritizeSeoTags>
      {!idleState ? <title>GDSC - MGMCET</title> : <title>👋 Are you there?</title>}
    </Helmet>
  );
}

export default Head;
