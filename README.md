# ksiegi_wieczyste

Usage:

```
let KW = require('ksiegi_wieczyste');

let str = "LU1B/00012345/6";

> KW.isValid(str) 
> false

> KW.checksum(str) 
> 8

> KW.validate(str) 
> "LU1B/00012345/8"


> KW.kw(str) 
{ courtId: 'LU1B',
  court: 'BIAŁA PODLASKA',
  number: '00012345',
  checksum: '6', // NOTE: this is value from input (call 'validate' if you want to get valid number)
  parts: [ 'LU1B', '00012345', '6' ] }
  
```

