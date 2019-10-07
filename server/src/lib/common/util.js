/* eslint-disable no-useless-escape */


function isProductionEnv() {
  return process.env.NODE_ENV === 'production';
}

function isTestEnv() {
  return process.env.NODE_ENV === 'test';
}

function showKerberos() {
  if (isProductionEnv() === false) {
    const kerberos = 'I can see you \n'
    + '           _..--""---. \n'
    + '          /           ". \n'
    + '          `            l \n'
    + '          |\'._  ,._ l/"\\ \n'
    + '          |  _J<__/.v._/ \n'
    + '           \\( ,~._,,,,-) \n'
    + '            `-\\\' \\`,,j| \n'
    + '               \\_,____J \n'
    + '          .--.__)--(__.--. \n'
    + '         /  `-----..--\'. j \n'
    + '         \'.- \'`--` `--\' \\\\ \n'
    + '        //  \'`---\'`  `-\' \\\\ \n'
    + '       //   \'`----\'`.-.-\' \\\\ \n'
    + '     _//     `--- -\'   \\\' | \\________ \n'
    + '    |  |         ) (      `.__.---- -\'\\ \n'
    + '     \\7          \\`-(               13\\\\\\ \n'
    + '     ||       _  /`-(               l|//7__ \n'
    + '     |l    (\'  `-)-/_.--.          f\'\'` -.-"| \n'
    + '     |\\     l\\_  `-\'    .\'         |     |  | \n'
    + '     llJ   _ _)J--._.-(\'           |     |  l \n'
    + '     |||( ( \'_)_  .l   ". _    ..__I     |  L \n'
    + '     ^\\\\\\||`\'   "   \'"-. " )\'\'`\'---\'     L.-\'`-.._ \n'
    + '          \\ |           ) /.              ``\'`-.._``-. \n'
    + '          l l          / / |                      |\'\'| \n'
    + '           " \\        / /   "-..__                |  | \n'
    + '           | |       / /          1       ,- t-...J_.\' \n'
    + '           | |      / /           |       |  | \n'
    + '           J  \\  /"  (            l       |  | \n'
    + '           | ().\'`-()/            |       |  | \n'
    + '          _.-"_.____/             l       l.-l \n'
    + '      _.-"_.+"|                  /        \\.  \\ \n'
    + '/"\\.-"_.-"  | |                 /          \\   \\ \n'
    + '\\_   "      | |                1            | `\'| \n'
    + '  |ll       | |                |            i   | \n'
    + '  \\\\\\       |-\\               \\j ..          L,,\'. `/ \n'
    + ' __\\\\\\     ( .-\\           .--\'    ``--../..\'      \'-.. \n'
    + '   `\'\'\'`----`\\\\\\\\ .....--\'\'\' \n'
    + '              \\\\\\\\                           \n';
    // eslint-disable-next-line no-console
    console.log(kerberos);
  }
}

module.exports = {
  isProductionEnv,
  isTestEnv,
  showKerberos,
};
