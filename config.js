/*
 * https://rentry.org/teralomaniac_clewd
 * https://github.com/teralomaniac/clewd
 */

// SET YOUR COOKIE BELOW

module.exports = {
  Cookie: "",
  CookieArray: [
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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"
  ],
  Cookiecounter: 8,
  CookieIndex: 0,
  ProxyPassword: "",
  Ip: "127.0.0.1",
  Port: 8444,
  localtunnel: false,
  BufferSize: 1,
  SystemInterval: 3,
  rProxy: "https://claude.ai",
  api_rProxy: "",
  padtxt_placeholder: "",
  PromptExperimentFirst: "",
  PromptExperimentNext: "",
  PersonalityFormat: "{{char}}'s personality: {{personality}}",
  ScenarioFormat: "Dialogue scenario: {{scenario}}",
  Settings: {
    RenewAlways: true,
    RetryRegenerate: false,
    PromptExperiments: true,
    SystemExperiments: true,
    PreventImperson: false,
    AllSamples: false,
    NoSamples: false,
    StripAssistant: false,
    StripHuman: false,
    PassParams: false,
    ClearFlags: true,
    PreserveChats: false,
    LogMessages: true,
    FullColon: true,
    padtxt: 15000,
    xmlPlot: true,
    Superfetch: true,
  },
};

/*
 BufferSize
 * How many characters will be buffered before the AI types once
 * lower = less chance of `PreventImperson` working properly

 ---

 SystemInterval
 * How many messages until `SystemExperiments alternates`

 ---

 Other settings
 * https://gitgud.io/ahsk/clewd/#defaults
 * and
 * https://gitgud.io/ahsk/clewd/-/blob/master/CHANGELOG.md
 */
