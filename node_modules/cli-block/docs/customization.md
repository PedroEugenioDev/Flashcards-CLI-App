---
title: Customizing
icon: /assets/icon_customizing.svg
tags: documentation,custom
---

# Customizing

There are few things which can be easily customized. The border type and the color of the borders.
To give the borders another color you pass an object to the function with the settings;

```js
const settings = {
  borderType: "double",
  borderColor: "blue",
};

log.start("My Text", settings);
```

You will have to pass these settings to any occurence of a log.

#### Border Type

default: `borderType: 'single'`

For now, there are two types of borders available; 'single', 'double' and 'fat'

Single:

```
┏━━━━┓
┃    ┃
┠────┨
┃    ┃
┗━━━━┛
```

Double:

```
╔════╗
║    ║
╟────╢
║    ║
╚════╝
```

__Usage__ 
```js
{
  borderType: 'single' // BorderType.single
}
```


#### Border Color

default: `borderColor: 'dim'`

dim, red, yellow, green, blue, magenta, black, white, gray

__Usage__

```js
{
  borderColor: 'yellow' // BorderType.yellow
}
```
