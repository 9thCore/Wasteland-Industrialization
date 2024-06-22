const countItemRegex = /^(\d+)x (.+)$/;

// Code from Swedz, posted at https://github.com/KubeJS-Mods/KubeJS/issues/602
// Used to get around race conditions involving tags?
const forEachItemMatchingRegex = (regex, callback) =>
{
  let regexes = constructArrayIfNeeded(regex);
  regexes.map(r => Ingredient.of(r).itemIds).forEach(items => items.forEach(item => callback(item)));
}

// Function that's called to add something to a tag
// If it's a regex, does workaround present above - otherwise, normal behaviour
function addThingToTag(event, thing, tag) {
	if (thing instanceof RegExp) {
		forEachItemMatchingRegex(thing, item => {
			event.add(tag, item)
		})
	} else {
		event.add(tag, thing)
	}
}

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