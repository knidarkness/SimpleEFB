const DEFAULT_LANDING_WEIGHT = 150;

const referenceDistances = {
  25: {
    dry: {
      max: 3200,
      aMax: 5370,
      '4': 5540,
      '3': 6360,
      '2': 7090,
      '1': 7740,
    },
    good: {
      max: 5060,
      aMax: 6190,
      '4': 6370,
      '3': 7330,
      '2': 8150,
      '1': 8900,
    },
    medium: {
      max: 6390,
      aMax: 6970,
      '4': 7050,
      '3': 7670,
      '2': 8350,
      '1': 8970,
    },
    poor: {
      max: 8960,
      aMax: 8960,
      '4': 8960,
      '3': 9050,
      '2': 9380,
      '1': 9720,
    },
  },
  30: {
    dry: {
      max: 3150,
      aMax: 5220,
      '4': 5380,
      '3': 6180,
      '2': 6930,
      '1': 7590,
    },
    good: {
      max: 4990,
      aMax: 6010,
      '4': 6200,
      '3': 7110,
      '2': 7970,
      '1': 8730,
    },
    medium: {
      max: 6850,
      aMax: 6850,
      '4': 6920,
      '3': 7490,
      '2': 8150,
      '1': 8800,
    },
    poor: {
      max: 8880,
      aMax: 8880,
      '4': 8880,
      '3': 8910,
      '2': 9250,
      '1': 9580,
    },
  },
};

const weightAdjustments = {
  25: {
    dry: {
      more: {
        max: 110,
        aMax: 150,
        '4': 150,
        '3': 180,
        '2': 210,
        '1': 240,
      },
      less: {
        max: -70,
        aMax: -150,
        '4': -150,
        '3': -180,
        '2': -210,
        '1': -240,
      },
    },
    good: {
      more: {
        max: 140,
        aMax: 170,
        '4': 170,
        '3': 210,
        '2': 240,
        '1': 280,
      },
      less: {
        max: -140,
        aMax: -170,
        '4': -170,
        '3': -210,
        '2': -240,
        '1': -280,
      },
    },
    medium: {
      more: {
        max: 210,
        aMax: 210,
        '4': 210,
        '3': 230,
        '2': 250,
        '1': 280,
      },
      less: {
        max: -210,
        aMax: -210,
        '4': -210,
        '3': -220,
        '2': -250,
        '1': -280,
      },
    },
    poor: {
      more: {
        max: 300,
        aMax: 300,
        '4': 300,
        '3': 300,
        '2': 310,
        '1': 320,
      },
      less: {
        max: -290,
        aMax: -290,
        '4': -290,
        '3': -290,
        '2': -300,
        '1': -310,
      },
    },
  },
  30: {
    dry: {
      more: {
        max: 140,
        aMax: 240,
        '4': 250,
        '3': 290,
        '2': 310,
        '1': 330,
      },
      less: {
        max: -80,
        aMax: -150,
        '4': -160,
        '3': -190,
        '2': -220,
        '1': -250,
      },
    },
    good: {
      more: {
        max: 200,
        aMax: 280,
        '4': 290,
        '3': 330,
        '2': 360,
        '1': 380,
      },
      less: {
        max: -140,
        aMax: -170,
        '4': -180,
        '3': -220,
        '2': -250,
        '1': -290,
      },
    },
    medium: {
      more: {
        max: 290,
        aMax: 310,
        '4': 320,
        '3': 360,
        '2': 370,
        '1': 380,
      },
      less: {
        max: -220,
        aMax: -220,
        '4': -220,
        '3': -230,
        '2': -250,
        '1': -290,
      },
    },
    poor: {
      more: {
        max: 390,
        aMax: 390,
        '4': 390,
        '3': 430,
        '2': 430,
        '1': 430,
      },
      less: {
        max: -300,
        aMax: -300,
        '4': -300,
        '3': -300,
        '2': -310,
        '1': -320,
      },
    },
  },
};

