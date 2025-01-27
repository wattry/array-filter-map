# Array Filter Map
A proposal for a prototype Array.prototype.filterMap and Array.prototype.filterMapReplace function that combines the functionality of filter and map into one call.

## Install

```shell
pnpm install @wattry/array-filter-map --registry=https://npm.pkg.github.com
```

## Usage

### ESM

#### Polyfill filterMap and filterMapReplace

```javascript
import '@wattry/array-filter-map';
import assert from 'node:assert';

const filterMapArr = [1, 2, 3, 4, 5];

const result = filterMapArr.filterMap((x) =>.{
  if (x % 2 === 0) {
    return `${x} is even`;
  }
});

assert.deepEqual(result, ['2 is even', '4 is even']);

const filterMapReplaceArr = [1, 2, 3, 4, 5];

filterMapReplaceArr.filterMapReplace((x) =>.{
  if (x % 2 === 0) {
    return `${x} is even`;
  }
});

assert.deepEqual(filterMapReplaceArr, ['2 is even', '4 is even']);
```

#### Polyfill filterMap

```javascript
import '@wattry/array-filter-map/map';
import assert from 'node:assert';

const result = [1, 2, 3, 4, 5].filterMap((x) =>.{
  if (x % 2 === 0) {
    return `${x} is even`;
  }
});

assert.deepEqual(result, ['2 is even', '4 is even']);
```

#### Polyfill filterMapReplace

```javascript
import '@wattry/array-filter-map/replace';
import assert from 'node:assert';

const filterMapReplaceArr = [1, 2, 3, 4, 5];

filterMapReplaceArr.filterMapReplace((x) =>.{
  if (x % 2 === 0) {
    return `${x} is even`;
  }
});

assert.deepEqual(filterMapReplaceArr, ['2 is even', '4 is even']);
```

### CJS

#### Polyfill filterMap and filterMapReplace

```javascript
require('@wattry/array-filter-map');
const assert = require('node:assert');

const filterMapArr = [1, 2, 3, 4, 5];

const result = filterMapArr.filterMap((x) =>.{
  if (x % 2 === 0) {
    return `${x} is even`;
  }
});

assert.deepEqual(result, ['2 is even', '4 is even']);

const filterMapReplaceArr = [1, 2, 3, 4, 5];

filterMapReplaceArr.filterMapReplace((x) =>.{
  if (x % 2 === 0) {
    return `${x} is even`;
  }
});

assert.deepEqual(filterMapReplaceArr, ['2 is even', '4 is even']);
```

#### Polyfill filterMap

```javascript
require('@wattry/array-filter-map/map');
const assert = require('node:assert');

const result = [1, 2, 3, 4, 5].filterMap((x) =>.{
  if (x % 2 === 0) {
    return `${x} is even`;
  }
});

assert.deepEqual(result, ['2 is even', '4 is even']);
```

#### Polyfill filterMapReplace

```javascript
require('@wattry/array-filter-map/replace');
const assert = require('node:assert');

const filterMapReplaceArr = [1, 2, 3, 4, 5];

filterMapReplaceArr.filterMapReplace((x) =>.{
  if (x % 2 === 0) {
    return `${x} is even`;
  }
});

assert.deepEqual(filterMapReplaceArr, ['2 is even', '4 is even']);
```