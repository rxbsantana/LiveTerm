import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  return `
========================================================
||  .              .     .-.     .-.     .-.     .-.  ||
||-( |------------| )---(   )---(   )---(   )---(   )-||   sumfetch: summary display
||  "              "     "-"     "-"     "-"     "-"  ||  -----------
||  .-.                  .-.     .-.     .-.     .-.  ||   ABOUT
||-(   )----------------(   )---(   )---(   )---(   )-||   ${config.name}
||  "-"                  "-"     "-"     "-"     "-"  ||   <u><a href="${config.resume_url}" target="_blank">resume</a></u>
||  .-.     .              .     .-.     .-.     .-.  ||  爵 <u><a href="https://wwww.${config.ps1_hostname}" target="_blank">website</a></u>
||-(   )---( |------------| )---(   )---(   )---(   )-||  -----------
||  "-"     "              "     "-"     "-"     "-"  ||   CONTACT
||  .-.     .-.                  .-.     .-.     .-.  ||   <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
||-(   )---(   )----------------(   )---(   )---(   )-||   <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
||  "-"     "-"                  "-"     "-"     "-"  ||
========================================================
`;
};

export default sumfetch;
