const modules = import.meta.glob('./**/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })

export default Object.entries(modules).reduce((map, [path, module]) => {
  const match = /^\.\/(.+)?\.(png|jpg|jpeg|webp)$/g.exec(path)
  const name = match ? match[1] : path

  
  map[name] = module as string

  return map
}, {} as Record<string, string>)