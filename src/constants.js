export const contentStyle = {
  fontFamily: "Cutive",
  fontWeight: "100",
  fontStyle: "normal",
  fontSize: "14px",
  color: "#333333",
  align: "center",
  wordWrap: { width: 300 },
};

export const gbvCasesConfig = [
  {
    level: 1,
    scenarioText: `
      When your friend says,
      "I feel like I can't talk to
      anyone anymore."
    `,
    actionText: `
      What will you say? (Pick One)`,
    supportiveText: `That's tough. Do you want to talk about it?`,
    unSupportiveText: `You're overreacting. It can't be that bad.`,
  },
  {
    level: 2,
    scenarioText: `
  My ex shared intimate photos of me online without my consent. 
  Now strangers are messaging me about them, and I feel humiliated. 
`,
    actionText: ` 
  What should I do? (Pick One)`,
    supportiveText: `Request the removal of the photos from the platform.`,
    unSupportiveText: `Try to ignore the situation, hoping it will blow over.`,
  },
  {
    level: 3,
    scenarioText: `
  Alice
`,
    actionText: ` 
  Alice (Pick One)`,
    supportiveText: `Alice`,
    unSupportiveText: `Alice`,
  },
];
