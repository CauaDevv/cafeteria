/** Combina nomes de classes opcionais sem adicionar dependências. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}
