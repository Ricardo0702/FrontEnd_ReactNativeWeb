module.exports = {
  locales: ['en', 'es', 'ca'],
  defaultNamespace: 'translation',
  output: 'src/languages/$LOCALE.json',
  keySeparator: '.', // permite que "error.loading.person" se divida en niveles
  namespaceSeparator: false,
  useKeysAsDefaultValue: true,
  verbose: true,
  failOnWarnings: false,
  createOldCatalogs: false,
  enableHierarchicalJSON: true, // clave para generar estructuras anidadas
};
