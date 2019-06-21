// @flow

export default (func: Function, wait: number, immediate : boolean = false) => {
  let timeout = null;

  return (...args: any[]) => {
    const later = () => {
      timeout = null;
      if (!immediate) {
        func(...args);
      }
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) {
      func(...args);
    }
  };
};