const altAdjustments = {
  25: {
    dry: {
      max: 80,
      aMax: 150,
      '4': 160,
      '3': 190,
      '2': 220,
      '1': 250,
    },
    good: {
      max: 140,
      aMax: 170,
      '4': 180,
      '3': 220,
      '2': 250,
      '1': 290,
    },
    medium: {
      max: 220,
      aMax: 220,
      '4': 220,
      '3': 230,
      '2': 250,
      '1': 290,
    },
    poor: {
      max: 300,
      aMax: 300,
      '4': 300,
      '3': 300,
      '2': 310,
      '1': 320,
    },
  },
  30: {
    dry: {
      max: 80,
      aMax: 150,
      '4': 150,
      '3': 180,
      '2': 210,
      '1': 240,
    },
    good: {
      max: 140,
      aMax: 170,
      '4': 170,
      '3': 210,
      '2': 240,
      '1': 280,
    },
    medium: {
      max: 220,
      aMax: 220,
      '4': 220,
      '3': 230,
      '2': 250,
      '1': 280,
    },
    poor: {
      max: 300,
      aMax: 300,
      '4': 300,
      '3': 300,
      '2': 310,
      '1': 320,
    },
  },
};

const windAdjustments = {
  25: {
    dry: {
      head: {
        max: -130,
        aMax: -250,
        '4': -260,
        '3': -300,
        '2': -350,
        '1': -400,
      },
      tail: {
        max: 440,
        aMax: 840,
        '4': 870,
        '3': 1030,
        '2': 1180,
        '1': 1350,
      },
    },
    good: {
      head: {
        max: -240,
        aMax: -290,
        '4': -300,
        '3': -350,
        '2': -400,
        '1': -460,
      },
      tail: {
        max: 830,
        aMax: 980,
        '4': 1010,
        '3': 1180,
        '2': 1360,
        '1': 1550,
      },
    },
    medium: {
      head: {
        max: -380,
        aMax: -380,
        '4': -380,
        '3': -400,
        '2': -440,
        '1': -470,
      },
      tail: {
        max: 1360,
        aMax: 1360,
        '4': 1370,
        '3': 1440,
        '2': 1530,
        '1': 1630,
      },
    },
    poor: {
      head: {
        max: -550,
        aMax: -550,
        '4': -550,
        '3': -560,
        '2': -580,
        '1': -590,
      },
      tail: {
        max: 2090,
        aMax: 2080,
        '4': 2080,
        '3': 2100,
        '2': 2140,
        '1': 2190,
      },
    },
  },
  30: {
    dry: {
      head: {
        max: -130,
        aMax: -240,
        '4': -250,
        '3': -300,
        '2': -350,
        '1': -390,
      },
      tail: {
        max: 440,
        aMax: 830,
        '4': 860,
        '3': 1020,
        '2': 1170,
        '1': 1340,
      },
    },
    good: {
      head: {
        max: -240,
        aMax: -290,
        '4': -290,
        '3': -350,
        '2': -400,
        '1': -450,
      },
      tail: {
        max: 830,
        aMax: 970,
        '4': 1000,
        '3': 1170,
        '2': 1350,
        '1': 1540,
      },
    },
    medium: {
      head: {
        max: -380,
        aMax: -380,
        '4': -380,
        '3': -400,
        '2': -430,
        '1': -470,
      },
      tail: {
        max: 1360,
        aMax: 1360,
        '4': 1370,
        '3': 1440,
        '2': 1520,
        '1': 1630,
      },
    },
    poor: {
      head: {
        max: -550,
        aMax: -550,
        '4': -550,
        '3': -560,
        '2': -580,
        '1': -590,
      },
      tail: {
        max: 2090,
        aMax: 2090,
        '4': 2090,
        '3': 2100,
        '2': 2140,
        '1': 2190,
      },
    },
  },
};

