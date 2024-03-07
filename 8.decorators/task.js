//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];
	
	return function (...args) {
    const hash = (JSON.stringify(args)); // вычисляем хэш аргументов
		let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хеш которого равен нашему хешу

    if (objectInCache) { // если элемент найден
        console.log("Из кеша: " + objectInCache.value); 
        return "Из кеша: " + objectInCache.value;
    }

    let result = func(...args); // возвращаем функцию
    cache.push({hash, value: result}) ; // добавляем элемент с правильной структурой
    
		if (cache.length > 5) { 
      cache.shift() // если слишком много элементов в кеше, надо удалить самый старый (первый) 
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
	};

}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId;
	let count = 0;
	let allCount = 0;

	function wrapper(...args) {
		clearTimeout(timeoutId);

		const shouldCallNow = !timeoutId;
		
		timeoutId = setTimeout(() => {
			timeoutId = null;
			if(!shouldCallNow) {
				func(...args);
			}
		}, delay);

		if(shouldCallNow) {
			count++;
			func(...args);
		}

		allCount++;
	};

	Object.defineProperty(wrapper, 'count', {
		get() {
			return count;
		}
	});

	Object.defineProperty(wrapper, 'allCount', {
		get() {
			return allCount;
		}
	});

	return wrapper;
}

