const { REST, Routes } = require('discord.js');


const commands = [
  {
    name: 'menu',
    description: 'menu',
  },
  {
    name: 'update',
    description: 'update check',
  },
  {
    name: 'clear',
    description: 'clear messages',
  },
];

const rest = new REST({ version: '10' }).setToken('MTA2ODUzOTc2NDAwMjc4NzM0OA.G8ezL7.-Sc-5gjDFvqgHqcf3MJ9HHhvayzbCtL2QwqiPg');

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands('1068539764002787348', '1056550954327085096'), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();