function isObjectInLocalStorage(key, targetObject) {
  // Отримуємо дані з localStorage за ключем

  const storedData = localStorage.getItem(key);
  console.log(storedData);
  // Перевіряємо, чи дані знайдені
  if (storedData) {
    try {
      // Розпарсимо збережені дані у формат JSON
      const parsedData = JSON.parse(storedData);

      // Перевіряємо, чи знайдений об'єкт відповідає цільовому об'єкту
      for (const prop in targetObject) {
        if (
          targetObject.hasOwnProperty(prop) &&
          targetObject[prop] !== parsedData[prop]
        ) {
          return false;
        }
      }

      return true; // Об'єкт знайдено
    } catch (error) {
      console.error('Помилка при розпарсюванні даних з localStorage:', error);
      return false; // Якщо сталася помилка при розпарсюванні
    }
  }

  return false; // Об'єкт не знайдено
}

export { isObjectInLocalStorage };
