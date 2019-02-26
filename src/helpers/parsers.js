export function getIdParser(arg) {
      const reg = /\d+/;
      return arg.match(reg).join('');
}
