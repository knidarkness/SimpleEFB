import React from 'react';

export default function Home(): JSX.Element {
  return (
    <div>
      <h3>Welcome</h3>
      <p>
        Welcome to the SimpleEFB project homepage. This is a tool which is
        intended for <b>simulator use only</b>. As of now, it can only provide
        landing distance calculation for Boeing 767-300, however in near future
        it will be extended with other aircraft types (Boeing 767-200, Boeing
        777-200, Airbus A32X family and maybe more), live airport data load and
        others.
      </p>
    </div>
  );
}