const tempAdjustments = {
  25: {
    dry: {
      above: {
        max: 80,
        aMax: 160,
        '4': 160,
        '3': 190,
        '2': 220,
        '1': 250,
      },
      below: {
        max: -70,
        aMax: -160,
        '4': -160,
        '3': -190,
        '2': -210,
        '1': -240,
      },
    },
    good: {
      above: {
        max: 140,
        aMax: 180,
        '4': 180,
        '3': 220,
        '2': 250,
        '1': 290,
      },
      below: {
        max: -140,
        aMax: -180,
        '4': -180,
        '3': -220,
        '2': -240,
        '1': -280,
      },
    },
    medium: {
      above: {
        max: 210,
        aMax: 220,
        '4': 220,
        '3': 230,
        '2': 250,
        '1': 290,
      },
      below: {
        max: -200,
        aMax: -210,
        '4': -210,
        '3': -230,
        '2': -250,
        '1': -280,
      },
    },
    poor: {
      above: {
        max: 290,
        aMax: 290,
        '4': 290,
        '3': 300,
        '2': 300,
        '1': 320,
      },
      below: {
        max: -260,
        aMax: -260,
        '4': -260,
        '3': -280,
        '2': -290,
        '1': -300,
      },
    },
  },
  30: {
    dry: {
      above: {
        max: 80,
        aMax: 150,
        '4': 160,
        '3': 190,
        '2': 210,
        '1': 240,
      },
      below: {
        max: -70,
        aMax: -150,
        '4': -160,
        '3': -190,
        '2': -210,
        '1': -230,
      },
    },
    good: {
      above: {
        max: 140,
        aMax: 170,
        '4': 180,
        '3': 220,
        '2': 240,
        '1': 280,
      },
      below: {
        max: -140,
        aMax: -170,
        '4': -180,
        '3': -220,
        '2': -240,
        '1': -260,
      },
    },
    medium: {
      above: {
        max: 210,
        aMax: 210,
        '4': 220,
        '3': 230,
        '2': 250,
        '1': 280,
      },
      below: {
        max: -200,
        aMax: -200,
        '4': -210,
        '3': -230,
        '2': -240,
        '1': -260,
      },
    },
    poor: {
      above: {
        max: 290,
        aMax: 290,
        '4': 290,
        '3': 290,
        '2': 300,
        '1': 310,
      },
      below: {
        max: -260,
        aMax: -260,
        '4': -260,
        '3': -280,
        '2': -290,
        '1': -290,
      },
    },
  },
};

const appSpeedAdjustments = {
  25: {
    dry: {
      max: 120,
      aMax: 300,
      '4': 310,
      '3': 360,
      '2': 320,
      '1': 290,
    },
    good: {
      max: 200,
      aMax: 350,
      '4': 360,
      '3': 410,
      '2': 370,
      '1': 330,
    },
    medium: {
      max: 250,
      aMax: 330,
      '4': 360,
      '3': 410,
      '2': 370,
      '1': 330,
    },
    poor: {
      max: 300,
      aMax: 300,
      '4': 300,
      '3': 380,
      '2': 370,
      '1': 330,
    },
  },
  30: {
    dry: {
      max: 130,
      aMax: 300,
      '4': 310,
      '3': 360,
      '2': 320,
      '1': 290,
    },
    good: {
      max: 210,
      aMax: 350,
      '4': 360,
      '3': 410,
      '2': 370,
      '1': 330,
    },
    medium: {
      max: 250,
      aMax: 320,
      '4': 350,
      '3': 410,
      '2': 370,
      '1': 330,
    },
    poor: {
      max: 300,
      aMax: 300,
      '4': 300,
      '3': 390,
      '2': 370,
      '1': 330,
    },
  },
};

