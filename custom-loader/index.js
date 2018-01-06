module.exports = function (source) {
  
  const JSON_STRING = typeof source === "string" ? JSON.parse(source) : source;
  let resultedString = {};
  for (const key in JSON_STRING) {
        const value = JSON_STRING[key];
        if (typeof value != 'number') {
            resultedString[key] = value;
        }
  }
  resultedString = JSON.stringify(resultedString)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
    

  return `module.exports = ${resultedString}`;
}

