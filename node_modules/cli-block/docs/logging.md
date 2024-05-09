---
icon: /assets/icon_logging.svg
---

# Logging

Logging by default is simple, but there are ways to manipulate or differentiate your logging per project on different levels.

## Logging Type

By default Cli block uses the process.stdout, this is because it works with all functions. But if you want to use the console.log, you can. In that case you won't be able to use blockLoader and blockCounter optimally.

__Options__

| Option  | Description                                | Type                  |
| ------- | ------------------------------------------ | --------------------- |
| stdout  | Use `process.stdout.write` to display logs | `LoggingType.STDOUT`  |
| console | Use `console.log` to display the logs      | `LoggingType.CONSOLE` |

__Usage__

```js
{
  logging: 'stdout' // LoggingType.STDOUT
}
```

## Logging Levels

By default every log will be done, but cli-block also supports logging levels. This means that you can set a default logging level to be outputted and you can set a specific level on every log. In this way you can use enviroments to log certain things, or not.

__Options__

| Option      | Description                            | Type                       |
| ----------- | -------------------------------------- | -------------------------- |
| none        | Use `0` to never display the log       | `LoggingLevel.NONE`        |
| error       | Use `1` to only display errors         | `LoggingLevel.ERROR`       |
| performance | Use `2` to display minimal information | `LoggingLevel.PERFORMANCE` |
| verbose     | Use `3` to display all                 | `LoggingLevel.VERBOSE`     |


__Usage__

```js
{
  logLevel: 2 // LoggingType.PERFORMANCE // Set on specific Log
  logOutputLevel: 3 // LoggingType.VERBOSE // Set overal setting in your project
}
```