const slopeAdjustments = {
  25: {
    dry: {
      down: {
        max: 50,
        aMax: 0,
        '4': 0,
        '3': 0,
        '2': 50,
        '1': 170,
      },
      up: {
        max: -40,
        aMax: 0,
        '4': 0,
        '3': -20,
        '2': -120,
        '1': -220,
      },
    },
    good: {
      down: {
        max: 140,
        aMax: 20,
        '4': 10,
        '3': 0,
        '2': 60,
        '1': 200,
      },
      up: {
        max: -130,
        aMax: 0,
        '4': 0,
        '3': -20,
        '2': -140,
        '1': -250,
      },
    },
    medium: {
      down: {
        max: 350,
        aMax: 300,
        '4': 280,
        '3': 180,
        '2': 180,
        '1': 280,
      },
      up: {
        max: -280,
        aMax: -180,
        '4': -160,
        '3': -120,
        '2': -200,
        '1': -290,
      },
    },
    poor: {
      down: {
        max: 760,
        aMax: 760,
        '4': 760,
        '3': 700,
        '2': 670,
        '1': 690,
      },
      up: {
        max: -520,
        aMax: -520,
        '4': -510,
        '3': -430,
        '2': -450,
        '1': -490,
      },
    },
  },
  30: {
    dry: {
      down: {
        max: 50,
        aMax: 0,
        '4': 0,
        '3': 0,
        '2': 40,
        '1': 160,
      },
      up: {
        max: -40,
        aMax: 0,
        '4': 0,
        '3': -10,
        '2': -110,
        '1': -210,
      },
    },
    good: {
      down: {
        max: 140,
        aMax: 20,
        '4': 10,
        '3': 0,
        '2': 50,
        '1': 180,
      },
      up: {
        max: -130,
        aMax: 0,
        '4': 0,
        '3': -10,
        '2': -130,
        '1': -240,
      },
    },
    medium: {
      down: {
        max: 350,
        aMax: 320,
        '4': 290,
        '3': 200,
        '2': 180,
        '1': 260,
      },
      up: {
        max: -280,
        aMax: -200,
        '4': -170,
        '3': -120,
        '2': -180,
        '1': -280,
      },
    },
    poor: {
      down: {
        max: 770,
        aMax: 770,
        '4': 770,
        '3': 720,
        '2': 670,
        '1': 700,
      },
      up: {
        max: -530,
        aMax: -530,
        '4': -530,
        '3': -440,
        '2': -460,
        '1': -490,
      },
    },
  },
};

const reverseThrustAdjustments = {
  25: {
    dry: {
      one: {
        max: 80,
        aMax: 0,
        '4': 0,
        '3': 0,
        '2': 110,
        '1': 480,
      },
      two: {
        max: 170,
        aMax: 0,
        '4': 0,
        '3': 0,
        '2': 110,
        '1': 620,
      },
    },
    good: {
      one: {
        max: 300,
        aMax: 20,
        '4': 10,
        '3': 0,
        '2': 130,
        '1': 550,
      },
      two: {
        max: 670,
        aMax: 90,
        '4': 60,
        '3': 0,
        '2': 130,
        '1': 710,
      },
    },
    medium: {
      one: {
        max: 790,
        aMax: 690,
        '4': 610,
        '3': 400,
        '2': 370,
        '1': 660,
      },
      two: {
        max: 1910,
        aMax: 1820,
        '4': 1740,
        '3': 1270,
        '2': 1010,
        '1': 1180,
      },
    },
    poor: {
      one: {
        max: 1670,
        aMax: 1680,
        '4': 1680,
        '3': 1530,
        '2': 1380,
        '1': 1530,
      },
      two: {
        max: 4450,
        aMax: 4470,
        '4': 4470,
        '3': 4320,
        '2': 4000,
        '1': 3970,
      },
    },
  },
  30: {
    dry: {
      one: {
        max: 80,
        aMax: 0,
        '4': 0,
        '3': 0,
        '2': 80,
        '1': 410,
      },
      two: {
        max: 160,
        aMax: 0,
        '4': 0,
        '3': 0,
        '2': 80,
        '1': 540,
      },
    },
    good: {
      one: {
        max: 280,
        aMax: 20,
        '4': 10,
        '3': 0,
        '2': 90,
        '1': 470,
      },
      two: {
        max: 620,
        aMax: 90,
        '4': 60,
        '3': 0,
        '2': 90,
        '1': 620,
      },
    },
    medium: {
      one: {
        max: 750,
        aMax: 690,
        '4': 620,
        '3': 410,
        '2': 350,
        '1': 580,
      },
      two: {
        max: 1770,
        aMax: 1730,
        '4': 1640,
        '3': 1220,
        '2': 940,
        '1': 1080,
      },
    },
    poor: {
      one: {
        max: 1580,
        aMax: 1590,
        '4': 1590,
        '3': 1480,
        '2': 1310,
        '1': 1450,
      },
      two: {
        max: 4140,
        aMax: 4150,
        '4': 4150,
        '3': 4050,
        '2': 3740,
        '1': 3710,
      },
    },
  },
};

