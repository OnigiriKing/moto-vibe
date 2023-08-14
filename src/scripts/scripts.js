

export function changeClass(baseClass, newClass) {
    const classList = document.querySelector(baseClass).classList;
    classList.contains(newClass)
      ? classList.remove(newClass)
      : classList.add(newClass);
  };