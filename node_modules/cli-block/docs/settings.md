---
icon: /assets/icon_settings.svg
---

# Settings

All available settings per log.


| Argument       | Description                            | Default                         | Options                             |
| -------------- | -------------------------------------- | ------------------------------- | ----------------------------------- |
| borderType     | The border type being used             | 'single'                        | [See border types](#border-type)    |
| borderColor    | The border color being used            | 'dim'                           | [See border color](#border-color)   |
| indentBlock    | Space between left of window and frame | `5`                             | Any number                          |
| prefix         | Prefix used on block Lines.            | ``                              |                                     |
| tableHeader    | Use a header on the Block Table        | `true`                          | `true` / `false`                    |
| frameWidth     | Max width of the frame                 | `80`                            |                                     |
| tableSpace     | Give a table space                     | `true`                          | `true` / `false`                    |
| padding        | Padding used in settings               | `-1`                            |                                     |
| logger         | The default logging function           | `stdout` / `LoggerType.STDOUT ` | `stdout`, `console`                 |
| logLevel       | Set Level of logging of log            | `3` / `LoggerLevel.VERBOSE`     | [See border color](#logging-levels) |
| logOutputLevel | Set Level of logging allowed           | `3` / `LoggerLevel.VERBOSE`     | [See border color](#logging-levels) |


```js
export const defaultSettings: LoggerSettings = {
  borderType: BorderType.single,
  borderColor: BorderColor.dim,
  frameWidth: 80,
  indentBlock: 5,
  prefix: "",
  newLine: true,
  autoSpace: true,
  tableHeader: true,
  tableSpace: true,
  padding: -1,
  logger: LoggerType.STDOUT,
  logLevel: LoggerLevel.VERBOSE,
  logOutputLevel: LoggerLevel.VERBOSE,
};
```
