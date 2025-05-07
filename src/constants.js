export const contentStyle = {
  fontFamily: "Tagesschrift",
  fontWeight:"200",
  fontSize: "14px",
  color: "#333333",
  align: "center",
  wordWrap: { width: 300 },
};

export const gbvCasesConfig = [
  {
    level: 1,
    scenarioText: `
      I’ve been getting constant messages from someone on social media. 
      They won’t stop—even after I blocked them. 
      They keep creating new accounts just to message me."
    `,
    actionText: `
      What will you do? (Pick One)`,
    supportiveText: `Adjust my privacy settings to restrict who can contact me.`,
    unSupportiveText: `Delete my social media accounts entirely to avoid confrontation.`,
  },
  {
    level: 2,
    scenarioText: `
  Someone posted my home address and phone number online without my permission. 
  Now I’m getting threatening calls and messages.
`,
    actionText: ` 
  What should I do? (Pick One)`,
    supportiveText: `File a report with the website hosting the information to have it removed.`,
    unSupportiveText: `Panic and shut down all my online profiles.`,
  },
  {
    level: 3,
    scenarioText: `
  My ex shared intimate photos of me online without my consent. 
  Now strangers are messaging me about them, and I feel humiliated.
`,
    actionText: ` 
  What should I do? (Pick One)`,
    supportiveText: `Consult a lawyer about pressing charges under laws`,
    unSupportiveText: `Respond angrily to everyone messaging me, which makes me feel worse.`,
  },
  {
    level: 4,
    scenarioText: `
  I found out someone created a fake profile pretending to be me. 
  They’re posting embarrassing things and tagging my friends. 
  I’m worried people will think it’s really me.
`,
    actionText: ` 
  What should I do? (Pick One)`,
    supportiveText: `Inform my friends privately that the account isn’t mine.`,
    unSupportiveText: `Ignore the fake profile, assuming no one will believe it’s real.`,
  },
  {
    level: 5,
    scenarioText: `
  Every time I post something online, I get hateful comments calling me names and making sexist remarks. 
  It’s affecting my confidence, and I don’t want to log in anymore.
`,
    actionText: ` 
  What should I do? (Pick One)`,
    supportiveText: `Block and report the abusive users.`,
    unSupportiveText: `Engage with the trolls, arguing back and defending myself.`,
  },
];
