import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [".DS_Store", "**/.DS_Store/**", "node_modules", "**/node_modules/**", "dist", "**/dist/**", ".idea", "**/.idea/**", ".vscode", "**/.vscode/**", ".next", "**/.next/**"],
  formatters: true,
  typescript: true,
  react: true,
})
