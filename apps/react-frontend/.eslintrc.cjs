import baseConfig from '../../.eslintrc.js'

const config = {
  ...baseConfig,
  root: true,
  extends: [...baseConfig.extends, 'plugin:react-hooks/recommended'],
  plugins: [...baseConfig.plugins, 'react-refresh'],
  rules: {
    ...baseConfig.rules,
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
}

export default config
