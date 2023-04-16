export const nameToId = (name: string) => name.trim().toLowerCase().split('').map(char => 'abcdefghijklmnopqrstuvwxyz0123456789'.indexOf(char) !== -1 ? char : '-').join('').split('--').join('-')