interface landingDistanceInput {
  flaps: number;
  reversers: string; // 'both' | '1 inop' | '2 inop';
  approachSpeedAddition: number; // in vRef + X, this is X
  tailwind: number; // negative for headwind
  landingAltitude: number;
  landingWeight: number; // in tones
  rwySlope: number;
  temperatureDeviation: number; // centigrade deviation from ISA
  breakingAction: string; // 'dry' | 'good' | 'medium' | 'poor';
  autobrakeSettings: string; // 'max' | 'aMax' | '4' | '3' | '2' | '1';
}

function getWeightAdjustment(input: landingDistanceInput): number {
  const weightAdjustmentPer5Tons =
    weightAdjustments[input.flaps][input.breakingAction];
  const extraWeight = input.landingWeight - DEFAULT_LANDING_WEIGHT;
  if (extraWeight === 0) return 0;

  const weightSteps = Math.ceil(Math.abs(extraWeight) / 5);
  const correctionPerStep =
    extraWeight >= 0
      ? weightAdjustmentPer5Tons.more[input.autobrakeSettings]
      : weightAdjustmentPer5Tons.less[input.autobrakeSettings];
  return weightSteps * correctionPerStep;
}

function getWindAdjustment(input: landingDistanceInput): number {
  const windAdjustmentSteps = Math.ceil(Math.abs(input.tailwind) / 10);
  const windAdjustment =
    input.tailwind > 0
      ? windAdjustmentSteps *
        windAdjustments[input.flaps][input.breakingAction].tail[
          input.autobrakeSettings
        ]
      : windAdjustments[input.flaps][input.breakingAction].head[
          input.autobrakeSettings
        ];
  return windAdjustment;
}

function getTempAdjustment(input: landingDistanceInput): number {
  const tempAdjustmentSteps = Math.ceil(
    Math.abs(input.temperatureDeviation) / 10
  );
  const tempAdjustment =
    input.temperatureDeviation > 0
      ? tempAdjustmentSteps *
        tempAdjustments[input.flaps][input.breakingAction].above[
          input.autobrakeSettings
        ]
      : tempAdjustmentSteps *
        tempAdjustments[input.flaps][input.breakingAction].below[
          input.autobrakeSettings
        ];
  return tempAdjustment;
}

function getSlopeAdjustment(input: landingDistanceInput): number {
  const slopeAdjustmentSteps = Math.ceil(Math.abs(input.rwySlope));
  const slopeAdjustment =
    input.rwySlope > 0
      ? slopeAdjustmentSteps *
        slopeAdjustments[input.flaps][input.breakingAction].up[
          input.autobrakeSettings
        ]
      : slopeAdjustmentSteps *
        slopeAdjustments[input.flaps][input.breakingAction].down[
          input.autobrakeSettings
        ];
  return slopeAdjustment;
}

function getReversAdjustment(input: landingDistanceInput): number {
  return input.reversers === 'both'
    ? 0
    : input.reversers === '1 inop'
    ? reverseThrustAdjustments[input.flaps][input.breakingAction].one[
        input.autobrakeSettings
      ]
    : reverseThrustAdjustments[input.flaps][input.breakingAction].two[
        input.autobrakeSettings
      ];
}

export default function calculateLD(input: landingDistanceInput): number {
  console.log(input);
  const {
    flaps,
    breakingAction,
    autobrakeSettings,
    landingAltitude,
    approachSpeedAddition,
  } = input;

  const referenceDistance =
    referenceDistances[flaps][breakingAction][autobrakeSettings];

  const weightAdjustment = getWeightAdjustment(input);

  const altAdjustment =
    Math.ceil(landingAltitude / 1000) *
    altAdjustments[flaps][breakingAction][autobrakeSettings];

  const windAdjustment = getWindAdjustment(input);

  const slopeAdjustment = getSlopeAdjustment(input);

  const tempAdjustment = getTempAdjustment(input);

  const appSpeedAdjustmentSteps = Math.ceil(
    Math.abs(approachSpeedAddition) / 5
  );
  const appSpeedAdjustment =
    appSpeedAdjustmentSteps *
    appSpeedAdjustments[flaps][breakingAction][autobrakeSettings];

  const reverseAdjustment = getReversAdjustment(input);

  const total =
    referenceDistance +
    weightAdjustment +
    altAdjustment +
    windAdjustment +
    slopeAdjustment +
    tempAdjustment +
    appSpeedAdjustment +
    reverseAdjustment;
  return total;
}
