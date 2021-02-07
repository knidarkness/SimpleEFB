import React from 'react';
import styled from 'styled-components';

const ComputedRowName = styled.h4`
  display: inline-block;
  margin: 5px;
`;

const Column = styled.div`
  width: inherit;
`;

interface LandingPerfResultProps {
  computed: boolean;
  LDR: number;
  winds: {
    headwind?: number;
    crosswind?: number;
  };
}

export default function LandingPerfResult({
  computed,
  LDR,
  winds,
}: LandingPerfResultProps): JSX.Element {
  return (
    <Column>
      {computed ? (
        <>
          <div>
            <ComputedRowName style={{ display: 'inline-block' }}>
              Landing distance required:
            </ComputedRowName>
            {` ${LDR} ft.`}
          </div>
          <div>
            <ComputedRowName>
              {winds.headwind && winds?.headwind >= 0
                ? 'Headwind: '
                : 'Tailwind: '}
            </ComputedRowName>
            {` ${Math.abs(winds.headwind || 0).toFixed(0)} kts`}
          </div>
          <div>
            <ComputedRowName>Crosswind: </ComputedRowName>
            {` ${Math.abs(winds.crosswind || 0).toFixed(0)} kts`}
          </div>
        </>
      ) : undefined}
    </Column>
  );
}
