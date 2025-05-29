module.exports = {
  locales: ['en', 'es'],
  defaultNamespace: 'translation',
  output: 'src/languages/$LOCALE.json',
  keySeparator: false, // permite usar claves como "welcome.title" sin dividirlas
  namespaceSeparator: false,
  useKeysAsDefaultValue: true, // los valores serán iguales a las claves si no existen
  verbose: true,
  failOnWarnings: false,
  createOldCatalogs: false,
};
