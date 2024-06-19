---
title: About
projectTitle: CLI-Blocks
projectStyle: /assets/custom.css
---

# CLI BLOCKS

Create good looking blocks in your CLI

![intro](https://i.ibb.co/9v2bx1N/Screenshot-2020-02-22-at-11-34-29.png)

```js
import * as log from "cli-block";

log.start("CLI Blocks");
log.blockHeader("Let's go");
log.blockLine();
log.blockLine("So, this is CLI Blocks");
log.blockLine();
log.blockLine("A package to easily create good looking blocks in your CLI");
log.blockFooter();
```

## Installation

Install from npm

```bash
npm i cli-block
```

And use it in your js file;

```js
import { start } from "cli-block";

start("CLI Blocks");

// or 

import * as log from "cli-block";

log.start("CLI Blocks");

```





[gist=2d9aff65094156a9f52f67594e8000d0]