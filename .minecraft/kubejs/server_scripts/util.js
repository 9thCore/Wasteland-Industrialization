const countItemRegex = /^(\d+)x (.+)$/;

function arbitraryRangeRandom(min, max) {
	return Math.random() * (max - min) + min;
}

function stripCountFromItem(item) {
	const arr = item.match(countItemRegex);
	return arr != null ? [Number.parseInt(arr[1]), arr[2]] : [1, item];
}

function constructArrayIfNeeded(x) {
	return x == null ? [] : Array.isArray(x) ? x : [x];
}